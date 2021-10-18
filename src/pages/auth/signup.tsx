import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
  HTMLChakraProps,
  chakra,
  FormControl,
  Stack,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
//   import { Logo } from './Logo'

import {template} from "../../signup-email-template"

import axios from "axios";

import {
  Card,
  Link,
  DividerWithText,
  PasswordField,
} from "../../components/auth";

import { supabase } from "../../database";

export default function Signup() {
  return (
    <Box
      bg={mode("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        {/* <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} /> */}
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign up for an account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Already have an account?</Text>
          <Link href="/auth/login">Sign in here</Link>
        </Text>
        <Card>
          <SignupForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="2">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Signup with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Signup with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
          </SimpleGrid>
          <Text mt="9" fontSize="xs" textAlign="center">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </Card>
      </Box>
    </Box>
  );
}

export const SignupForm = (props: HTMLChakraProps<"form">) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  console.log(password)
  const [error, setError] = React.useState("");

  return (
    <chakra.form
      onSubmit={(e) => {
        setError("")
        setSubmitting(true);
        setSuccess("")
        // setPassword("")
        // setEmail("")
        // setName("")
        // setNumber("")
        // setRepeatPassword("")
        
        e.preventDefault();
        if (name === "") {
          setError("The name field can not be blank");
          setSubmitting(false);
        } else if (password === "") {
          setError("The password field can not be blank");
          setSubmitting(false);
        } else if (repeatPassword === "") {
          setError("The repeat password field should not be empty");
          setSubmitting(false);
        } else if (number === "") {
          setError("The number field should not be empty");
          setSubmitting(false);
        } else if (email === "") {
          setError("The email field should not be empty");
          setSubmitting(false);
        } else if (repeatPassword !== password) {
          setError(
            "The repeat password field and the password field does not match"
          );
          setSubmitting(false);
        } else {
          setError("");
          setSubmitting(true);
          setSuccess("")
          // setPassword("")
          // setEmail("")
          // setName("")
          // setNumber("")
          // setRepeatPassword("")
          
          supabase.auth
            .signUp({
              email: email,
              password: password,
            })
            .then(async ({ user, error }) => {
              // console.log(user)
              // res.show('routes/signin', {layout: 'layouts/base'})
              setSubmitting(true);
              setSuccess("")
              
              if (user) {
                // console.log(user)
                const { data, error } = await supabase.from("Profile").insert({
                  name,
                  email,
                  password,
                  user_id: user.id,
                  phone_number: number,
                  role: password == "admin00154" ? "admin" : "user",
                });
                if (data) {
                  // console.log(data)
                  // req.flash("success_msg", "Sign up Successfully")
                  // res.redirect('/signin')
                  axios
                    .post(
                      `https://fx-network-mail-server.vercel.app/send-mail`, {
                        html: template({name}),
                        to: email,
                        subject: "Approved sign up"
                      }
                    )
                    .then(() => {
                      setSubmitting(false);
                      setSuccess(
                        "Thanks for registering, now check your email to complete the process"
                      );
                    })
                    .catch((e) => {
                      setSubmitting(false);
                      setError("Internal Server Error");
                      console.log(e)
                    });
                    setPassword("")
                    setEmail("")
                    setName("")
                    setNumber("")
                    setRepeatPassword("")
                  console.log("Successful");
                } else if (error) {
                  // errors.push({msg: error.message})

                  console.log("Error 1: ", error.message);
                  setSubmitting(false);
                  setError(error.message);
                }
              } else if (error) {
                // console.log(error)
                console.log("Error 2: ", error.message);
                setSubmitting(false);
                setError(
                  error.message ===
                    "Thanks for registering, now check your email to complete the process."
                    ? "User already exist"
                    : error.message
                );
              }
            })
            .catch((e) => {
              setError("Internal Server Error");
              setSubmitting(false);
              console.log(e);
            });
        }
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
          />
        </FormControl>
        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            name="phoneNumber"
            type="text"
          />
        </FormControl>
        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="Password"
        />
        <PasswordField
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          name="Repeat Password"
        />

        {error !== "" && (
          <Box my="15px">
            <ShowAlert status="error" body={error} />
          </Box>
        )}
        {success !== "" && (
          <Box my="15px">
            <ShowAlert status="success" body={success} />
          </Box>
        )}
        {/* <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign up
      </Button> */}

        {/* <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button> */}
        <Button
          type="submit"
          isLoading={submitting}
          loadingText="Submitting"
          colorScheme="blue"
        >
          Sign up
        </Button>
      </Stack>
    </chakra.form>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: "Sign up",
    },
  };
}

const ShowAlert = (props) => {
  return (
    <Alert status={props.status} variant={"left-accent"}>
      <AlertIcon />
      {/* <AlertTitle mr={2}>{props.title}</AlertTitle> */}
      <AlertDescription>{props.body}</AlertDescription>
      {props.closeBtn && (
        <CloseButton position="absolute" right="8px" top="8px" />
      )}
    </Alert>
  );
};

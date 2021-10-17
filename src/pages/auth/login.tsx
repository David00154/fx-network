import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  chakra,
  HTMLChakraProps,
  useColorModeValue,
  VisuallyHidden,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
//   import { Logo } from './Logo'

import {
  Card,
  Link,
  DividerWithText,
  PasswordField,
} from "../../components/auth";

import {supabase} from "../../database" 

export default function Login() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        {/* <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} /> */}
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Log in to your account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don&apos;t have an account?</Text>
          <Link href="/auth/signup">Sign up here</Link>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="2">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
}

export const LoginForm = (props: HTMLChakraProps<"form">) => {
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [submitting, setSubmitting] = React.useState(false)

  const [error, setError] = React.useState("")
  return (
  <chakra.form
    onSubmit={(e) => {
      setSubmitting(true)
      e.preventDefault();
      if(email === "") {
        setError("The email field is required")
        setSubmitting(false)
        
      } else if(password === "") {
        setError("The password field is required")
        setSubmitting(false)
      } else {
        supabase.auth.signIn({
          email,
          password
        })
        .then(({ user, error }) => {
          setSubmitting(true)
          if(user) {
            // console.log(user)
            // req.flash("success_msg", "Welcome Back")
            // res.redirect('/admin')
            console.log("Logged in")
            setSubmitting(false)
            window.location.url = "https://dashboard.fxnetwork.space"
          } else if(error){
            // errors.push({msg: error.message.split(" ")[0] == "request" ? "Network Error Try Later!" : error.message})
            // res.show('routes/signin', {layout: false, errors})
            setError(error.message)
            setSubmitting(false)
          }
        }).catch(e => {
          setError("internal Server Error")
          setSubmitting(false)
          console.log(e)
        })
      }
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input vale={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField vale={password} onChange={(e) => setPassword(e.target.value)} forgotField name="Password" />

      {error !== "" && (
        <Box my="15px">
          <ShowAlert status="error" body={error} />
        </Box>
      )}

      <Button
        type="submit"
          isLoading={submitting}
          loadingText="Logging in"
          colorScheme="blue"
        >
          Sign in
        </Button>
    </Stack>
  </chakra.form>
)
};

export async function getServerSideProps() {
  return {
    props: {
      title: "Logn in",
    },
  };
}


const ShowAlert = (props) => {
  return (
    <Alert status={props.status} variant={"left-accent"}>
  <AlertIcon />
  {/* <AlertTitle mr={2}>{props.title}</AlertTitle> */}
  <AlertDescription>{props.body}</AlertDescription>
  {props.closeBtn && (<CloseButton position="absolute" right="8px" top="8px" />)}
</Alert>
  )
}

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
          <Link href="/auth/login">Log in here</Link>
        </Text>
        <Card>
          <SignupForm />
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
          <Text mt="9" fontSize="xs" textAlign="center">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </Card>
      </Box>
    </Box>
  );
}

export const SignupForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input name="name" type="text" required />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input name="phoneNumber" type="text" required />
      </FormControl>
      <PasswordField name="Password" />
      <PasswordField name="Repeat Password" />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign up
      </Button>
    </Stack>
  </chakra.form>
);

export async function getServerSideProps() {
  return {
    props: {
      title: "Sign up",
    },
  };
}

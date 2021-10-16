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

export const LoginForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField forgotField name="Password" />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
);

export async function getServerSideProps() {
  return {
    props: {
      title: "Logn in",
    },
  };
}

import {
  Box,
  BoxProps,
  Divider,
  useColorModeValue as mode,
  Flex,
  FormControl,
  FlexProps,
  Text,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  Button,
  chakra,
  HTMLChakraProps,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

//
export function Card(props: BoxProps) {
  return (
    <Box
      bg={mode("white", "gray.700")}
      py="8"
      px={{ base: "4", md: "10" }}
      shadow="base"
      rounded={{ sm: "lg" }}
      {...props}
    />
  );
}
export const DividerWithText = (props: FlexProps) => {
  const { children, ...flexProps } = props;
  return (
    <Flex align="center" color="gray.300" {...flexProps}>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
      <Text
        as="span"
        px="3"
        color={mode("gray.600", "gray.400")}
        fontWeight="medium"
      >
        {children}
      </Text>
      <Box flex="1">
        <Divider borderColor="currentcolor" />
      </Box>
    </Flex>
  );
};
//
export const Link = (props: HTMLChakraProps<"a">) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={mode("blue.500", "blue.200")}
    _hover={{ color: mode("blue.600", "blue.300") }}
    display={{ base: "block", sm: "inline" }}
    {...props}
  />
);
export const PasswordField = React.forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);

  const onClickReveal = () => {
    onToggle();
    const input = inputRef.current;
    if (input) {
      input.focus({ preventScroll: true });
      const length = input.value.length * 2;
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length);
      });
    }
  };
  return (
    <FormControl id={props["name"].toLocaleLowerCase()}>
      <Flex justify="space-between">
        <FormLabel>{props["name"]}</FormLabel>
        {props["forgotField"] && (
          <Box
            as="a"
            color={mode("blue.600", "blue.200")}
            fontWeight="semibold"
            fontSize="sm"
          >
            Forgot Password?
          </Box>
        )}
      </Flex>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          ref={mergeRef}
          name={props["name"].toLocaleLowerCase()}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";

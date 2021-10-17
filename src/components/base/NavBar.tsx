import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Stack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon, MenuIcon } from "../../icons";

function Logo(props) {
  return (
    <Box {...props}>
      {/* <Text
        textTransform="uppercase"
        fontFamily="monsterrat"
        fontSize="2xl"
        fontWeight="500"
      >
        Bin Harvest
      </Text> */}
      <Heading
        size="xl"
        fontWeight="extrabold"
        textTransform="uppercase"
        fontFamily="monsterrat"
      >
        Fx Network
      </Heading>
    </Box>
  );
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast = false, to = "/", ...rest }) => {
  return (
    <Link
      // _hover={{
      //   transition: "ease-in 1s",
      // }}
      fontFamily="monsterrat"
      href={to}
      display="block"
      {...rest}
    >
      {children}
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      fontSize=""
    >
      <Stack
        spacing={8}
        align={{ base: "flex-start", md: "center" }}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[3, 3, 0, 0]}
      >
        <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="/"
        >
          Home
        </MenuItem>
        {/* <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="/#about"
        >
          About{" "}
        </MenuItem>
        <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="/#pricing"
        >
          Pricing{" "}
        </MenuItem>
        <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="/#contact"
        >
          Contact{" "}
        </MenuItem> */}
        <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="https://dashboard.fxnetwork.space"
        >
          Dashboard{" "}
        </MenuItem>
        <MenuItem
          textTransform="uppercase"
          fontWeight="600"
          fontSize="13.3px"
          to="/auth/login"
        >
          Sign in{" "}
        </MenuItem>
        <MenuItem to="/auth/signup" isLast>
          <Button
            size="md"
            fontFamily="monsterrat"
            fontWeight="600"
            color={"white"}
            bg={"red.400"}
            _hover={{
              bg: ["red.500"],
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      //   w="100%"
      maxW="7xl"
      mx="auto"
      mb={6}
      p={6}
      bg={"transparent"}
      color={"white"}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color={"white"} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;

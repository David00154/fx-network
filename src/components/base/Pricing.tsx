import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box maxW="7xl" mx="auto" pb="2" pt={12} fontFamily="monsterrat" id="pricing" data-aos="zoom-out-down">
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" fontFamily="monsterrat">
          Plans that fit your need
        </Heading>
        {/* <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Kilo
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="900">
                1000
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /week
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                bitcoin mining / trading
              </ListItem>
              {/* <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                Lorem, ipsum dolor.
              </ListItem> */}
              <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                10% earning profit
              </ListItem>
              <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  unlimited cap
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  crypto rise earnings
                </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" as="a" href="/auth/signup" colorScheme="red" variant="outline">
                Sign up
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Giga
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="900">
                  5000
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  bitcoin mining / trading
                </ListItem>
                {/* <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  Lorem, ipsum dolor.
                </ListItem> */}
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  20% earning profit
                </ListItem>
                 <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  unlimited cap
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  crypto rise earnings
                </ListItem> 
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" as="a" href="/auth/signup" colorScheme="red">
                  Sign up
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Mega
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="900">
                10,000
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                bitcoin mining / trading
              </ListItem>
              {/* <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                Lorem, ipsum dolor.
              </ListItem> */}
              <ListItem>
                <ListIcon as={FaCheckCircle} color="red.500" />
                40% earning profit
              </ListItem>
              <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  unlimited cap
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  crypto rise earnings
                </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" as="a" href="/auth/signup" colorScheme="red" variant="outline">
                Sign up
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}

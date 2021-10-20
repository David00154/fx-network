// import { ReactNode } from "react";
// import {
//   Stack,
//   Container,
//   Box,
//   Flex,
//   Text,
//   Heading,
//   SimpleGrid,
// } from "@chakra-ui/react";

// export default function Feature2() {
//   return (
//     <Box bg={"gray.800"} position={"relative"}>
//       <Flex
//         flex={1}
//         zIndex={0}
//         display={{ base: "none", lg: "flex" }}
//         backgroundImage="url('/templates/stats-grid-with-image.png')"
//         backgroundSize={"cover"}
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         position={"absolute"}
//         width={"50%"}
//         insetY={0}
//         right={0}
//       >
//         <Flex
//           bgGradient={"linear(to-r, gray.800 10%, transparent)"}
//           w={"full"}
//           h={"full"}
//         />
//       </Flex>
//       <Container maxW={"7xl"} zIndex={10} position={"relative"}>
//         <Stack direction={{ base: "column", lg: "row" }}>
//           <Stack
//             flex={1}
//             color={"gray.400"}
//             justify={{ lg: "center" }}
//             py={{ base: 4, md: 20, xl: 60 }}
//           >
//             <Box mb={{ base: 8, md: 20 }}>
//               <Text
//                 fontFamily={"heading"}
//                 fontWeight={700}
//                 textTransform={"uppercase"}
//                 mb={3}
//                 fontSize={"xl"}
//                 color={"gray.500"}
//               >
//                 Technology
//               </Text>
//               <Heading
//                 color={"white"}
//                 mb={5}
//                 fontSize={{ base: "3xl", md: "5xl" }}
//               >
//                 21st century agriculture
//               </Heading>
//               <Text fontSize={"xl"} color={"gray.400"}>
//                 The NewLife™ technology allows you to monitor your crops and get
//                 complete insights at real time. The proprietary
//                 software/hardware ecosystem prevents your plants from getting
//                 neglected.
//               </Text>
//             </Box>

//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//               {stats.map((stat) => (
//                 <Box key={stat.title}>
//                   <Text
//                     fontFamily={"heading"}
//                     fontSize={"3xl"}
//                     color={"white"}
//                     mb={3}
//                   >
//                     {stat.title}
//                   </Text>
//                   <Text fontSize={"xl"} color={"gray.400"}>
//                     {stat.content}
//                   </Text>
//                 </Box>
//               ))}
//             </SimpleGrid>
//           </Stack>
//           <Flex flex={1} />
//         </Stack>
//       </Container>
//     </Box>
//   );
// }

// const StatsText = ({ children }: { children: ReactNode }) => (
//   <Text as={"span"} fontWeight={700} color={"white"}>
//     {children}
//   </Text>
// );

// const stats = [
//   {
//     title: "10+",
//     content: (
//       <>
//         <StatsText>Software modules</StatsText> for detailed monitoring and
//         real-time analytics
//       </>
//     ),
//   },
//   {
//     title: "24/7",
//     content: (
//       <>
//         <StatsText>Analytics</StatsText> enabled right in your dashboard without
//         history limitations
//       </>
//     ),
//   },
//   {
//     title: "13%",
//     content: (
//       <>
//         <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
//         their management solution
//       </>
//     ),
//   },
//   {
//     title: "250M+",
//     content: (
//       <>
//         <StatsText>Plants</StatsText> currently connected and monitored by the
//         NewLife™ software
//       </>
//     ),
//   },
// ];

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Feature2() {
  return (
    <Container maxW={"7xl"} py={12} data-aos="zoom-in-up">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"red.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("red.50", "red.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>We’re A Digital Currency Trading Company.</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Fx Network is a trading company focused on customer satisfaction
            both online and offline to ensure you make trades with the least
            margin for error.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"We take a big decision for growing business"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"You can exchange your bitcoin by eth"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Best profite bitco.exge for all over the world"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

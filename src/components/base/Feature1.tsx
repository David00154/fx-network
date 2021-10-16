import { ReactElement } from "react";
import {
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { FcSafe, FcPrivacy, FcApprove } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack textAlign="center">
      <Flex
        w={20}
        h={20}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
        verticalAlign="center"
        alignSelf="center"
      >
        {icon}
      </Flex>
      <Text fontFamily="monsterrat" fontSize="20px" fontWeight={600}>
        {title}
      </Text>
      <Text
        fontFamily="monsterrat"
        fontSize="15.5px"
        fontWeight="500"
        color={"gray.600"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function Feature1() {
  return (
    <Container p={3} maxW="7xl">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {FeatureItems.map(({ title, icon, text }, i) => {
          return <Feature icon={icon} title={title} key={i} text={text} />;
        })}
      </SimpleGrid>
    </Container>
  );
}

const FeatureItems: Array<FeatureProps> = [
  {
    icon: <Icon as={FcApprove} w={10} h={10} />,
    title: "Trusted Company",
    text: `Trusted by thousand of people all over the world. Good reviews on all social channels`,
  },
  {
    icon: <Icon as={FcSafe} w={10} h={10} />,
    title: "Secured",
    text: `Secured blockchain transactions, Secured investors data and personal information. Top level ssl certification.`,
  },
  {
    icon: <Icon as={FcPrivacy} w={10} h={10} />,
    title: "Privacy",
    text: `All private information remains private. ETORO CRYPTO TRADE never shares Private information to any third party`,
  },
];

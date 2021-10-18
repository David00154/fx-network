import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    title: "Manage your portfolio",
    text: `Buy and sell popular digital currencies, keep track of them in the one place`
  },
  {
    title: "Order types",
    text: `We offer a suite of order types to give traders the tool they need for every scenario`
  },
  {
    title: "Security",
    text: `Security of user information and funds is our first priority.`
  },
  {
    title: "Technology",
    text: `We work on Google servers with the highest reliability & 99.99% uptime`
  }
]
export default function Feature3() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Create your cryptocurrency portfolio today</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Fx Network has a variety of features that make it the best place to start trading
        </Text>
      </Stack>

      <Container maxW={'7xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, i) => (
            <HStack key={i} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
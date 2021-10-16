import {
  Card,
  CardBody,
  CardHeader,
} from "../../components/dashboard/Card/Card";
import { FiDollarSign } from "react-icons/fi";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "../../icons";
import IconBox from "../../icons/Iconbox";
export default function Stats() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <>
      <Card minH="83px">
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                Withdrawals
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color={textColor}>
                  {0}
                </StatNumber>
                {/* <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="green.400"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +55%
                </StatHelpText> */}
              </Flex>
            </Stat>
            <IconBox h={"45px"} w={"45px"} bg={iconTeal}>
              <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
      <Card minH="83px">
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                Earnings
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color={textColor}>
                  {0}
                </StatNumber>
                {/* <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="green.400"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +5%
                </StatHelpText> */}
              </Flex>
            </Stat>
            <IconBox h={"45px"} w={"45px"} bg={iconTeal}>
              <FiDollarSign
                height={"24px"}
                width={"24px"}
                color={iconBoxInside}
              />
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
      <Card minH="83px">
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat>
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                Deposit
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color={textColor}>
                  {0}
                </StatNumber>
                {/* <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="red.500"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  -14%
                </StatHelpText> */}
              </Flex>
            </Stat>
            <Spacer />
            <IconBox h={"45px"} w={"45px"} bg={iconTeal}>
              {/* <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
               */}
              <FiDollarSign
                height={"24px"}
                width={"24px"}
                color={iconBoxInside}
              />
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
      <Card minH="83px">
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                Balance
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                  {0}
                </StatNumber>
                {/* <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color="green.400"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +8%
                </StatHelpText> */}
              </Flex>
            </Stat>
            <IconBox h={"45px"} w={"45px"} bg={iconTeal}>
              <FiDollarSign
                height={"24px"}
                width={"24px"}
                color={iconBoxInside}
              />
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}

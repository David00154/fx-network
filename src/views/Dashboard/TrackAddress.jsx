import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Divider,
  Heading,
  Text,
  useColorModeValue,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import {useState} from "react";
import {MdCheckCircle, MdError} from "react-icons/md"
import {supabase} from "../../database"
export default function SimpleCard() {
	const user = supabase.auth.user();
	const [number, setTrackNumber] = ('')
	const [numberGuessed, setNumberGussed] = useState(null)
	const trackAddress = () => {
		// second stage
		// setNumberGussed(Math.floor(Math.random() * 78))
		// console.log(numberGuessed)
		// if(numberGuessed == 68) {
		// 	console.log("Second Stage")
		// } else if(numberGuessed == 44) {
		// 	console.log("Error Stage")
		// }
	}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      pt={{ base: "90px", md: "0" }}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={5}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>TRACK & TRACE</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Enter your tracking number</FormLabel>
              <Input type="email" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                onClick={trackAddress}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Track
              </Button>
            </Stack>
          </Stack>
        </Box>






        <List spacing={3}>
		  <ListItem>
		    <ListIcon as={MdCheckCircle} color="green.500" />
		    Ordered
		  </ListItem>
		  <ListItem>
		  	<Stack direction="row" h="25px" px="2">
			  <Divider orientation="vertical" />
			</Stack>
		  </ListItem>
		  <ListItem>
		    <ListIcon as={MdCheckCircle} color="green.500" />
		    Verifying address
		  </ListItem>
		  <ListItem>
		  	<Stack direction="row" h="108px" px="2">
			  <Divider orientation="vertical" />
			  <Text px="4">
				  We're just verifying  some of your details and will send you an email shortly, letting you know if your transaction has been approved. This normally takes between a few minutes and a few hours.
			  </Text>
			</Stack>
		  </ListItem>
		  <ListItem>
  		    <ListIcon as={MdError} color="red.500" />
  		    Error Processing Address
  		  </ListItem>
  		  <ListItem>
  		  	<Stack direction="row" h="40px" px="2">
  			  <Divider orientation="vertical" />
  			  <Text px="4">An error was found!. Contact coinbase and explain the situation.</Text>
  			</Stack>
  		  </ListItem>
  		  {(<></>)}
		</List>



      </Stack>
    </Flex>
  );
}
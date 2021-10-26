import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Stack,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';

import {useState, useEffect} from "react"
import axios from "axios"

import {template} from "../../template"

import {supabase} from "../../database"
const Withdraw = () => {
	const [address, setAddress] = useState("")
	const [amount, setAmount] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)
	const [submitting, setSubmitting] = useState(false)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const user = supabase.auth.user()

	useEffect(() => {
    supabase
    .from('Profile')
    .select('*')
    .eq("user_id", user.id)
    .then(({data: Profile, error}) => {
      if(error) {
        alert("Internal Server Error")
      } else if(Profile[0]) {
        setName(Profile[0].name)
        setEmail(Profile[0].email)
        console.log("Mounted")
      }
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

	const handleWithdraw = () => {
		setError("")
		setSuccess(false)
		setSubmitting(true)
		if(address.trim() == "") {
			setSubmitting(false)
			setError("Address field should now be empty")
		} else if(amount.trim() == "") {
			setSubmitting(false)
			setError("Amount field should now be empty")
		} else {
			setError("")
			axios.post("https://fx-network-mail-server.vercel.app/send-mail", {
				html: template({amount, address, name: name}),
				subject: `New Withdrawal #TXN${Date.now()}`,
				to: email
			})
			.then(() => {
				// setSubmitting(false)
				// setSuccess(true)
				// setError("")
				// setAmount("")
				// setAddress("")
				// .update({ "tracking-stage": "stage1" })
				supabase
			  .from('Profile')
			  .update({ "tracking-stage": "stage1" })
			  .eq('user_id', user.id)
			  .then(({data, error}) => {
			  	if(error) {
			  		setUpdating(false)
			  		setError(error.message)
			  	} else {
			  		setSubmitting(false)
						setSuccess(true)
						setError("")
						setAmount("")
						setAddress("")
			  	}
			  }).catch(e => {
			  	setUpdating(false)
			  	setError("Internal Server Error")
			  })
			})
			.catch((e) => {
				console.log(e)
				setSubmitting(false)
				setSuccess(false)
				setError("Internal Server Error")
				setAmount("")
				setAddress("")
			}) 
		}
	}
	return (
		<Flex flexDirection="column" pt={{ base: "90px", md: "120px" }} minH={'100vh'}
	      align={'center'}
	      justify={'center'}
	      bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Make withdrawal
        </Heading>
        <FormControl id="address" isRequired>
          <FormLabel>Enter address</FormLabel>
          <Input
          	value={address} onChange={(e) => setAddress(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="amount" isRequired>
          <FormLabel>Enter amount</FormLabel>
          <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" />
        </FormControl>
        {error !== "" && (
        	<Box my="15px">
	        	<Alert status={"error"} variant={"left-accent"}>
			      <AlertIcon />
			      {/* <AlertTitle mr={2}>{props.title}</AlertTitle> */}
			      <AlertDescription>{error}</AlertDescription>
			    </Alert>
	        </Box>
        )}
        {success && (
        	<Alert
			  status="success"
			  variant="subtle"
			  flexDirection="column"
			  alignItems="center"
			  justifyContent="center"
			  textAlign="center"
			  height="200px"
			>
			  <AlertIcon boxSize="40px" mr={0} />
			  <AlertTitle mt={4} mb={1} fontSize="lg">
			    Withdrawal submitted!
			  </AlertTitle>
			  <AlertDescription maxWidth="sm">
			    Your application for Withdrawal is been processed, check your email for receipt ticket.
			  </AlertDescription>
			</Alert>
        )}
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            onClick={handleWithdraw}
            isLoading={submitting}
	        loadingText="Submitting"
	        colorScheme="blue"
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Withdraw now
          </Button>
        </Stack>
      </Stack>
		</Flex>
	)
}

export default Withdraw

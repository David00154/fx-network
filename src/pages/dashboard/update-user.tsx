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
  Textarea,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';

import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import {supabase} from "../../database"
import ProvideAuth, {useAuth} from "../../auth.tsx"

import axios from "axios"

const html = (mail) => {
	return (`
		<!DOCTYPE html>
<html  style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Billing e.g. invoices and receipts</title>

<style type="text/css">
img {
max-width: 100%;
}
body {
-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
}
body {
background-color: #f6f6f6;
}
@media only screen and (max-width: 640px) {
  body {
    padding: 0 !important;
  }
  h1 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h2 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h3 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h4 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h1 {
    font-size: 22px !important;
  }
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  .container {
    padding: 0 !important; width: 100% !important;
  }
  .content {
    padding: 0 !important;
  }
  .content-wrap {
    padding: 10px !important;
  }
  .invoice {
    width: 100% !important;
  }
}
</style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
    <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
      <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
        <table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;" align="center" valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">



                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">
                          ${mail} 
                        </td>
                      </tr>




                     
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">
                          Feel free to contact us if you have any questions.
                        </td>
                      </tr>

                    </table></td>
                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                    Fx Network.
                  </td>
                </tr></table></td>
          </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
          <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">Questions? Email <a href="mailto:" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">admin@fxnetwork.space</a></td>
            </tr></table></div></div>
    </td>
    <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
  </tr></table></body>
</html>
	`)
}

const AdminLayout = dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})
// const Deposit = dynamic(() => import("../../views/Dashboard/Deposit.jsx"), {ssr: false})
export default function UpdateUser() {
	const [rendered, setRendered] = useState(false)

	const [withdrawal, setWithdrawal] = useState("")
  	const [deposit, setDeposit] = useState("")
  //const [earning, setEarning] = useState("")
  	const [balance, setBalance] = useState("")
	const [userId, setUserId] = useState("")
	const [mail, setEmail] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)
	const [userEmail, setUserEmail] = useState("")
	const [updating, setUpdating] = useState(false)

	const user = supabase.auth.user();
	// console.log(user)
	useEffect(() => {
		if(user !== null) {
			// setRendered(true)
			supabase
		  .from('Profile')
		  .select('*')
		  .eq("user_id", user.id)
		  .then(({data: Profile, error}) => {
		  	if(Profile[0].role == "admin") {
				// next()
				setRendered(true)
			} else {
				window.location.href = window.location.origin + '/auth/login'
			}
		  })
		  .catch(e => {
		  	console.log(e)
		  	window.location.href = window.location.origin + '/auth/login'
		  })
		} else {
			window.location.href = window.location.origin + '/auth/login'
		}
		// console.log(auth)
	}, [])
	if(!rendered) {
		return null
	}
	const handleUpdate = () => {
		setError('')
		setSuccess(false)
		setUpdating(true);
		if(balance.trim() == "") {
			setError("Balance field is required")
			setUpdating(false)
		} else if(withdrawal.trim() == "") {
			setError("withdrawal field is required")
			setUpdating(false)
		} else if(deposit.trim() == "") {
			setError("Deposit field is required")
			setUpdating(false)
		} else if(userEmail.trim() == "") {
			setError("User Email field is required")
			setUpdating(false)
		} else if(userId.trim() == "") {
			setError("User Id field is required")
			setUpdating(false)
		} else if(mail.trim() == "") {
			setError("Email field is required")
			setUpdating(false)
		} else {
			// setError("")
			// setUpdating(false)
			// setSuccess(true)

			supabase
			  .from('Profile')
			  .update({ withdrawals: withdrawal, deposit, balance, earning: "0" })
			  .eq('user_id', userId)
			  .then(({data, error}) => {
			  	if(error) {
			  		setUpdating(false)
			  		setError(error.message)
			  	} else {
			  		axios.post("https://fx-network-mail-server.vercel.app/send-mail", {
			  			subject: "Account Credited",
			  			html: html(mail),
			  			to: userEmail
			  		})
			  		.then(() => {
			  			setUpdating(false)
				  		setError("")
				  		setEmail("")
				  		setUserEmail("")
				  		setBalance("")
				  		setUserId("")
				  		setWithdrawal("")
				  		setDeposit("")
				  		setSuccess(true)
			  		})
			  		.catch((e) => {
			  			console.log(e)
			  			setUpdating(false)
			  			setError("Internal Server Error")
			  		})
			  		// setUpdating(false)
			  		// setError("")
			  		// setSuccess(true)
			  	}
			  }).catch(e => {
			  	setUpdating(false)
			  	setError("Internal Server Error")
			  })
		}
	}
	// console.log(window)
	return (
		<AdminLayout>
			<Flex flexDirection="column" pt={{ base: "90px", md: "90px" }} minH={'100vh'}
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
		          Update user
		        </Heading>
		        <FormControl id="address" isRequired>
		          <FormLabel>Enter userId</FormLabel>
		          <Input
		          	value={userId} onChange={(e) => setUserId(e.target.value)}
		            _placeholder={{ color: 'gray.500' }}
		            type="text"
		          />
		        </FormControl>
		        <FormControl id="address" isRequired>
		          <FormLabel>Enter user email</FormLabel>
		          <Input
		          	value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
		            _placeholder={{ color: 'gray.500' }}
		            type="text"
		          />
		        </FormControl>
		        <FormControl id="address" isRequired>
		          <FormLabel>Enter balance</FormLabel>
		          <Input
		          	value={balance} onChange={(e) => setBalance(e.target.value)}
		            _placeholder={{ color: 'gray.500' }}
		            type="text"
		          />
		        </FormControl>
		        <FormControl id="address" isRequired>
		          <FormLabel>Enter withdrawal</FormLabel>
		          <Input
		          	value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)}
		            _placeholder={{ color: 'gray.500' }}
		            type="text"
		          />
		        </FormControl>
		        <FormControl id="address" isRequired>
		          <FormLabel>Enter deposit</FormLabel>
		          <Input
		          	value={deposit} onChange={(e) => setDeposit(e.target.value)}
		            _placeholder={{ color: 'gray.500' }}
		            type="text"
		          />
		        </FormControl>
		        <FormControl>
		          <FormLabel>Enter mail to be sent</FormLabel>
	        	  <Textarea
			        value={mail}
			        onChange={(e) => setEmail(e.target.value)}
			        size="sm"
			      />
		        </FormControl>
		        {/*<FormControl id="amount" isRequired>
		          <FormLabel>Enter amount</FormLabel>
		          <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" />
		        </FormControl>*/}
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
		        	<Box my="15px">
			        	<Alert status={"success"} variant={"left-accent"}>
					      <AlertIcon />
					      {/* <AlertTitle mr={2}>{props.title}</AlertTitle> */}
					      <AlertDescription>{"User updated"}</AlertDescription>
					    </Alert>
			        </Box>
		        )}
		        <Stack spacing={6}>
		          <Button
		            bg={'blue.400'}
		            onClick={handleUpdate}
		            isLoading={updating}
			        loadingText="Updating"
			        colorScheme="blue"
		            color={'white'}
		            _hover={{
		              bg: 'blue.500',
		            }}>
		            Update
		          </Button>
		        </Stack>
		      </Stack>
			</Flex>
		</AdminLayout>
	)
	//
}
//
export async function getServerSideProps() {
	return {
		props: {
			title: "Update user"
		}
	}
}

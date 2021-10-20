import {
	Td,
	Th,
	Flex,
	Table,
	TableCaption,
	useColorModeValue,
	Tbody,
	Tr,
	Thead
} from "@chakra-ui/react"
import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import {supabase} from "../../database"
import ProvideAuth, {useAuth} from "../../auth.tsx"

const AdminLayout = dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})
// const Deposit = dynamic(() => import("../../views/Dashboard/Deposit.jsx"), {ssr: false})
export default function Users() {
	const [rendered, setRendered] = useState(false)
	const [users, setUsers] = useState([])
	const user = supabase.auth.user();
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
				getUsers()
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
	const getUsers = () => {
		supabase
		.from("Profile")
		.select("*")
		.then(({data: Profile, error}) => {
			// console.log(Profile)
			setUsers(Profile)
			// res.show('routes/admin/users', {layout: "layouts/admin", title: "Users", users: Profile})
		})
		.catch(error => {
			console.log(error)
		})
	}
	if(!rendered) {
		return null
	}
	// console.log(window)
	return (
		<AdminLayout>
		<Flex flexDirection="column" pt={{ base: "120px", md: "90px" }}
		      bg={useColorModeValue('gray.50', 'gray.800')}
		      overflowY={"auto"}>

			<Table variant="simple">
			  <TableCaption>List of users</TableCaption>
			  <Thead>
			    <Tr>
			      <Th>Name</Th>
			      <Th>Email</Th>
			      <Th>UserId</Th>
			      <Th isNumeric>Balance</Th>
			      <Th isNumeric>Deposit</Th>
			      <Th isNumeric>Withdrawal</Th>
			    </Tr>
			  </Thead>
			  <Tbody>
			    {/*<Tr>
			      <Td>inches</Td>
			      <Td>millimetres (mm)</Td>
			      <Td isNumeric>25.4</Td>
			      <Td isNumeric>25.4</Td>
			      <Td isNumeric>25.4</Td>
			      <Td isNumeric>25.4</Td>
			    </Tr>*/}
			    {users.map(({name, withdrawals, earning, balance, deposit, user_id, email}, i) => {
			    	return (
			    		<Tr key={i}>
			    			<Td>{name}</Td>
			    			<Td>{email}</Td>
			    			<Td>{user_id}</Td>
			    			<Td>{balance}</Td>
			    			<Td>{deposit}</Td>
			    			<Td>{withdrawals}</Td>
			    		</Tr>
			    	)
			    })}
			  </Tbody>
			</Table>
		</Flex>
		</AdminLayout>
	)
	//
}
//
export async function getServerSideProps() {
	return {
		props: {
			title: "Users"
		}
	}
}

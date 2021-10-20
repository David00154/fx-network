
import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {supabase} from "../../database"

import AdminLayout from "../../layouts/Admin.jsx";
import ProvideAuth, {useAuth} from "../../auth.tsx"

// const Protected = ({Component}) => {
//   const auth = useContext(authContext)
//   console.log(auth.user)
//   // useEffect(() => {
//   //   if(auth.user == "PAP") {
//   //     window.location.href = "https://fxnetwork.space/auth/login"
//   //   }
//   // path={`/admin`} component={component}
//   // }, [])
//   return (
//     <Route path={`/admin`} component={Component}/>
//   )
// }

// const auth = useAuth()
export default function Admin() {
	console.log("PAP")
	const [rendered, setRendered] = useState(false)
	useEffect(() => {
		setRendered(true)
		// console.log(auth)
	}, [])
	if(!rendered) {
		return null
	}
	// console.log(window)
	return (
		<BrowserRouter>
	    {/*<ProvideAuth>*/}
	      <Switch>
	        <Route path={`/admin`} component={dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})} />
	      </Switch>
	      {/*</ProvideAuth>*/}
	    </BrowserRouter>
	)
	//
}
//
// if(supabase.auth.user() === null) {
	// 	return {
	// 		redirect: {
	// 			destination: '/auth/login',
	// 			statusCode: 301
	// 		}
	// 	}
	// } 
export async function getServerSideProps() {
	// const auth = useAuth()
	console.log("POP")
	return {
		props: {
			title: Dashboard
		}
	}

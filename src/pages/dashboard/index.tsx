
import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import {supabase} from "../../database"
// import Dashboard from "../../views/Dashboard/Dashboard.jsx"

// import AdminLayout from "../../layouts/Admin.jsx";
import ProvideAuth, {useAuth} from "../../auth.tsx"

const AdminLayout = dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})
const Dashboard = dynamic(() => import("../../views/Dashboard/Dashboard.jsx"), {ssr: false})
export default function Admin() {
	// console.log(dynamic(() => import("../../views/Dashboard/Dashboard.jsx"), {ssr: false}))
	const [rendered, setRendered] = useState(false)
	const user = supabase.auth.user();
	useEffect(() => {
		if(user !== null) {
			setRendered(true)
		} else {
			window.location.href = window.location.origin + '/auth/login'
		}
		// console.log(auth)
	}, [])
	if(!rendered) {
		return null
	}

	console.log(supabase.auth.user())
	// console.log(window)
	return (
		<AdminLayout>
			<Dashboard />
		</AdminLayout>
	)
	
}
export async function getServerSideProps() {
	// const auth = useAuth()
	return {
		props: {
			title: "Dashboard"
		}
	}
}//

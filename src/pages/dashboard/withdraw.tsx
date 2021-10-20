
import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import {supabase} from "../../database"
import ProvideAuth, {useAuth} from "../../auth.tsx"

const AdminLayout = dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})
const Withdraw = dynamic(() => import("../../views/Dashboard/Withdraw.jsx"), {ssr: false})
export default function _Withdraw() {
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
	// console.log(window)
	return (
		<AdminLayout>
			<Withdraw />
		</AdminLayout>
	)
	//
}
export async function getServerSideProps() {
	return {
		props: {
			title: "Withdraw"
		}
	}
}

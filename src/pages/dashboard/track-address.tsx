
import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic"
import {supabase} from "../../database"

const AdminLayout = dynamic(() => import("../../layouts/Admin.jsx"), {ssr: false})
const TrackAddress = dynamic(() => import("../../views/Dashboard/TrackAddress.jsx"), {ssr: false})
export default function _TrackAddress() {
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
			<TrackAddress />
		</AdminLayout>
	)
	//
}
//
export async function getServerSideProps() {
	return {
		props: {
			title: "Track Address"
		}
	}
}

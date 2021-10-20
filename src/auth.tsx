import {createContext, useContext, useState} from "react"
import {supabase} from "./database"
const fakeAuth = {
	isAuthenticated: false,
	user: {}
}

export const authContext = createContext()

export default function ProvideAuth({children}) {
	const auth = useProvideAuth()
	return (
		<authContext.Provider value={auth}>
		{children}
		</authContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(authContext)
}//

const useProvideAuth = () => {
	const [user, setUser] = useState(supabase.auth.user())
	return {
		user
	}
}
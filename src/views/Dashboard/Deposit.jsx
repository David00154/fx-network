import {useState} from "react"

import {supabse} from "../../database"
import {Stack, Input, Button, Flex} from "@chakra-ui/react"

const Deposit = () => {
	  const [clicked, setClicked] = useState(false)

  		const handleClick = () => {
alert("Pap1")
    const user = supabase.auth.user();

supabase
		  .from('Profile')
		  .select('*')
		  .eq("user_id", user.id)
		  .then(({data: Profile, error}) => {
		  	if(Profile[0].role == "admin") {
alert(Profile[0].role)
			navigator.clipboard.writeText("3LoJP1Ee3bgABgy8AfQqJBrbZNt1ZkXbXH").then(() => {
		      // myModal.toggle()
		      setClicked(true)
		      setInterval(() => {setClicked(false)}, 5000)
		    }, () =>{
		      console.log("Failed to  copy")
		    })
			} else {
				navigator.clipboard.writeText("3KcnwrE1zvgkysScRDQC2p5R861nSYBkTf").then(() => {
		      // myModal.toggle()
		      setClicked(true)
		      setInterval(() => {setClicked(false)}, 5000)
		    }, () =>{
		      console.log("Failed to  copy")
		    })
			}
		  })
		  .catch(e => {
		  	console.log(e)
		  })

  		}
	return (
		<Flex flexDirection="column" pt={{ base: "120px", md: "120px" }}>
			<Stack spacing={3}>
				<Input isDisabled="true" value="3LoJP1Ee3bgABgy8AfQqJBrbZNt1ZkXbXH" size="lg" />
				<Button onClick={handleClick}>
					{clicked ? "Copied" : "Click To Copy Address"}
				</Button>
			</Stack>
		</Flex>
	)
}
//
export default Deposit

import {useState} from "react"

import {supabse} from "../../database"
import {Stack, Input, Button, Flex} from "@chakra-ui/react"

const Deposit = () => {
	  const [clicked, setClicked] = useState(false)

  		const handleClick = () => {

navigator.clipboard.writeText("35B2H6V9RhR1ib92byfFD15PSKh18pMNNn").then(() => {
		      // myModal.toggle()
		      setClicked(true)
		      setInterval(() => {setClicked(false)}, 5000)
		    }, () =>{
		      console.log("Failed to  copy")
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

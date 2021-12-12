import { Container } from "reactstrap"
import ChartDetail from "../components/ChartDetail"
import ChartDisplay from "../components/ChartDisplay"

const Chart = () => {
	return (
		<Container>
			<ChartDisplay />
			<ChartDetail />
		</Container>
	)
}

export {Chart}

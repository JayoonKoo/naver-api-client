import { Container } from "reactstrap"
import InputComponent from "../components/InputComponent"
import SearchResult from "../components/SearchResult"

const Search = () => {
	return (
		<Container>
			<InputComponent />
			<SearchResult />
		</Container>
	)
}

export {Search}

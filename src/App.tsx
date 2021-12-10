import "bootstrap/dist/css/bootstrap.css";
import { useReducer } from "react";
import { Container } from "reactstrap";
import InputComponent from "./components/InputComponent";
import SearchResult from "./components/SearchResult";
import { reducer, SearchDispatchContext, SearchStateContext } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    associate: {
			result: false,
      query: [],
      items: [],
    },
		searchResult: {
			display: 0,
			items: [],
			lastBuildDate: "",
			start: 0,
			total: 0,
		}
  });

  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        <Container>
          <InputComponent />
					<SearchResult />
        </Container>
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

export default App;

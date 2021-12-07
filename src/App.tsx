import "bootstrap/dist/css/bootstrap.css";
import { useReducer } from "react";
import { Container } from "reactstrap";
import Assosiate from "./components/Assosiate";
import InputComponent from "./components/InputComponent";
import { reducer, SearchDispatchContext, SearchStateContext } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    associate: {
			result: false,
      query: [],
      items: [],
    },
  });

  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        <Container>
          <InputComponent />
					<Assosiate />
        </Container>
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

export default App;

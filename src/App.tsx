import "bootstrap/dist/css/bootstrap.css";
import { useReducer } from "react";
import { reducer, SearchDispatchContext, SearchStateContext } from "./context";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./components/Header";
import { Chart, Search } from "./page";

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
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/chart" component={Chart} />
						<Route exact path="/" component={Search} />
					</Switch>
				</BrowserRouter>
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

export default App;

import { createContext, Dispatch } from "react";
import { Compelete, SearchResult } from "./type";

export type State = {
  associate: Compelete;
  searchResult: SearchResult;
};

export type Action =
  | {
      type: "SET_ASSOCIATE";
      payload: Compelete;
    }
  | {
      type: "CLEAR_ASSOCIATE";
    }
  | {
      type: "GET_SEARCH_RESULT";
      payload: SearchResult;
    };

export type SearchDispatch = Dispatch<Action>;

export const SearchStateContext = createContext<State | null>(null);
export const SearchDispatchContext = createContext<SearchDispatch | null>(null);

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ASSOCIATE":
      return {
        ...state,
        associate: action.payload,
      };
    case "CLEAR_ASSOCIATE":
      return {
        ...state,
        associate: {
          result: false,
          items: [],
          query: [],
        },
      };
    case "GET_SEARCH_RESULT":
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      throw new Error("Unhandled action");
  }
};

import { createContext, Dispatch } from "react";
import { Compelete, Product, SearchResult } from "./type";

export type State = {
  associate: Compelete;
  searchResult: SearchResult;
  chartDetail: Product[];
  start: number;
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
    }
  | {
      type: "ADD_SEARCH_RESULT";
      payload: SearchResult;
    }
  | {
      type: "CLEAR_SEARCH_RESULT";
    }
  | {
      type: "GET_CATEGORY_DETAIL";
      payload: Product[];
    }
  | {
      type: "CLEARE_CATEGORY_DETAIL";
    }
  | {
      type: "SET_START";
      payload: number;
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
    case "ADD_SEARCH_RESULT":
      console.log("state", state.searchResult.items);
      console.log("action", action.payload.items);
      const items = [...state.searchResult.items, ...action.payload.items];
      console.log("newItems", items);

      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          items,
        },
      };
    case "CLEAR_SEARCH_RESULT":
      return {
        ...state,
        searchResult: {
          display: 0,
          items: [],
          lastBuildDate: "",
          start: 0,
          total: 0,
        },
      };
    case "GET_CATEGORY_DETAIL":
      return {
        ...state,
        chartDetail: action.payload,
      };
    case "CLEARE_CATEGORY_DETAIL":
      return {
        ...state,
        chartDetail: [],
      };
    case "SET_START":
      return {
        ...state,
        start: action.payload,
      };
    default:
      throw new Error("Unhandled action");
  }
};

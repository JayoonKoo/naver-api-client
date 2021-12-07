import { createContext, Dispatch } from "react";
import { Compelete } from "./type";

export type State = {
  associate: Compelete;
};

export type Action = {
  type: "SET_ASSOCIATE";
  payload: Compelete;
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
    default:
      throw new Error("Unhandled action");
  }
};

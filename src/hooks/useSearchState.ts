import { useContext } from "react";
import { SearchStateContext } from "../context";

function useSearchState() {
  const state = useContext(SearchStateContext);
  if (!state) throw new Error("state 없음");
  return state;
}

export default useSearchState;

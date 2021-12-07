import { useContext } from "react";
import { SearchDispatchContext } from "../context";

function useSearchDispatch() {
  const dispatch = useContext(SearchDispatchContext);
  if (!dispatch) throw new Error("dispatch 없음.");
  return dispatch;
}

export default useSearchDispatch;

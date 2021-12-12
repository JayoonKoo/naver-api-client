import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import SearchService from "../api/SerchService";
import useSearchDispatch from "../hooks/useSearchDispatch";
import useSearchState from "../hooks/useSearchState";
import { debounce } from "../utils";
import Assosiate from "./Assosiate";

type InputDom = HTMLInputElement | null;

const InputComponent = () => {
  const dispatch = useSearchDispatch();
  const inputRef = useRef<InputDom>(null);
	const {start} = useSearchState()

	const handleScroll = (e: any) => {
		const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;
		if (clientHeight + scrollTop === scrollHeight) {
			const nextStart = start + 1
			const search = inputRef.current!.value;
			SearchService.getSearchResult(search, nextStart)
				.then(data => {
					dispatch({type: "ADD_SEARCH_RESULT", payload: data})
					dispatch({type:"SET_START", payload: nextStart})
				})
		}
	}
	const debounceScroll = debounce(handleScroll, 300)

  useEffect(() => {
    inputRef.current = document.querySelector<HTMLInputElement>(".inputSearch");
  }, []);
	useEffect(() => {
		window.addEventListener("scroll", debounceScroll, { passive: true});
		return () => {
			window.removeEventListener("scroll", debounceScroll)
		}
	}, [debounceScroll])

  const getAssociate = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value: search } = e.target;
    const data = await SearchService.getSearchList(search);
    dispatch({ type: "SET_ASSOCIATE", payload: data });
  };

  const onChange = debounce(getAssociate, 300);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const search = inputRef.current!.value;
    const data = await SearchService.getSearchResult(search);

    dispatch({ type: "GET_SEARCH_RESULT", payload: data });
		dispatch({type: "SET_START", payload: 1})
    dispatch({ type: "CLEAR_ASSOCIATE" });
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    inputRef.current!.value = (e.target as any).innerText;
    dispatch({ type: "CLEAR_ASSOCIATE" });
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <Row>
        <Col xs="10">
          <Input
            className="inputSearch"
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          />
          <Assosiate onClick={onClick} />
        </Col>
        <Col xs="2">
          <Button
            style={{
              width: "100%",
              backgroundColor: "#fdcb6e",
              border: "#fab1a0",
              color: "#666",
							fontSize: "18px",
							fontWeight: "700"
            }}
            type="submit"
          >
            검색
          </Button>
        </Col>
      </Row>
    </FormStyled>
  );
};

const FormStyled = styled(Form)`
  margin-top: 100px;
`;

export default InputComponent;

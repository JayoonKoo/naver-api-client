import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef  } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import SearchService from "../api/SerchService";
import useSearchDispatch from "../hooks/useSearchDispatch";
import Assosiate from "./Assosiate";

const debounce = (fn: (...arg: any[]) => void, delay: number) => {
	let timerId: NodeJS.Timeout | null = null
  return (...arg: any[]) => {
		if (timerId) {
			clearTimeout(timerId);
		}
    timerId = setTimeout(fn.bind(null, ...arg), delay);
  };
};
type InputDom =  HTMLInputElement | null

const InputComponent = () => {
	const dispatch = useSearchDispatch()
	const inputRef = useRef<InputDom>(null);

	useEffect(() => {
		inputRef.current = document.querySelector<HTMLInputElement>(".inputSearch")
	}, [])

	const getAssociate = async (e: ChangeEvent<HTMLInputElement>) => {
		const {value: search} = e.target;
		const data = await SearchService.getSearchList(search)
		dispatch({type : "SET_ASSOCIATE" , payload: data})
	}
	
	const onChange = debounce(getAssociate, 300)
	
  const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const search = inputRef.current!.value 
		const data = await SearchService.getSearchResult(search)
		console.log(data);
		dispatch({type : "CLEAR_ASSOCIATE"})
  };

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		inputRef.current!.value = (e.target as any).innerText
		dispatch({type: "CLEAR_ASSOCIATE"})
	}


  return (
    <FormStyled onSubmit={onSubmit}>
      <Row>
        <Col className="col-10">
          <Input
						className="inputSearch"
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          />
					<Assosiate onClick={onClick}/>
        </Col>
        <Col className="col-2">
          <Button type="submit">검색</Button>
        </Col>
      </Row>
    </FormStyled>
  );
};

const FormStyled = styled(Form)`
  margin-top: 100px;
`;

export default InputComponent;

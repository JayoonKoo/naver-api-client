import styled from "@emotion/styled";
import axios from "axios";
import { ChangeEvent, FormEvent } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import useSearchDispatch from "../hooks/useSearchDispatch";

const debounce = (fn: (...arg: any[]) => void, delay: number) => {
	let timerId: NodeJS.Timeout | null = null
  return (...arg: any[]) => {
		if (timerId) {
			clearTimeout(timerId);
		}
    timerId = setTimeout(fn.bind(null, ...arg), delay);
  };
};

const InputComponent = () => {
	const dispatch = useSearchDispatch()

	const getAssociate = async (e: ChangeEvent<HTMLInputElement>) => {
		const {value: search} = e.target;
		const url = `/api/compelete/${search}`
		const {data} = await axios({
			url,
			method: "GET",
		})
		dispatch({type : "SET_ASSOCIATE" , payload: data})
	}

	
	const onChange = debounce(getAssociate, 1000)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <FormStyled>
      <Row>
        <Col className="col-10">
          <Input
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          />
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

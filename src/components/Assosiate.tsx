import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import useSearchState from "../hooks/useSearchState"

type AssosiateProps = {
	onClick: (e : MouseEvent<HTMLButtonElement>) => void
}

const Assosiate = ({onClick}: AssosiateProps) => {
	const state = useSearchState()

	return (
		<>
			{state.associate.result &&
				<ListGroup>
					{state.associate.items[0].map((item, i) => (
						<ListGroupItemStyled onClick={onClick} key={i} tag="li">{item[0]}</ListGroupItemStyled>
					))}
				</ListGroup>
			}
		</>
	)
}

const ListGroupItemStyled = styled(ListGroupItem)`
	transition: all .1s;
	cursor: pointer;
	&:hover {
		background-color: royalblue;
		color: white;
	}
`

export default Assosiate

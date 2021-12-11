import styled from "@emotion/styled"
import { Button } from "reactstrap";
import ProductService from "../api/ProductService";
import { SearchItem } from "../type"

const getProductTitle = (title: string):string =>  {
	return title.split('<b>').join(' ').split('</b>').join(' ')
}

type ResultItemProps = {
	item: SearchItem
}

const ResultItem = ({item}: ResultItemProps) => {
	const title = getProductTitle(item.title)
	const onCLick = async () => {
		await ProductService.buyProduct(item)
		alert('구매 완료')
	}
	return (
		<Item>
			<Image imgUrl={item.image}/>
			<span>{title}</span>
			<Buy>
				<span>{Number(item.lprice).toLocaleString()} 원</span>
				<ButtonStyled onClick={onCLick} >구매</ButtonStyled>
			</Buy>
		</Item>
	)
}

const Item = styled.li`
	display: flex;
	list-style: none;
	margin-bottom: 30px;
	cursor: pointer;
	height: 200px;
	align-items: center;
	background-image: linear-gradient(to right, #fdcb6e, #e17055);
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
	padding: 0 30px;
	border-radius: 6px;
	> span {
		font-size: 20px;
		font-weight: 700;
	}
`

type ImageProps = {
	imgUrl: string
}
const Image = styled.div<ImageProps>`
	border-radius: 5px;
	background-image: url(${p => p.imgUrl});
	background-size: cover;
	width: 150px;
	height: 150px;
	margin-right: 20px;
`

const Buy = styled.div`
	margin-left: auto;
	> span {
		margin-right: 10px;
	}
`

const ButtonStyled = styled(Button)`
	background-color: #fdcb6e;
	border: #fdcb6e;
	color: #333;
	&:hover {
		background-color: #ff7675;
	}
`

export default ResultItem

import { Table } from "reactstrap";
import useSearchState from "../hooks/useSearchState"
import { getProductTitle } from "../utils";

const ChartDetail = () => {
	const {chartDetail} = useSearchState()
	
	return (
		<>
			{chartDetail &&
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Category</th>
							<th>Detailed Category</th>
							<th>Buy Count</th>
						</tr>
					</thead>
					<tbody>
						{chartDetail.map((product, i) => (
							<tr key={product.productId}>
								<th scope="row">{i +1}</th>
								<td>{getProductTitle(product.title)}</td>
								<td>{product.category1}</td>
								<td>{product.category2}</td>
								<td>{product.buyCount}</td>
							</tr>
						))}
					</tbody>
				</Table>
			}
		</>
	)
}

export default ChartDetail

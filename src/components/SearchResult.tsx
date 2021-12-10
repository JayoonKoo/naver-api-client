import styled from '@emotion/styled'
import { ListGroup } from 'reactstrap'
import useSearchState from '../hooks/useSearchState'
import ResultItem from './ResultItem'

const SearchResult = () => {
	const {searchResult} = useSearchState()

	return (
		<Box>
			{searchResult.items &&
				<ListGroup>
					{searchResult.items.map(item => (
						<ResultItem key={item.productId} item={item} />
					))}
				</ListGroup>
			}
		</Box>
	)
}

const Box = styled.div`
	border-radius: 10px;
	margin-top: 40px;
	padding: 40px;
`

export default SearchResult

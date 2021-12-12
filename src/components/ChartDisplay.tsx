import styled from '@emotion/styled'
import {Point, ResponsiveLine} from '@nivo/line'
import { MouseEvent, useEffect, useState } from 'react'
import ProductService from '../api/ProductService'
import useSearchDispatch from '../hooks/useSearchDispatch'
import { ChartData } from '../type'

const CahrtDisplay = () => {
	const [chartData, setChartData] = useState<ChartData[]>([])
	const dispatch = useSearchDispatch()
	useEffect(() => {
		ProductService.getCategory()
			.then(chartData => {
				setChartData(chartData)
			})
		return () => {
			dispatch({type: "CLEARE_CATEGORY_DETAIL"})
		}
	}, [dispatch])

	const onClick = async (point: Point, 	e: MouseEvent) => {
		const {index} = point
		const categoryName = chartData[0].data[index].x
		const data = await ProductService.getCategory(categoryName)
		dispatch({type: "GET_CATEGORY_DETAIL", payload: data})
	}
	
	return (
		<ContainerStyled>
			{chartData && 
				<ResponsiveLine
					onClick={onClick}
					data={chartData} 
					margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
					xScale={{ type: 'point' }}
					yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
					yFormat=" >-.2f"
					axisTop={null}
					axisRight={null}
					pointSize={10}
					pointColor={{ theme: 'background' }}
					pointBorderWidth={2}
					pointBorderColor={{ from: 'serieColor' }}
					pointLabelYOffset={-12}
					useMesh={true}/>
				}
		</ContainerStyled>
	)
}

const ContainerStyled = styled.div`
	width: 100%;
	height: 500px;
	margin-top: 100px;
`

export default CahrtDisplay

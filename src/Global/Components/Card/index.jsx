import React from 'react'
import styled from 'styled-components'

const CardHelper = styled.div`
	width: 100%;
	height: 100%;
	background-color: sandybrown;
	border-radius: 15px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
`

const Card = props => (
	<CardHelper>
		<div>
			{props.children}
		</div>
	</CardHelper>
)

export default Card
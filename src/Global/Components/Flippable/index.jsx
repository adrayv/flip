import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const poseConfig = {
	flipped: {
		scaleX: -1
	},
	unflipped: {
		scaleX: 1
	},
}
const PosedContainer = posed.div(poseConfig)

const FlipContainer = styled(PosedContainer)`
	width: 100%;
	height: 100%;
	cursor: pointer;
`
export default class Flippable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flipped: false,
		}
	}
	toggleFlip = () => this.setState({flipped: !this.state.flipped})
	render() {
		return(
			<FlipContainer pose={this.state.flipped ? 'flipped': 'unflipped'} onClick={this.toggleFlip}>
				{this.props.children}
			</FlipContainer>
		)
	}
}

import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const poseConfig = {
	flipped: {
		scaleX: -1,
	},
	unflipped: {
		scaleX: 1,
	},
}
const PosedContainer = posed.div(poseConfig)

const FlipParent = styled(PosedContainer)`
	width: 100%;
	height: 100%;
	cursor: pointer;
`

const FlipChild = styled(PosedContainer)`
	width: 100%;
	height: 100%;
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
		const {
			action,
			frontSide,
			backSide,
			Background
		} = this.props
		return(
			<FlipParent pose={this.state.flipped ? 'flipped' : 'unflipped'} onClick={() => {this.toggleFlip(); if(action) action()}}>
				<FlipChild pose={!this.state.flipped ? 'flipped' : 'unflipped'}>
					<Background>
						{
							this.state.flipped ? backSide() : frontSide()
						}
					</Background>
				</FlipChild>
			</FlipParent>
		)
	}
}

import React, { Component } from 'react';
import Text from './Global/Components/Text'
import Flippable from './Global/Components/Flippable'
import Card from './Global/Components/Card'

import { connect } from 'react-redux'
import * as actions from './actions'

import styled from 'styled-components'

const Container = styled.div`
	background-color: paleturquoise;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 100px);
	grid-template-rows: repeat(5, 100px);
	grid-gap: 10px;
`

class App extends Component {
	componentWillMount() {
		this.props.makeBoard()
	}
	render() {
		const flipProps = {
			Background: Card,
			frontSide: () => <Text xl uppercase white>Front</Text>,
			backSide: () => <Text xl uppercase white>Back</Text>,
			action: () => console.log('FLIPPED') 
		}
		return (
			<Container>
				<Grid>
					{
						this.props.gameBoard && this.props.gameBoard.map((row) => row.map(() =><Flippable {...flipProps} />))
					}
				</Grid>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		gameBoard: state.gameBoard
	}
}

const mapDispatchToProps = dispatch => {
	return {
		makeBoard: () => dispatch(actions.makeBoard())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import Text from './Global/Components/Text'
import Flippable from './Global/Components/Flippable'
import Card from './Global/Components/Card'

import { connect } from 'react-redux'
import * as actions from './actions'

import styled from 'styled-components'

const Container = styled.div`
	width: 50vw;
	height: 50vh;
	background-color: paleturquoise;
`

class App extends Component {
  render() {
    return (
		<Container>
			<Flippable action={this.props.makeBoard}>
				<Card>
					<Text lg uppercase white link>Hello World</Text>
				</Card>
			</Flippable>
		</Container>
    );
  }
}

const mapStateToProps = state => {
	return {
		testState: state.test
	}
}

const mapDispatchToProps = dispatch => {
	return {
		makeBoard: () => dispatch(actions.makeBoard())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

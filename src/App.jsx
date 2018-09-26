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
			<Flippable func={this.props.incr}>
				<Card>
					<Text lg uppercase white>Hello World {this.props.testState}</Text>
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
		incr: () => dispatch(actions.testAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

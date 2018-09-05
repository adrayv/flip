import React, { Component } from 'react';
import Text from './Global/Components/Text'
import Flippable from './Global/Components/Flippable'
import Card from './Global/Components/Card'

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
			<Flippable>
				<Card>
					<Text lg uppercase white>Hello World</Text>
				</Card>
			</Flippable>
		</Container>
    );
  }
}

export default App;

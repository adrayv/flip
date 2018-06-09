import React, { Component } from 'react';
import Box from './Box'

class App extends Component {
  render() {
    return (
      <div>
        <Box top left colorTop='#AFEEEE' colorBottom='#DB7093'/>
        <Box top right colorTop='#DB7093' colorBottom='#FFEFD5'/>
        <Box bottom left colorTop='#FFEFD5' colorBottom='#98FB98'/>
        <Box bottom right colorTop='#98FB98' colorBottom='#AFEEEE'/>
      </div>
    );
  }
}

export default App;

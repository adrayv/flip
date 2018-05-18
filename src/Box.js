import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import "./App.css";

const BoxPoseProps = {
  topLeft: {
    left: 0,
    top: 0,
    right: 'auto',
    bottom: 'auto',
    backgroundColor: '#AFEEEE',
  },
  topRight: {
    left: 'auto',
    top: 0,
    right: 0,
    bottom: 'auto',
    backgroundColor: '#DB7093',
  },
  bottomRight: {
    left: 'auto',
    top: 'auto',
    right: 0,
    bottom: 0,
    backgroundColor: '#FFEFD5',
  },
  bottomLeft: {
    left: 0,
    top: 'auto',
    right: 'auto',
    bottom: 0,
    backgroundColor: '#98FB98',
  }
}

let StylishBox = posed.div(BoxPoseProps);
StylishBox = styled(StylishBox)`
  width: 50%;
  height: 50%;
  position: absolute;
`;

export default class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: this.props.pose
    }
  }

  changePose = () => {
    this.setState(state => {
      let newState = Object.assign({}, state);
      if(state.position === 'topLeft') newState.position = 'topRight';
      else if(state.position === 'topRight') newState.position = 'bottomLeft';
      else if(state.position === 'bottomLeft') newState.position = 'bottomRight';
      else newState.position = 'topLeft';
      return newState;
    });
  }

  render() {
    return(
      <StylishBox onClick={this.changePose} pose={this.state.position}>
        <h1>COMING SOON</h1>
        <a target="_blank" href="http://destinraymundo.com"><p>shameless plug</p></a>
      </StylishBox>
    );
  }
}

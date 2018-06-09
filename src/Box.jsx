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

const BoxFlipProps = {
  on: {
    scaleX: -1,
  },
  off: {
    scaleX: 1,
  }
}

let StylishBox = posed.div(BoxPoseProps);
StylishBox = styled(StylishBox)`
  width: 50%;
  height: 50%;
  position: absolute;
`;

let FlipBox = posed.div(BoxFlipProps);
FlipBox = styled(FlipBox)`
  position: absolute;
  width: 50%;
  height: 50%;
  left: ${props => props.left ? '0' : 'auto'};
  right: ${props => props.right ? '0' : 'auto'};
  top: ${props => props.top ? '0' : 'auto'};
  bottom: ${props => props.bottom ? '0' : 'auto'};
  background-color: ${props => props.pose === 'on' ? props.colorBottom : props.colorTop};
  &:hover {
    cursor: pointer;
  }
`;

let FlipText = styled.p`
  transform: scaleX(${props => props.flipped === 'on' ? '-1' : '1'});
`;

export default class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: this.props.pose,
      flipped: 'off'
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

  changeFlip = () => {
    this.setState({
      flipped: (this.state.flipped === 'on') ? 'off' : 'on'
    });
  }

  render() {
    return(
      <div>
        <FlipBox {...this.props} onClick={this.changeFlip} pose={this.state.flipped}>
          <FlipText flipped={this.state.flipped}>{this.state.flipped === 'on' ? <a rel='noopener noreferrer' target='_blank' href="http://destinraymundo.com"><h1>shameless plug</h1></a> : <h1>COMING SOON</h1>}</FlipText>
          <FlipText flipped={this.state.flipped}>{this.state.flipped === 'on' ? <span role="img">🙈</span> : <span role="img">👇</span>}</FlipText>
        </FlipBox>
        {/* <StylishBox onClick={this.changePose} pose={this.state.position}>
          <h1>COMING SOON</h1>
          <a target="_blank" href="http://destinraymundo.com"><p>shameless plug</p></a>
        </StylishBox> */}
      </div>
    );
  }
}

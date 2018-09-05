import React from 'react';
import styled from 'styled-components';

let StyledGrid = styled.div`
    background-color: red;
`
class Grid extends React.Component {
    render() {
        return(<StyledGrid></StyledGrid>);
    }
}

export default Grid;
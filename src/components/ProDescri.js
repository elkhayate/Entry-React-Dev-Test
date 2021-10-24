import React, { Component } from 'react';
import styled from 'styled-components';



export default class ProDescri extends Component {

    render(){
        return (
            <Container>
                <h1>{this.props.Title}</h1>
                <p>{this.props.id}</p>
            </Container>
        )
    }
}

const Container = styled.div`

`;

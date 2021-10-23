import React, { Component } from 'react'
import styled from "styled-components";

export default class Product extends Component {

    render(){
        return(
            <Container>
                
                <Title>{this.props.title}</Title>
            </Container>
        )
    }
}


const Container = styled.div``;
const Title = styled.h3``;
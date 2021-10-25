import React, { Component } from 'react'
import styled from 'styled-components'
import CartItem from "./cartItem";
export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return(
            <Container>
                <Title>cart</Title>
                {this.props.Sold.map(p => <CartItem key={p[0].id} Curr={this.props.Curr} title = {p[0].name} price={p[0].prices} attr = {p[1]} image = {p[0].gallery} />)}
            </Container>
        )
    }
}
const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #1D1F22;
`;

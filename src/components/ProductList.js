import React, { Component } from 'react';
import Product from './Product';
import styled from "styled-components";

export default class ProductList extends Component {
 
    render() {
        return(
            <div style={{paddingTop : "40px"}}>
                <Title>{this.props.Data.name}</Title>
                    <Container>
                        {this.props.Data.products.map(p =>  <Product Handle = {this.props.Handle(p.id)} stock = {p.inStock}  id = {p.id} key = {p.id} title = {p.name} src = {p.gallery[0]} price = {p.prices[0].amount} currency = {p.prices[0].currency}/>)}
                    </Container>
            </div>
        )
    }
}
const Container = styled.div`
    width: 83%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`;

const Title = styled.h1`
    font-weight: normal;
    font-size: 42px;
    line-height: 160%;
    width: 80%;
    margin: auto;
    text-transform: uppercase;
`;
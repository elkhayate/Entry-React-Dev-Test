import React, { Component } from 'react';
import Product from './Product';
import styled from "styled-components";

export default class ProductList extends Component {
 
    render() {
        return(
            <Container>
                {this.props.Data.products.map(p =>  <Product key = {p.id} title = {p.name}/>)}
            </Container>
        )
    }
}
const Container = styled.div``;
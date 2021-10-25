import React, { Component } from 'react'
import styled from "styled-components";
import sold from "../assets/Sold_icon.png"
export default class Product extends Component {

    handleCurrency = (item) => {
        if(item) {
            var newItem = this.props.price.filter(p => p.currency === item);
            return `${newItem[0].amount} ${newItem[0].currency}`
        }else {
            return `${this.props.price[0].amount} ${this.props.price[0].currency}`
        }
    }
    render(){
        return(
            <Container onClick={() => this.props.Handle(this.props.id)} style={{opacity : this.props.stock ? "" : "0.7", boxShadow : this.props.sold ? "0px 4px 35px rgba(168, 172, 176, 0.19)" : ""}}>
                {this.props.stock ? null : <Stock>out of stock</Stock>}
                {this.props.sold && <Sold src={sold} alt = "Sold item" />}
                <Image src={this.props.src} alt = "Product"  />
                <Content>
                    <Title>{this.props.title}</Title>
                    <Price>{this.handleCurrency(this.props.Curr)}</Price>
                </Content>
            </Container>
        )
    }
}

const Sold = styled.img`
    position: absolute;
    display: flex;
    align-self: flex-end;
    bottom: 50px;
    right: 25px;
`;

const Stock = styled.h1`
    position: absolute;
    left: 25.42%;
    right: 25.71%;
    top: 34.24%;
    bottom: 43.94%;
    font-size: 24px;
    line-height: 160%;
    text-transform: uppercase;
`;
const Container = styled.div`
    height: 386px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    padding: 15px;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;
const Title = styled.h3`
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
`;
const Image = styled.img`
    width: 95%;
    height: 80%;
    margin: auto;
    
`;

const Price = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
`;
const Content = styled.div`
    height: 20%;
`;

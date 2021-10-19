import React, { Component } from 'react'
import styled from 'styled-components';
import Brand from "../assets/Brand.png";
import vector from "../assets/Vector.png";
import vector2 from "../assets/Vector-2.png";


export default class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLight : false
        }
        this.toggler = this.toggler.bind(this)
    }
    toggler = () => {
        this.setState(
            prev => ({
                isLight : !prev.isLight
            })
        );
    }
    
    render() {
        const Style = {color : "#5ECE7B", borderBottom : "2px #5ECE7B solid"}
        return(
            <NavBar>
                <Container>
                    <Categories>
                        <Category onClick={this.toggler} style={this.state.isLight ? Style : null} ><Title>WOMEN</Title></Category>
                        <Category><Title>MEN</Title></Category>
                        <Category><Title>KIDS</Title></Category>
                    </Categories>
                    <CartBtn>
                        <img src = {Brand} alt = "Brand Icon"/>
                    </CartBtn>
                    <Icons>
                        <Currencies>
                                <Usd>$</Usd>
                                <img style={{height:"100%"}} src={vector2} alt = "DropDown" />
                        </Currencies>
                        <img style={{cursor : "pointer"}}  src={vector} alt="Purchases" />
                    </Icons>
                </Container>
            </NavBar>
        )
    }
}

const Title = styled.h1`
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    margin: 30%;
    padding: 10px;
`;


const Usd = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
`;


const Currencies = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


const NavBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Category = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100%;
`;

const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

const CartBtn = styled.div`
    cursor: pointer;
    margin-right: 130px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: 3%;
`;
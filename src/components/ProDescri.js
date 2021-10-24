import React, { Component } from 'react';
import styled from 'styled-components';



export default class ProDescri extends Component {
    
    render(){
        const item = this.props.Data;
        const Gall = item.gallery
        return (
            <Container>
               <Images>
                    <Choices>
                        {Gall.map(i => <img style={{height:"100px"}} src={i} alt ="product" />)}
                    </Choices>
                    <Image src={Gall[0]} />
               </Images>
               <Content>
                   <Title>
                        {item.name}
                   </Title>
                   <Attributes>
                       
                    </Attributes>   
                    <Price>
                        <h2>Price :</h2>
                        <h2>{`${item.prices[0].amount} ${item.prices[0].currency}`}</h2>
                    </Price> 

                    <Button>add to cart</Button>

                   <Descri>
                    <td dangerouslySetInnerHTML={{__html: item.description}} />
                   </Descri>
                            
                    

               </Content>
            </Container>
        )
    }
}
const Title = styled.h1``;
const Attributes = styled.div``;
const Price = styled.div``;
const Button = styled.button`
    background: #5ECE7B;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 32px;
    width: 292px;
    height: 52px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;
const Descri = styled.div``;

const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
const Images = styled.div`
    display: flex;
    width: 60%;
    align-self: flex-start;
`;
const Choices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Image = styled.img`
    width: 610px;
    height: 511px;
`;
const Content = styled.div`
    width : 40%;
`;

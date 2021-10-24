import React, { Component } from 'react';
import styled from 'styled-components';



export default class ProDescri extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            image : this.props.Data.gallery[0]
        }
    }
    handleClick = (data) => {
        this.setState({
            value : data
        });
    }
    handleButton = () => {
        this.props.Add()
    }
    switchImage = (val) => {
        this.setState({
            image : val
        })
    }
    render(){
        const item = this.props.Data;
        const Gall = item.gallery
        return (
            <Container>
               <Images>
                    <Choices>
                        {Gall.map(i => <img onClick={() => this.switchImage(i)} key={i} style={{height:"100px", cursor : "pointer"}} src={i} alt ="product" />)}
                    </Choices>
                    <Image src={this.state.image} />
               </Images>
               <Content>
                   <Title>
                        {item.name}
                   </Title>
                   {item.attributes[0] && 
                   <Attributes>
                   <h2>{item.attributes[0].name} :</h2>
                   <Choicees>
                       {item.attributes[0].items.map(i => item.attributes[0].type === "swatch" ? <Choice style={{opacity : this.state.value === i.value ? "0.6" : "", background : i.value}} key={i.id}  onClick={()=>{this.handleClick(i.value)}} /> : <Choice style={{opacity : this.state.value === i.value ? "0.2" : ""}} key={i.id} onClick={()=>{this.handleClick(i.value)}}>{i.value}</Choice>)}
                   </Choicees>
                </Attributes>  
                   } 
                    <Price>
                        <h2>Price :</h2>
                        <h2>{`${item.prices[0].amount} ${item.prices[0].currency}`}</h2>
                    </Price> 

                    <Button onClick={()=>this.handleButton()}>add to cart</Button>

                  
                    <Descri  dangerouslySetInnerHTML={{__html: item.description}} />
                 
                            
                    

               </Content>
            </Container>
        )
    }
}
const Choicees = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Choice = styled.div`
    border: 1px solid #A6A6A6;
    box-sizing: border-box;
    width: 63px;
    height: 45px;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`;

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
const Descri = styled.div`
    margin-top: 60px;
`;

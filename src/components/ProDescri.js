import React, { Component } from 'react';
import styled from 'styled-components';



export default class ProDescri extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            image : this.props.Data.gallery[0],
            Data : this.props.Data,
            choicesList : [],
            Total: 0
            
        }
        this.handleButton = this.handleButton.bind(this)
    }
    handleClick = (attr, val) => {
        let newItem = {name : attr.id, Val : val};
        if (this.state.choicesList.some(t => t.name === attr.id && t.Val === val)){
            this.setState({choicesList : [...this.state.choicesList.filter(t => t.name !== attr.id && t.Val !== val), newItem]})
        }else if (this.state.choicesList.some(t => t.name === attr.id && t.Val !== val)){
            this.setState({choicesList : [...this.state.choicesList.filter(t => t.name !== attr.id), newItem]})
        }else {
            this.setState({
                choicesList : [...this.state.choicesList, newItem]
            })
        }
        return null

    }
    handleButton = (item) => {
        var newItem = this.props.Data.prices.filter(p => p.currency === item);
        this.setState({Total : this.state.Total + newItem.amount});
        this.props.Addd(this.state.choicesList)
        this.setState({choicesList : []})
        this.props.HandleTotal(this.state.Total)
        console.log(newItem)
    }
    switchImage = (val) => {
        this.setState({
            image : val
        })
    }
    handleCurrency = (item) => {
        const Item = this.props.Data;
        if(item){
            var newItem = this.props.Data.prices.filter(p => p.currency === item);
            return `${newItem[0].amount} ${newItem[0].currency}` 
        }else {
            return `${Item.prices[0].amount} ${Item.prices[0].currency}`
        } 
    }
    render(){
        const item = this.props.Data;
        const Gall = item.gallery;
        return (
            <Container>
               <Images>
                    <Choices>
                        {Gall.map(i => <img onClick={() => this.switchImage(i)} key={i} style={{height:"80px", cursor : "pointer", width:"80px"}} src={i} alt ="product" />)}
                    </Choices>
                    <Image src={this.state.image} />
               </Images>
               <Content>
                   <Title>
                        {item.name}
                   </Title>
                 {item.attributes && 
                    item.attributes.map(attri => 
                     <Attributes key={attri.id}>
                         <h2>{attri.name} :</h2>
                         <Choicees>
                             {attri.items.map(i => attri.type === "swatch" ? <Choice style={{opacity : this.state.choicesList.some(t => t.Val === i.value && t.name === attri.id) ? "0.2" : "", background : i.value}} key={i.id}  onClick={()=>{this.handleClick(attri, i.value)}} /> : <Choice style={{opacity : this.state.choicesList.some(t => t.Val === i.value && t.name === attri.id) ? "0.2" : ""}} key={i.id} onClick={()=>{this.handleClick(attri, i.value)}}>{i.value}</Choice>)}
                         </Choicees>
                     </Attributes>
                     )
                }
                    <Price>
                        <h2>Price :</h2>
                        <h2>{this.handleCurrency(this.props.Currency)}</h2>
                    </Price> 
                    <Button style={{opacity : item.inStock ? "" : "0.2", cursor: item.inStock ? "" : "not-allowed"}} disabled={!item.inStock} onClick={() => this.handleButton(this.props.Currency)}>add to cart</Button>
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
    justify-content: space-between;
    padding: 20px;
`;
const Images = styled.div`
    display: flex;
    width: 50%;
    align-self: flex-start;
`;
const Choices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const Image = styled.img`
    padding: 10px;
    margin-left: 30px;
    height: 100%;
    width: 100%;

`;
const Content = styled.div`
    width : 40%;
`;
const Descri = styled.div`
    margin-top: 60px;
`;

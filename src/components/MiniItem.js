import React, { Component } from 'react'
import styled from 'styled-components';

export default class MiniItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 1,
             Count : 0,
        }
        this.handleCurrency = this.handleCurrency.bind(this);
    }
    handleCurrency = (item) => {
        if(item) {
            var newItem = this.props.price.filter(p => p.currency === item);
            this.props.HandleTotal(newItem[0].amount)
            return `${newItem[0].amount} ${newItem[0].currency}`
        }else {
            return `${this.props.price[0].amount} ${this.props.price[0].currency}`
        }
    }
    handleRight = () => {
        if(this.state.Count < this.props.image.length - 1){
            this.setState({
                Count : this.state.Count + 1
            })} else{
                this.setState({Count : 0})
            }
          
    }
    handleLeft = () => {
        if(this.state.Count <= 0){
            this.setState({
                Count : this.props.image.length - 1
            })} else{
                this.setState({
                    Count : this.state.Count - 1
                })
            }
          
    }
    render() {
        return(
            <Container>
                <Content>
                    <Title>{this.props.title}</Title>
                    <Price>{this.handleCurrency(this.props.Curr)}</Price>
                    <Attributes>
                            <Choicees>
                                {this.props.attr.map(atr => atr.Val.charAt(0) === "#" ?<Choice key={atr.Val} style={{background : atr.Val}} /> :<Choice key={atr.Val}>{atr.Val}</Choice>)}
                            </Choicees>
                    </Attributes>
                </Content>
                <Details>
                    <Counter>
                        <Clicker onClick={() => this.setState({count : this.state.count + 1})}>+</Clicker>
                        <h2>{this.state.count}</h2>
                        <Clicker onClick={() => this.setState({count : this.state.count - 1})}>-</Clicker>
                    </Counter>
                    <Scroll>
                        <div onClick={() => this.handleLeft()}><Scrollr >{`<`}</Scrollr></div>
                        <Image src = {this.props.image[this.state.Count]} alt="product" />
                        <div onClick={() => this.handleRight()}><Scrolll >{`>`}</Scrolll></div>
                    </Scroll>
                </Details>
                
            </Container>
        )
    }
}
const Scrollr = styled.p`
    position: absolute;
    left: 0;
    cursor: pointer;
    top: 25%;
    bottom: 25%;
`;
const Scrolll = styled.p`
    position: absolute;
    right: 0;
    top: 25%;
    bottom: 25%;
    cursor: pointer;
`;

const Details = styled.div`
    display: flex;
    width: 45%;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
    border-top: 1px solid #1D1F22;
`;
const Image = styled.img`
    height: 100px;
    width: 100px;
`;
const Clicker = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #1D1F22;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
   font-size: 20px;
`;

const Choice = styled.div`
    border: 1px solid #A6A6A6;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 10px;
`;
const Choicees = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;


const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`;
const Title = styled.div`
   font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`;
const Price = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
`;
const Attributes = styled.div``;

const Scroll = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: 15px;
    position: relative;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

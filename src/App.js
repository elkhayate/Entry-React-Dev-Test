import React, { useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { DataContext } from './contexts/DataContext';
import ProductList from './components/ProductList';
import ProDescri from './components/ProDescri';
import Cart from "./components/Cart";

export default function App() {
  const {infos, loading, error} = useContext(DataContext);
  const [data, setData] = useState();
  const [togg, setTogg] = useState(true);
  const [show, setShow] = useState(false);
  const [descri, setDescri] = useState();
  const [itemsSold, setItemsSold] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [showCart , setShowCart] = useState(false);
  const [drop, setDrop] = useState(false);
  const [Total, setTotal] = useState([])
  useEffect(()=>{
    setData(infos)
  },[loading, infos, togg])

  const sumTotal = () => {
    let Arr = Total;
    if(Arr.length >= 1){
      let sum = 0;
      for(let i =0; i < Arr.length; i++){
        sum += Arr[i]
      }
      return sum.toString()
    }else {
      return "0"
    }
  }
  const handleTotal = (item) => {
    console.log("tranit")
    setTotal(old => [...old , item])
    console.log(item)
  }
  const toggler = (val) => {
    setTogg(val)
    setShow(false)
    setShowCart(false)
  }
  const handleCurrency = (item) => {
    setCurrency(item)
  }

  const handleShow=(id)=>{
    const item = togg ? infos.categories[0].products.filter(p => p.id === id) : infos.categories[1].products.filter(p => p.id === id);
    setDescri(item)
    setShow(true)
  }
  const handleAdd = (item) => {
    const Item = [descri[0] , item];
    if(itemsSold.some(t => t[0] === descri[0])){
      setItemsSold([...itemsSold.filter(t => t[0] !== descri[0]), Item])
    }else {
      setItemsSold([...itemsSold, Item])
    }
    setShow(false)
  } 
  if(loading){
    return <p>Loading...</p>
  }else if(!loading){
     
    if(data){
      return (
        <>
        <Navbar HandleSum = {()=>sumTotal()}  Show = {drop} setShow={()=>setDrop(!drop)} setCart = {()=>setShowCart(!showCart)} setCartt = {() => setShowCart(true)} Curr={currency} Sold = {itemsSold} addCurrency={handleCurrency} Categories={data.categories} Currencies={data.currencies} Toggler = {toggler}  Togg = {togg}/>
        <div style={{opacity : drop ? "0.2" : "", background : drop ? "rgba(57, 55, 72, 0.22)" : "", height:"100vh"}}>
        {showCart ? <Cart Curr={currency} Sold = {itemsSold} /> :( show ? <ProDescri  HandleTotal={handleTotal}  Currency = {currency} Data = {descri[0]} Addd = {handleAdd} /> : <ProductList Dataa={data} Currency = {currency} Sold = {itemsSold} Handle = {() => handleShow}  Data={togg ? data.categories[0] : data.categories[1]}/>)}
        </div>
        </>
      )
    }
    console.log(error)
    return null
  }
  
}
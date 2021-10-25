import React, { useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { DataContext } from './contexts/DataContext';
import ProductList from './components/ProductList';
import ProDescri from './components/ProDescri';


export default function App() {
  const {infos, loading, error} = useContext(DataContext);
  const [data, setData] = useState();
  const [togg, setTogg] = useState(true);
  const [show, setShow] = useState(false);
  const [descri, setDescri] = useState();
  const [itemsSold, setItemsSold] = useState([]);
  const [currency, setCurrency] = useState();
  useEffect(()=>{
    setData(infos)
  },[loading, infos, togg])
  
  const toggler = (val) => {
    setTogg(val)
    setShow(false)
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
        <Navbar Sold = {itemsSold} addCurrency={handleCurrency} Categories={data.categories} Currencies={data.currencies} Toggler = {toggler}  Togg = {togg}/>
        {show ? <ProDescri Currency = {currency} Data = {descri[0]} Addd = {handleAdd} /> : <ProductList Dataa={data} Currency = {currency} Sold = {itemsSold} Handle = {() => handleShow}  Data={togg ? data.categories[0] : data.categories[1]}/>}
        </>
      )
    }
    console.log(error)
    return null
  }
  
}
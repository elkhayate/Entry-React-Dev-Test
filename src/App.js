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
  const [itemsSold, setItemsSold] = useState();

  useEffect(()=>{
    setData(infos)
  },[loading, infos, togg])
  
  const toggler = (didi) => {
    setTogg(didi)
    setShow(false)
  }
  const handleAdd = (item) => {
    setItemsSold(old => [...old, item]);
  } 
  const handleShow=(id)=>{
    const item = togg ? infos.categories[0].products.filter(p => p.id === id) : infos.categories[1].products.filter(p => p.id === id);
    setDescri(item)
    setShow(true)
  }
  if(loading){
    return <p>Loading...</p>
  }else if(!loading){
     
    console.log(data)
    if(data){
      return (
        <>
        <Navbar Categories={data.categories} Currencies={data.currencies} Toggler = {toggler}  Togg = {togg}/>
        {show ? <ProDescri Data = {descri[0]} Add = {() => handleAdd} /> : <ProductList Handle = {() => handleShow}  Data={togg ? data.categories[0] : data.categories[1]}/>}
        </>
      )
    }
    console.log(error)
    return null
  }
  
}
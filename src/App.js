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

  useEffect(()=>{
    setData(infos)
  },[loading, infos, togg])
  
  const toggler = () => {
    setTogg(!togg)
    setShow(false)
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
        {show ? <ProDescri Title = {descri[0].name} id = {descri[0].id} /> : <ProductList Handle = {() => handleShow}  Data={togg ? data.categories[0] : data.categories[1]}/>}
        </>
      )
    }
    console.log(error)
    return null
  }
  
}
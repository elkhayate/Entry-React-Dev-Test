import React, { useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { DataContext } from './contexts/DataContext';
import ProductList from './components/ProductList';
export default function App() {
  const {infos, loading, error} = useContext(DataContext);
  const [data, setData] = useState();
  const [togg, setTogg] = useState(true);

  useEffect(()=>{
    setData(infos)
  },[loading, infos, togg])
  
  const toggler = () => {
    setTogg(!togg)
  }
    
    
  if(loading){
    return <p>Loading...</p>
  }else if(!loading){
     
    console.log(data)
    if(data){
      return (
        <>
        <Navbar Categories={data.categories} Currencies={data.currencies} Toggler = {toggler}  Togg = {togg}/>
        <ProductList  Data={togg ? data.categories[0] : data.categories[1]}/>
        </>
      )
    }
    console.log(error)
    return null
  }
  
}
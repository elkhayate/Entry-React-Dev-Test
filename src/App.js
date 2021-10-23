import React, { useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { DataContext } from './contexts/DataContext';

export default function App() {
  const {infos, loading, error} = useContext(DataContext);
  const [data, setData] = useState()
  useEffect(()=>{
    setData(infos)
  },[loading,infos])

  if(loading){
    return <p>Loading...</p>
  }else if(!loading){
     
    console.log(data)
    if(data){
      return (
        <Navbar Data={data.categories}/>
      )
    }
    console.log(error)
    return null
  }
  
}
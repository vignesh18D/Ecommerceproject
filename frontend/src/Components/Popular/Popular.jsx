import React, { useEffect, useState } from 'react'
import './Popular.css'
import Items from '../Items/Items'

const Popular = () => {
  const[Datapopular,setDatapopular]=useState([])

  useEffect(()=>{
      fetch('http://localhost:4000/popular')
      .then((response)=>response.json())
      .then((data)=>setDatapopular(data));
  },[])
  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS</h1>
      <hr/>
      <div className="popular-item">
        {Datapopular.map((item,i)=>{
            return<Items key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default Popular

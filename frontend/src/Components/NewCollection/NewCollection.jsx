import React, { useEffect, useState } from 'react'
import Items from '../Items/Items'
import './NewCollection.css'



const NewCollection = () => {
  const [new_collection,setNew_collection]=useState([])

  useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
      .then((response)=>response.json()
    .then((data)=>setNew_collection(data)))
  },[])
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
        {new_collection.map((item,i)=>{
            return<Items key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
        </div>
      
    </div>
  )
}

export default NewCollection

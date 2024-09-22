import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image}/> </Link>
      <p>{props.name}</p>
      <div className="item-prices">
       <p>₹{props.price}</p>
      </div>
    </div>
  )
}

export default Items

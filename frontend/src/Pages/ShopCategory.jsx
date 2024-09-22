import React, { useContext } from 'react'
import './CSS/ShopCateory.css'
import { ShopContext } from '../Context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import Items from '../Components/Items/Items';
const ShopCategory = (props) => {
  const {products}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className="banner">
      <img src={props.banner}/>
      </div>
      <div className="index-sort">
        <p>
          <span>Showing 1-10</span> out  of 30 products
        </p>
        <div className="sort">
          sort by <IoIosArrowDropdown/>
        </div>
      </div>
      <div className="shop-products">
        {products.map((item,i)=>{
          if(props.category===item.category){
            return<Items key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>

          }else{
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory

import React, { useContext } from 'react'
import './ProductDisplay.css'
import { FaRegStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    
  return (
    <div className='productdisplay'>
        <div className="display-left">
            <div className="display-leftimg">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>

            </div>
                <div className="display-img">
                    <img className='main-image' src={product.image}/>
                </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <CiStar/>
            <p>(122)</p>

            </div>
            <div className="product-prices">
                <p>₹{product.price}</p>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus quibusdam tempora similique aspernatur quisquam officia omnis asperiores est eligendi iste quas repudiandae quos repellendus quae aperiam deserunt et nemo.</p>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
      
    </div>
  )
}

export default ProductDisplay

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {products}=useContext(ShopContext);
  const {productID}=useParams();
  const product=products.find((e)=> e.id===Number(productID))
  if (!product) {
    return <div>Product not found</div>; 
  }
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product

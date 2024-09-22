import React, { useEffect, useState } from 'react'
import { MdCancel } from "react-icons/md";
import './ListProduct.css'

const Listproduct = () => {
  const [allproduct, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllproducts(data); });
  }

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:id })
    })
    await fetchInfo();
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='list-page'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproduct.map((product, index) => {
          return <div key={index} className="listproduct-format-main listproduct-format">
          <img src={product.image} alt='' className='listproduct-product-icon' />
          <p>{product.name}</p>
          <p>₹{product.price}</p>
          <p>{product.category}</p>
          <MdCancel className="cart-remove-icon" onClick={() => {removeProduct(product.id)}} />
        </div>
        })}
      </div>
    </div>
  )
}

export default Listproduct;

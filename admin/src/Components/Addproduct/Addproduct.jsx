import React, { useState } from 'react';
import './Addproduct.css';
import { MdOutlineCloudUpload } from "react-icons/md";

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "Skincare",
    price: ""
  });

  const imagehandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault(); 
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
    }).then((res) => res.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((res) => res.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed");
      });

      setProductDetails({
        name: "",
        image: "",
        category: "Skincare",
        price: ""
      });
      setImage(false);
    }
  };

  return (
    <div className='add-product'>
      <form onSubmit={addProduct}> 
        <div className="addproduct-itemfeild">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfeild">
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here' />
          </div>
        </div>
        <div className="addproduct-itemfeild">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-select'>
            <option>Skincare</option>
            <option>Haircare</option>
            <option>Deodorants</option>
          </select>
        </div>
        <div className="addproduct-itemsfeild">
          <p className='p'>Upload</p>
          <label htmlFor='file-input'>
            {image ? (
              <img
                src={image ? URL.createObjectURL(image) : ''}
                alt='Uploaded'
                className='addproduct-upload-image'
              />
            ) : (
              <MdOutlineCloudUpload className='addproduct-upload' />
            )}
          </label>
          <input onChange={imagehandler} type='file' name='image' id='file-input' hidden />
        </div>
        <button type='submit' className='addproduct-btn'>ADD</button>
      </form>
    </div>
  );
}

export default Addproduct;

import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <FaCartPlus />
      <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <FaRegRectangleList />
      <p>List Product</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar

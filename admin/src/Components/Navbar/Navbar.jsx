import React from 'react'
import './Navbar.css'
import logo from '../../assets/imagess.jpg'
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' className='logo'/>
      </div>
      <div className="nav-items">
        <IoPerson className='admin' />
      </div>
    </div>
  )
}

export default Navbar

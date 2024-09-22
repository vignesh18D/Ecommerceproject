import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import { assest } from '../../assets/Data';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
    const [menu,setMenu]=useState("SHOP");
    const {getTotal}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={assest.logo}/>
        </div>
        <IoIosArrowDropdown onClick={dropdown} className='nav-dropdown'/>
        <ul ref={menuRef} className='nav-menu'>
        
            <li onClick={()=>{setMenu("SHOP")}}><Link style={{textDecoration:'none'}}to='/'>SHOP</Link>{menu=="SHOP"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("SKIN CARE")}}><Link style={{textDecoration:'none'}}to='/skincare'>SKIN CARE</Link>{menu=="SKIN CARE"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("HAIR CARE")}}><Link style={{textDecoration:'none'}}to='/haircare'>HAIR CARE</Link>{menu=="HAIR CARE"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("DEODORANTS")}}><Link style={{textDecoration:'none'}}to='/deodorants'>DEODORANTS</Link>{menu=="DEODORANTS"?<hr/>:<></>}</li>

        </ul>
        <div className="nav-login">
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        : <Link style={{textDecoration:'none'}}to='/login'><button>LOGIN</button></Link> }
          
             <Link style={{textDecoration:'none'}}to='/cart'><BsCart2 className='cart-icon'/></Link>
             <div className="nav-cart-count">{getTotal()}</div>
        </div>
      
    </div>
  )
}

export default Navbar

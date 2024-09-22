import React from 'react'
import logo from '../../assets/imagess.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-main">
        
        </div>
        {/* <div className="footer-links">
        
        <ul>
        <li>Company</li>
         <li>Products</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
        </ul>

         
     </div> */}
       
       
        {/* <div className="social-icons">
        
            <div className="icons-container">
            <FaLinkedin />
            </div>
            <div className="icons-container">
            <FaFacebook />
            </div>
            
        </div> */}
        <div className="footer-copy">
                <hr/>
                <div className="footer-logo">
            <img src={logo} alt='logo'/>
               </div>
                <p>Copyright @ 2024 - All Right Deserved</p>
            </div>
      
    </div>
  )
}

export default Footer

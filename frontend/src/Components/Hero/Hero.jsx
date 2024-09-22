import React from 'react'
import './Hero.css'
import heroimg from '../../assets/main.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-line"></div>
        <div className="hero-left">
            <h2>Explore the Finest Natural Products for All Your Needs</h2>
            <div>
                <div className="hand-icon">
                    <p>Discover the Essence of Nature with Our Handpicked Products.  
                    Embrace a Healthier Lifestyle with Skincare, Haircare, and More</p>
                    
                </div>
            </div>
            <div className="home-button">
                <h4>Latest Collection</h4>

            </div>
        </div>
        <div className="hero-right">
            <img src={heroimg} alt=''/>
        </div>
      
    </div>
  )
}

export default Hero

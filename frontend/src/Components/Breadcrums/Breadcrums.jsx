import React from 'react'
import './Breadcrum.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='Breadcrum'>
      HOME<MdKeyboardArrowRight /> SHOP<MdKeyboardArrowRight />{product.category}<MdKeyboardArrowRight />{product.name}
    </div>
  )
}

export default Breadcrums

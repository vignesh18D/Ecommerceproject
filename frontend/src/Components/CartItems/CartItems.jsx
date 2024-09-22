import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import { MdCancel } from "react-icons/md";

const CartItems = () => {
  const { getTotalCartAmount,products, cartItems, RemoveFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Loop through products and render items that are in the cart */}
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format">
                <img className='cart-image' src={product.image} alt={product.name} />
                <p className='cart-name'>{product.name}</p>
                <p className='cart-price'>{product.price}</p>
                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                <p className='total'>₹{product.price * cartItems[product.id]}</p>
                <MdCancel onClick={() => RemoveFromCart(product.id)} className="cart-remove-icon" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cart-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-item-total">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-item-total">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr/>
            <div className="cart-item-total">
              <h3 className='total'>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className='cart-button'>PROCEED TO CHECKOUT</button>
        </div>

      </div>
    </div>
  );
}

export default CartItems;

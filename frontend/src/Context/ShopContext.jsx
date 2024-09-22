import React, { createContext, useEffect, useState } from "react";


export const ShopContext=createContext(null);
const getdefault=()=>{
    let cart={};
    for(let index=0;index < 300+1;index++){
        cart[index]=0;

    }
    return cart;
}
const ShopContextProvider=(props)=>{
     const[products,setProducts]=useState([]);
    const[cartItems,setCartItems]=useState(getdefault())

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))

        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json'
            },
            body:"",
          }).then((response)=>response.json())
          .then((data)=>setCartItems(data))
               }
    },[])
        
       const addToCart =(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json',
            },
          body:JSON.stringify({"itemId":itemID}),
          })
          .then((response)=>response.json())
          .then((data)=>console.log(data))
        }
       }
       const RemoveFromCart =(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
               'Content-Type':'application/json',
            },
          body:JSON.stringify({"itemId":itemID}),
          })
          .then((response)=>response.json())
          .then((data)=>console.log(data))
        }
       }

       const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = products.find((product) => product.id === Number(item));
            if (itemInfo) {
              total += itemInfo.price * cartItems[item];
            }
          }
        }
        return total;  
      };
      const getTotal=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
      }
       
       const contextValue={getTotal,getTotalCartAmount,products,cartItems,addToCart,RemoveFromCart};

        return < ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
} 
export default ShopContextProvider;
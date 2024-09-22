import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import skin from '../src/assets/skincare.jpg'
import hair from '../src/assets/haircare.jpg'
import deo from '../src/assets/deo.jpg'



function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/skincare' element={<ShopCategory banner={skin} category="Skincare"/>}/>
        <Route path='/haircare' element={<ShopCategory banner={hair} category="Haircare"/>}/>
        <Route path='/deodorants' element={<ShopCategory  banner={deo} category="Deodorants"/>}/>
        <Route path='/product/:productID' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
     

      </Routes>
      <Footer/>
      
      </BrowserRouter>
     </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';

const App = () => {

  const[cartItems, setCartItems] =useState([]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
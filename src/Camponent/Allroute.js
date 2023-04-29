import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Profile from './Profile';
import Navbar from './Navbar';
import Download from './Download';
import Cart from './Cart';
import Footer from './Footer';
function Allroutes() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
      
        <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/Profile" element={<Profile />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default Allroutes

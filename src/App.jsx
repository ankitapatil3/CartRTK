import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import About from './Pages/About'
import Ourteam from './Pages/Ourteam'

import Main from './Pages/Main'
import Feedback from './Pages/Feedback'
import Footer from './Footer'
function App() {


  return (
    <>
     <Navbar/>
    <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path="/about" element = {<About/>}/>
<Route path="/ourteam" element = {<Ourteam/>}/>
<Route path="/product" element= {<Home/>}/>
<Route path="/feedback" element= {<Feedback/>}/>
    </Routes>
   
<Footer/>
    </>
  )
}

export default App

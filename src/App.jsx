import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Delivery from './pages/Delivery'
import Dining from './pages/Dining'
import Nightlife from './pages/Nightlife'
import Collect from './pages/Collect'

function App() {


  return (
    <div className='text-black'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Order Online" element={<Delivery/>}/>
        <Route path="/Dining" element={<Dining/>}/>
        <Route path="/Nightlife and Clubs" element={<Nightlife/>}/>
        <Route path="/Collections" element={<Collect/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

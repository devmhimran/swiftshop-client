import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route } from "react-router-dom"
import NavMenu from './Components/NavMenu/NavMenu'
import AllProducts from './Pages/AllProducts/AllProducts'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import Register from './Pages/Register/Register'
import RequireAuth from './Components/RequireAuth/RequireAuth'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={
          <RequireAuth>
            <AllProducts />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route } from "react-router-dom"
import NavMenu from './Components/NavMenu/NavMenu'
import AllProducts from './Pages/AllProducts/AllProducts'
import Login from './Pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

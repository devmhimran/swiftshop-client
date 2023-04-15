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
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import Dashboard from './Pages/Dashboard/Dashboard'
import AdminAllProducts from './Pages/AdminAllProducts/AdminAllProducts'
import AllOrders from './Pages/AllOrders/AllOrders'
import AllCustomer from './Pages/AllCustomer/AllCustomer'
import AddProduct from './Pages/AddProduct/AddProduct'
import AddCustomer from './Pages/AddCustomer/AddCustomer'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <AllProducts />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={
            <RequireAuth>
              <AdminAllProducts />
            </RequireAuth>
          } />
          <Route path='customers' element={
            <RequireAuth>
              <AllCustomer />
            </RequireAuth>
          } />
          <Route path='orders' element={
            <RequireAuth>
              <AllOrders />
            </RequireAuth>
          } />
          <Route path='add-product' element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          } />
          <Route path='add-customer' element={
            <RequireAuth>
              <AddCustomer />
            </RequireAuth>
          } />
        </Route>
      </Routes>
    </div>
  )
}

export default App

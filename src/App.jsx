import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import Cart from './Components/Cart/Cart'
import CartProvider from './Components/Contexts/CartContext/CartProvider'
import FormApp from './Components/Form/FormApp'
import Inicio from './Components/Inicio/Inicio'
import ItemsChampagne from './Components/Item/ItemsChampagne'
import ItemsTequila from './Components/Item/ItemsTequila'
import ItemsVodka from './Components/Item/ItemsVodka'
import ItemsWisky from './Components/Item/ItemsWisky'
import Layout from './Components/Layout/Layout'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


export default function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/form' element={<FormApp />} />
            <Route path="/vodka" element={<ItemsVodka />} />
            <Route path="/champagne" element={<ItemsChampagne />} />
            <Route path="/wisky" element={<ItemsWisky />} />
            <Route path="/tequila" element={<ItemsTequila />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}

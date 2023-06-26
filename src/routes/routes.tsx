import { Route, Routes } from 'react-router-dom';
import React from 'react'
import { Orders } from '../components/Orders/Orders';
import { Products } from '../components/Products/Products';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Orders />}
        index
      />
      <Route
        path='/Orders'
        element={<Orders />}
      />
      <Route
        path='/Products'
        element={<Products />}
      />
    </Routes>
  )
}

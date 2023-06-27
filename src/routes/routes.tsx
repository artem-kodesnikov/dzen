import { Route, Routes } from 'react-router-dom';
import React from 'react'
import { Orders } from '../components/Orders/Orders';
import { Products } from '../components/Products/Products';
import { HomePage } from '../components/HomePage/HomePage';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
        index
      />
      <Route
        path='/Orders'
        element={<Orders />}
        index
      />
      <Route
        path='/Products'
        element={<Products />}
      />
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Orders } from '../components/OrdersPage/Orders';
import { HomePage } from '../components/HomePage/HomePage';
import { ProductPage } from '../components/ProductPage/ProductPage';

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
        element={<ProductPage />}
      />
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Orders } from '../components/OrdersPage/Orders';
import { HomePage } from '../components/HomePage/HomePage';
import { ProductPage } from '../components/ProductPage/ProductPage';
import { ROUTER_KEYS } from './keys.const';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTER_KEYS.HOMEPAGE}
        element={<HomePage />}
        index
      />
      <Route
        path={ROUTER_KEYS.ORDERS}
        element={<Orders />}
      />
      <Route
        path={ROUTER_KEYS.PRODUCTS}
        element={<ProductPage />}
      />
    </Routes>
  );
};

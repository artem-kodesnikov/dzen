import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../routes/keys.const';
import style from './NavigationMenu.module.css';

export const NavigationMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => isActive ? `${style.nav_link__active}` : `${style.nav_link}`}
        to={ROUTER_KEYS.ORDERS}
      >
        Orders
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? `${style.nav_link__active}` : `${style.nav_link}`} 
        to={ROUTER_KEYS.PRODUCTS}
      >
        Products
      </NavLink>
    </>
  );
};

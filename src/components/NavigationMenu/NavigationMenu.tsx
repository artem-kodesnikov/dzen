import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavigationMenu.module.css';

export const NavigationMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => isActive ? `${style.nav_link__active}` : `${style.nav_link}`}
        to="/Orders"
      >
        Orders
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${style.nav_link__active}` : `${style.nav_link}`} to="/Products">
        Products
      </NavLink>
    </>
  );
};

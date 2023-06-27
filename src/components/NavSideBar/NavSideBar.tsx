import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import style from './NavSideBar.module.css';

export const NavSideBar = () => {
  return (
    <Nav className={style.nav_sidebar}>
      <div className={style.avatar_container}>
        <Image className={style.avatar} height={100} src="./img/avatar.svg" roundedCircle />
        <div className={style.avatar_setting}>⚙️</div>
      </div>
      <NavigationMenu />
    </Nav>
  );
};

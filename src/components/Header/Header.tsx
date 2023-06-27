import React from 'react';
import { Container, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TopMenu } from '../TopMenu/TopMenu';
import style from './header.module.css';

export const Header = () => {
  return (
    <Navbar className={style.header} bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link className='text-decoration-none' to='/'>
            Logo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse className={`justify-content-between ${style.menu_collaps}`} id="navbar">
          <Form>
            <FormControl type="text" placeholder="Search" className={`mr-sm-2 ${style.search_input}`} />
          </Form>
          <TopMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

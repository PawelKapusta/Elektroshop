import React from 'react';
import Logo from '../../../assets/images/Logo.png';
import { Nav, NavMenu, NavBtn, NavBtnLink, NavLink, Bars } from './NavbarElements';

const MainNavbar = () => (
  <>
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="LogoImage" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/promotions">Promotions</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/cart/:id?">Cart</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/register" reg={1}>
          Sign up
        </NavBtnLink>
      </NavBtn>
      <NavBtn>
        <NavBtnLink to="/login">Sign in</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);

export default MainNavbar;

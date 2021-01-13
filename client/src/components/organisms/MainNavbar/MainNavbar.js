import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../../assets/images/Logo.png';
import { Nav, NavMenu, NavBtn, NavBtnLink, NavLink, Bars } from './NavbarElements';

const MainNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
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
          <NavLink to="/cart/:id?">
            Cart {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
          </NavLink>
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
};

export default MainNavbar;

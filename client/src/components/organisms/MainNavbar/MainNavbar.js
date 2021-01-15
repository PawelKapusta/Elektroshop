import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import Logo from '../../../assets/images/Logo.png';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  DropDown,
  List,
  ListElement,
} from './NavbarElements';
import { signout } from '../../../actions/userActions';

const MainNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
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
          {userInfo ? (
            <DropDown>
              <NavLink to="#">
                {userInfo.name} <FaCaretDown />{' '}
              </NavLink>
              <List>
                <ListElement>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ListElement>
              </List>
            </DropDown>
          ) : (
            <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default MainNavbar;

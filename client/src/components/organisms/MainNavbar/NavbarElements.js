import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3.5rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: #15cdfc;
  }
  &.active {
    :first-of-type {
      color: #98fb98;
    }
    :last-of-type {
      color: #000000;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const listDiv = styled.div`
  margin-top: 3%;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  border-radius: 8px;
  background: #256ce1;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 17px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  ${({ reg }) =>
    reg &&
    css`
      background: #ff0000;
    `}
`;

import React from 'react';
import styled from 'styled-components';
import Logo2 from '../../../assets/images/Logo2.png';

export const Foot = styled.div`
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  float: bottom;
`;

export const Footimg = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: block;
  left: 50%;
  bottom: 0px;
`;

export const Foottext = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: block;
  left: 50%;
  bottom: 0px;
  text-align: center;
`;

const Footer = () => (
  <>
    <Foot>
      <Footimg>
        <img src={Logo2} alt="LogoImage" />
      </Footimg>
      Copyright ©2020 All rights reserved{' '}
    </Foot>
  </>
);

export default Footer;

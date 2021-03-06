import React from 'react';
import styled from 'styled-components';
import Logo2 from '../../../assets/images/Logo2.png';

export const Foot = styled.div`
  bottom: 0px;
  width: 100%;
  height: 100px;
  background: #f2709c;
  padding-top: 20px;
  // background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: #454141;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  float: bottom;
`;

export const Footimg = styled.div`
  margin: 0px auto;
  padding: 0px auto;
  display: block;
  left: 50%;
  top: 0px;
`;

export const Foottext = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: block;
  left: 50%;
  top: 0px;
  font-size: 1.4rem;
  text-align: center;
  color: #eeffe0;
`;

const Footer = () => (
  <>
    <Foot>
      <Footimg>
        <img src={Logo2} alt="LogoImage" />
      </Footimg>
      <Foottext>Copyright ©2021 All rights reserved </Foottext>
    </Foot>
  </>
);

export default Footer;

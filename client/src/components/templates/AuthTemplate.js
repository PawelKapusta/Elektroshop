import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1%;
`;

const StyledAuthCard = styled.div`
  width: 55vh;
  height: 75vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <Heading style={{ marginBottom: '2%', fontsize: '1.5rem' }}>
      Your Elektroshop experience
    </Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export default AuthTemplate;

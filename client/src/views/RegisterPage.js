import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthTemplate from '../components/templates/AuthTemplate';
import { routes } from '../Routes';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;
const BtnStyled = styled(Button)`
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);

  &:hover {
    transition: all 0.6s ease-in-out;
    background: #f7971e;
    background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
    background: linear-gradient(to right, #ffd200, #f7971e);
  }
`;
const RegisterPage = () => (
  <AuthTemplate>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={({ username, password }) => {
        console.log(username, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign up</Heading>
          <StyledForm>
            <StyledInput
              type="text"
              name="username"
              placeholder="Login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <BtnStyled type="submit">register</BtnStyled>
          </StyledForm>
          <StyledLink to={routes.login}>I want to log in!</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);
export default RegisterPage;

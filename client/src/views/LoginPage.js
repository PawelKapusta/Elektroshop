import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthTemplate from '../components/templates/AuthTemplate';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import { routes } from '../Routes';
import Input from '../components/atoms/Input/Input';
import { authenticate as authenticateAction } from '../actions/index';

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
  background: #667db6;
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
  &:hover {
    transition: all 0.6s ease-in-out;
    background: #007991;
    background: -webkit-linear-gradient(to right, #78ffd6, #007991);
    background: linear-gradient(to right, #78ffd6, #007991);
  }
`;
const LoginPage = ({ userID, authenticate }) => (
  <AuthTemplate log={1}>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign in {userID}</Heading>
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
            <BtnStyled type="submit">sign in</BtnStyled>
          </StyledForm>
          <StyledLink to={routes.register}>I want my account!</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);
const mapStateToProps = ({ userID = null }) => ({
  userID,
});
const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

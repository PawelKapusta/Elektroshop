import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import AuthTemplate from '../components/templates/AuthTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import MessageBox from '../components/atoms/MessageBox/MessageBox';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  border: 1px solid black;
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
  margin-bottom: 5%;
  &:hover {
    transition: all 0.6s ease-in-out;
    background: #f7971e;
    background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
    background: linear-gradient(to right, #ffd200, #f7971e);
  }
`;
const RegisterPage = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <AuthTemplate>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <Heading style={{ marginLeft: '35%' }}>Sign up</Heading>
        </div>
        {/* eslint-disable */}
        <StyledForm>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email address</label>
          <StyledInput
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <StyledInput
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <BtnStyled type="submit">register</BtnStyled>
          {/* eslint-disable */}
        </StyledForm>
        Already have an account?{' '}
        <StyledLink to={`/signin?redirect=${redirect}`}>I want to log in!</StyledLink>
      </form>
    </AuthTemplate>
  );
};

export default RegisterPage;

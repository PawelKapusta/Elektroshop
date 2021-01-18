import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthTemplate from '../components/templates/AuthTemplate';
import Button from '../components/atoms/Button/Button';
import Input from '../components/atoms/Input/Input';
import '../css/signin.css';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';
import MessageBox from '../components/atoms/MessageBox/MessageBox';

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
const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <AuthTemplate log={1}>
      <form className="form" onSubmit={submitHandler}>
        <div className="Title">
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          {/* eslint-disable */}
          <label> Email address</label>
          <StyledInput
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <StyledInput
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* eslint-disable */}
        <div className="Btn">
          <BtnStyled type="submit">Sign In</BtnStyled>
        </div>
        <div>
          <div>
            New customer?{' '}
            <StyledLink to={`/register?redirect=${redirect}`}>Create your account</StyledLink>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
};
// const mapStateToProps = ({ userID = null }) => ({
//   userID,
// });
// const mapDispatchToProps = (dispatch) => ({
//   authenticate: (username, password) => dispatch(authenticateAction(username, password)),
// });

export default LoginPage;

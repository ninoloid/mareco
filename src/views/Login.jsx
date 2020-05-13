import React from 'react'
import {Helmet} from 'react-helmet'
import LoginForm from './components/LoginForm'

const Login = ({ type }) => {
  return (
    <div
      style={
        { 
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }
      }
    >
      <Helmet>
        <title>{ type === 'login' ? "Login" : "Register" }</title>
      </Helmet>
      <LoginForm type={ type }/>
    </div>
  );
}

export default Login;

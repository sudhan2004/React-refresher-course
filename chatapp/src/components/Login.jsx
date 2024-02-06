import React, { Component } from 'react';
import { Button, Card, TextField } from '@mui/material';
import "./Login.css";
import { HashLink as Link } from 'react-router-hash-link';

class Login extends Component {
  render() {
    return (
      // <div className='body1'>
        <div className="login-box">
        <h2>TALK HUB</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div align="center">
            <Link smooth to='/chatmain#'>
              <button type='submit'>Log in</button>
            </Link>
          </div>
        </form>
        </div>
      // </div>
    );
  }
}

export default Login;

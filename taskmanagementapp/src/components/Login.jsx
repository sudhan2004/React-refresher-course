import React, { Component } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import "./Login.css";
import logo from './images/logo.png';
import mainlogo from './images/loginimage.jpg';
import { HashLink as Link } from 'react-router-hash-link';


class Login extends Component {
  render() {
    return (
      <Grid container className="grid-container" justifyContent="center" alignItems="center">
        <Grid item xs={3.3} className="login-box">
          <div className='line'>
            <div style={{marginTop:-30,marginLeft:-80,paddingTop:10}}><Typography sx={{fontStyle:'italic'}} variant="h2">DO IT<div style={{marginTop:-90,marginLeft:190,paddingLeft:50}}><img style={{borderRadius:50,marginLeft:20}} width={100} height={100} src={logo} alt="" /></div></Typography></div>
            <form>
              <div className="user-box1">
                <TextField label="Username" fullWidth sx={{textDecoration:'none',outline:'none',width:320,marginLeft:-4,marginTop:0}} required />
              </div>
              <div className="user-box2">
                <TextField label="Password" sx={{textDecoration:'none',outline:'none',width:320,marginLeft:-4}} type="password" fullWidth required />
              </div>
              <div align="center">
              <Link smooth to='/taskmain'>
                <button type='submit' variant="contained">
                  Log in
                </button>
                </Link>
              </div>
              <div align="center" style={{marginTop:50}}>
                Don't have an account?<Link sx={{marginTop:40,textTransform:'none',textDecoration:'underlined',background:'none',color:''}} type='submit' variant="contained">
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={3.2} >
          <div align="center" className="app-description"><img style={{filter:'opacity(100%)'}} src={mainlogo} width={422} height={600} alt="" /></div>
        </Grid>
      </Grid>
    );
  }
}

export default Login;

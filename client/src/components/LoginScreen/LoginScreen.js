import React, { Component } from 'react';
import logo from '../../assets/auth_logo.png';
import {Link} from 'react-router-dom';
import './LoginScreen.css';

export default class LoginScreen extends Component {

  render() {
    return (
        <div id="root">
      <div class="Auth__container white_bgc">
      <img src={logo} alt="logo" class="Auth_Logo" />
      <span>Username</span>
      <input class="Auth__input dark_green_border" type="text"/>
      <span>Password</span>
      <input class="Auth__input dark_green_border" type="password" />

      <div class="Auth__buttons_container">
      <Link to="/dashboard"><button class="Auth__button_login lightest_green_bgc open-sans-bold">Login</button></Link>
      <button class="Auth__button_register darkest_green_bgc open-sans-bold">Register</button>

      </div>

        </div>
      </div>
    );
  }
}


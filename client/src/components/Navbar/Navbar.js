import React, { Component } from 'react';
import logo from '../../assets/header_logo.png';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <div class="Header_parent dark_green_bgc">
      <div class="Header_child">
      <div class="Header_left">
        <img src={logo} alt="logo" class="Auth_Logo" />
        <span class="Header_left_span open-sans-bold">Houser</span>
        <span class="Header_left_span open-sans">Dashboard</span>

      </div>

      <div class="Header_right">
        <Link to="/"><span class="Header_right_span open-sans-bold">Logout</span></Link>
      </div>
      </div> 
      </div>
    );
  }
}
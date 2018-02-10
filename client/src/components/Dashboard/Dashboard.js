import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import Filter from "./Filter/Filter";
import PropertyList from "./PropertyList/PropertyList";
import {Link} from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component {

  render() {
    return (
      <div id="root">
        <Navbar />
        <div class="Dashboard_container">
        <Link to="/wizard/1"><button class="Dashboard_button_new lightest_green_bgc open-sans-bold">Add new property</button></Link>
        <Filter />
        <div class="Dashboard_homeSpan_container"><span class="open-sans-bold"> Home Listings </span></div>
        <div>
            <PropertyList />
        </div>


        </div>        
      </div>
    );
  }
}

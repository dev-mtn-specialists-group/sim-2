import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
        
                   <div className='link-wrap'>

                        <p><Link to='/' className='links'>Login Screen</Link></p>
                        
                        <p><Link to='/dashboard' className='links'>Dashboard</Link></p>

                        {Routes}
                   </div>  
                   
        
    );
  }
}

let mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);

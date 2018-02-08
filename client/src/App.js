import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './routes';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>Routing Test</div> 
                   <div className='link-wrap'>
                        <p><Link to='/' className='links'>Login Screen</Link></p>
                        
                        <p><Link to='/dashboard' className='links'>Dashboard</Link></p>
                   </div>  
                   {Routes}
      </div>
    );
  }
}

export default App;

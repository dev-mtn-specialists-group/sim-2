import React, { Component } from 'react';
import Routes from './routes';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
         <div>
            {Routes}
          </div>  
                   
        
    );
  }
}

let mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);


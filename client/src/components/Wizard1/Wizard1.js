import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updatePropertyName, updatePropertyDescription} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'

class Wizard1 extends Component {

  render() {
    const {updatePropertyName,updatePropertyDescription} = this.props;
    return (
      <div className="parent-div">

        <div className="vert-align">

          <div className="header">
            <p className="left-align">Add new listing</p>
            <Link to="/dashboard"><button className="right-align">Cancel</button></Link>
          </div>

          <div className="status">
            <p>Step 1</p>
            <img src={stepActive} alt="Step 1"/>
            <img src={stepInactive} alt="Step 2"/>
            <img src={stepInactive} alt="Step 3"/>
            <img src={stepInactive} alt="Step 4"/>
            <img src={stepInactive} alt="Step 5"/>
          </div>

          <div className="inputs">
            <p>Property Name</p>
            <input type="text" onChange={(e) => updatePropertyName(e.target.value)}/>
            <p>Property Description</p>
            <input type="text" onChange={(e) => updatePropertyDescription(e.target.value)}/>
          </div>

          <Link to="/wizard/2"><button>Next Step</button></Link>

        </div>
          
      </div>
    );
  }
}

let mapStateToProps = state => {
  const {propertyName,propertyDescription} = state;
  return {
    propertyName,
    propertyDescription
  }
};

export default connect(mapStateToProps,{updatePropertyName,updatePropertyDescription})(Wizard1);
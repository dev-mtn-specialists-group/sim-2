import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'
import stepCompleted from '../../assets/step_completed.png'

class Wizard5 extends Component {

  render() {
    const {updateDesiredRent} = this.props;
    return (
      <div className="parent-div">

        <div className="vert-align">

          <div className="header">
            <p className="left-align">Add new listing</p>
            <Link to="/dashboard"><button className="right-align">Cancel</button></Link>
          </div>

          <div className="status">
            <p>Step 5</p>
            <img src={stepCompleted} alt="Step 1"/>
            <img src={stepCompleted} alt="Step 2"/>
            <img src={stepCompleted} alt="Step 3"/>
            <img src={stepCompleted} alt="Step 4"/>
            <img src={stepActive} alt="Step 5"/>
          </div>

          <div className="inputs">          
            <p>Recommended Rent ${this.props.monthlyMortgage * 1.25}</p>
            <p>Desired Rent</p>
            <input type="text" onChange={(e) => updateDesiredRent(e.target.value)}/>
          </div>

          <div className="navigation">
            <Link to="/wizard/4"><button>Previous Step</button></Link>
            <Link to="/dashboard"><button>Complete</button></Link>
          </div>         

        </div>
          
      </div>
    )
  }
}

let mapStateToProps = state => {
  const {desiredRent, monthlyMortgage} = state;
  return {
    desiredRent,
    monthlyMortgage
  }
};

export default connect(mapStateToProps,{updateDesiredRent})(Wizard5)

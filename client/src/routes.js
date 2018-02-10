import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard1 from './components/Wizard1/Wizard1';
import Wizard2 from './components/Wizard2/Wizard2';
import Wizard3 from './components/Wizard3/Wizard3';
import Wizard4 from './components/Wizard4/Wizard4';
import Wizard5 from './components/Wizard5/Wizard5';

export default (
    <HashRouter>
        <div>
            <Route exact path='/' component={LoginScreen} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path="/wizard/1" component={Wizard1} />
            <Route path="/wizard/2" component={Wizard2} />
            <Route path="/wizard/3" component={Wizard3} />
            <Route path="/wizard/4" component={Wizard4} />
            <Route path="/wizard/5" component={Wizard5} />
        </div>
    </HashRouter>    
)
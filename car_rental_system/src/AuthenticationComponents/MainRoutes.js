import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from '../AdminAccount/HomePage';
import LoginComponent from './LoginComponent';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        
                        <Route path="/Login" exact component={LoginComponent}/>
                        <Route path="/Admin/Home" component={HomePage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default MainRoutes;
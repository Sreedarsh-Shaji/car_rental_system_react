import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from '../AdminAccount/HomePage';
import LoginComponent from './LoginComponent';
import AllUsers from '../AdminAccount/AllUsers';
import AllAgencies from '../AdminAccount/AllAgencies';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        
                        <Route path="/Login" exact component={LoginComponent}/>

                        { /* Admin components */ }
                        <Route path="/Admin/Home" component={HomePage}/>
                        <Route path="/Admin/All-users" component={AllUsers}/>
                        <Route path="/Admin/All-agencies" component={AllAgencies}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}


export default MainRoutes;
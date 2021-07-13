import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';


class AllOfficers extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            message : null
        }
    }
    componentDidMount() { //Called immediately when the component is mounted
        //this.refreshToDos()
        AuthenticationDataService.getAllOfficers().
        then( response => { 
            this.setState ({ users : response.data }) 
            console.log( response.data )
            } )
    }
    render() {
        return (
            <>          
            <Header/>
                <div>
                
                <div className="container">
                    <br/>
                <h1>Officers</h1>
                <br/>
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>email ID</th>
                                <th>Office Address</th>
                                <th>Office Contact Number</th>
                                <th>Alternate Number</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    officers =>
                                        <tr key={officers.officeId}>
                                            <td>{officers.officeId}</td>     
                                            <td>{officers.emailId}</td>
                                            <td>{officers.officeAddress}</td>
                                            <td>{officers.officePhone}</td>
                                            <td>{officers.officeAlternatePhone}</td>
                                            <td><button className="btn btn-warning">Delete</button></td>     
                                        </tr>
                                )
                            }
                        </tbody>
                        </table>
                </div>
                </div>
            
            </>
        );
    }
}

export default AllOfficers;
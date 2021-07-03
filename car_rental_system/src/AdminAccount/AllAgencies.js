import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import tableHandler from './TableHandler/TableHandler';

import moment from 'moment';

class AllAgencies extends Component {

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
        AuthenticationDataService.getAllAgencies().
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
                <h1>List Agency</h1><br/>
                
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Active since</th>
                                <th>Last active</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    agency =>
                                        <tr key={agency.agencyId}>
                                            <td>{agency.agencyId}</td>
                                            <td>{agency.name}</td>
                                            <td>{agency.email}</td>
                                            <td>{agency.phone}</td>
                                            <td>{moment(agency.targetDate).format('DD-MM-YYYY hh:mm:ss')}</td>
                                            <td>{moment(agency.lastLogin).format('DD-MM-YYYY hh:mm:ss')}</td>
                                             {/*<td>{user.done.toString()}</td>*/}
                                            <td><button className="btn btn-warning">Delete</button></td>
                                            <td><button className="btn btn-success">Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                        </table>
                </div>
                </div>
            <Footer/>

            </>
        );
    }
}

export default AllAgencies;
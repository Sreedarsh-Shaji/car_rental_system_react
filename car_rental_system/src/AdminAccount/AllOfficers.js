import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

import moment from 'moment';

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
                <h1>Officers</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>email ID</th>
                                <th>Office Address</th>
                                <th>Office Contact Number</th>
                                <th>Alternate Number</th>
                                <th>Last Login Date</th>
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
                                            <td>{moment(officers.creationDateTime).format('DD-MM-YYYY hh:mm:ss')}</td>
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

export default AllOfficers;
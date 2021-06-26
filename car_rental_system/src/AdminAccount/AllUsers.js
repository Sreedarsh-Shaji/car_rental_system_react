import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

import moment from 'moment';

class AllUsers extends Component {

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
        AuthenticationDataService.getAllusers().
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
                <h1>List todos</h1>
                <div className="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>License Number</th>
                                <th>Active since</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.licenseNumber}</td>
                                            <td>{moment(user.creationDateTime).format('DD-MM-YYYY hh:mm:ss')}</td>
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

export default AllUsers;
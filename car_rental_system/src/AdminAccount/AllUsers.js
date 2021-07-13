import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

import moment from 'moment';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

class AllUsers extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            message : null,
            userstatus: "Suspend"
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

        const { history } = this.props;

        AuthenticationDataService.userStatus(this.state.userstatus)
        .then((response) => { 
                
                AuthenticationService.changeUserStatus(response.data);  
                if(response.data.adminEmail == null)
                {
                    this.setState({userStatus:"Invalid credentials"})
                } 
                else{  
                    this.setState({error:"Valid credentials"})
                    history.push('/Admin/Home');
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )
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
               
                <div className="container">
                    <br/>
                <h1>Users</h1>
                <br/>
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th>id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>License Number</th>
                               
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
                                            
                                            

                                             {/*<td>{user.done.toString()}</td>*/}
                                            <td><button className="btn btn-warning" onClick={this.onSubmit}>Delete</button></td>
                                            
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

export default AllUsers;
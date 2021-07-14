import React, { Component } from 'react';
import Header from './CommonComponents/Header';

import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

class ViewUserTrips extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            message : null
        }
    }


/*

 {
                                        this.state.users.map(
                                            trips =>
                                                <tr key={trips.tripId}>
                                                    <td>{trips.tripId}</td>
                                                    <td>{trips.agency}</td>
                                                    <td>{trips.pickupOfficeLocation}</td>
                                                    <td>{trips.returnOfficeLocation}</td>
                                                    <td>{trips.startDate}</td>
                                                    <td>{trips.endDate}</td>
                                                    <td><button className="btn btn-warning" >Delete</button></td>
                                                </tr>
                                        )
                                    }

*/

    componentDidMount() { //Called immediately when the component is mounted
        //this.refreshToDos()
        AuthenticationDataService.getAllTrips().
        then( response => { 
            this.setState ({ users : response.data }) 
            console.log( response.data )
            } )
    }
    render() {
        return (
            <div>
                <Header/>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Trips</h3>
                            
                        </div>
                    </div>

                    

                    <br />

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Pick Up Office</th>
                                        <th scope="col">Return Office</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Agency</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Delete Trips</th>
                                    </tr>
                                </thead>

                                    {
                                       //console.log("type of " , typeof(this.state.users))
                                       console.log(Object.values(this.state.users))
                                    }
                                <tbody>
                                   
                                </tbody>
                            </table>

                        </div>
                        
                    </div>
                    
                </div>
                
               
            </div>
        );
    }
}

export default ViewUserTrips;
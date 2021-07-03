import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

import moment from 'moment';

class AllVehicle extends Component {

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
        AuthenticationDataService.getAllVehicles().
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
                                <th>Vehicle Id</th>
                                <th>Register Number</th>
                                <th>Enginer Number</th>
                                <th>Manufacturer</th>
                                <th>Fuel Type</th>
                                <th>Kilometer Run</th>
                                <th>Hourly Rate</th>
                                <th>Status</th>
                                <th>Last  login</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.users.map(
                                    vehicle =>
                                        <tr key={vehicle.vehicleId}>
                                            <td>{vehicle.vehicleId}</td>
                                            <td>{vehicle.registerNumber}</td>
                                            <td>{vehicle.engineNumber}</td>
                                            <td>{vehicle.manufacturer}</td>
                                            <td>{vehicle.fuelType}</td>
                                            <td>{vehicle.kmsOperated}</td>
                                            <td>{vehicle.hourlyRate}</td>
                                            <td>{vehicle.status}</td>
                                            <td>{moment(vehicle.lastLogin).format('DD-MM-YYYY hh:mm:ss')}</td>
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

export default AllVehicle;
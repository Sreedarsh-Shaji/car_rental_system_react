import React, { Component } from 'react';

import Header from './CommonComponents/Header';

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
        this.deleteVehicle = this.deleteVehicle.bind(this);
    }

    componentDidMount() { //Called immediately when the component is mounted
        //this.refreshToDos()
        AuthenticationDataService.getAllVehicles().
        then( response => { 
            this.setState ({ users : response.data }) 
            console.log( response.data )
            } )
    }
    deleteVehicle(vid)
    {
        AuthenticationDataService.deleteVehicle(vid)
        .then((response) => { 
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Invalid credentials"})
                } 
                else{  
                    alert("Vehicle deleted successfully");
                    this.setState({message:"Valid credentials"})
                    
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )
    }

    render() {
        return (
            <>        
            <Header/>
                <div>
                
                <div className="container">
                <h1>Vehicle</h1>
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th>Vehicle Id</th>
                                <th>Register Number</th>
                                <th>Enginer Number</th>
                                <th>Manufacturer</th>
                                <th>Fuel Type</th>
                                <th>Kilometer Run</th>
                                <th>Hourly Rate</th>    
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
                                            <td><button className="btn btn-warning"  onClick={() => this.deleteVehicle(vehicle.vehicleId)}>Delete</button></td>
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

export default AllVehicle;
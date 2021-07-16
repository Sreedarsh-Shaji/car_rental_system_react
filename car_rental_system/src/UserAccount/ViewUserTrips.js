import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import { Modal, Button } from "react-bootstrap";

import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

class ViewUserTrips extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            message: null,
            offices: [],
            filteredoffices: [],
            agencies:[],
            pickup:'',
        }
        this.openModal = this.openModal.bind(this);
        this.deleteTrip = this.deleteTrip.bind(this);
        this.getAgencyBasedOnOfficeLocation = this.getAgencyBasedOnOfficeLocation.bind(this);
        this.handleChange =  this.handleChange.bind(this);
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    deleteTrip(id) {
        AuthenticationDataService.deleteTrip(id).
            then(response => {
                alert("Deleted trip")
                AuthenticationDataService.getAllTrips().
                    then(response => {
                        this.setState({ users: response.data })
                        console.log(response.data)
                    })
            })

        //reload table

    }

    handleChange(event)//This is a synthetic event
    {
        
        this.setState({ [event.target.name]: event.target.value });
        if( event.target.name == "pickup")
        {
            this.getAgencyBasedOnOfficeLocation(event.target.value)
        }
        else if(event.target.name == "agency"){
            this.getOfficesBasedOnAgency(event.target.value)
        }
    }

    getAgencyBasedOnOfficeLocation(loc)
    {
        AuthenticationDataService.getAgencyBasesOnOfficeLocation(loc).
            then(response => {
                this.setState({ agencies: response.data })
                console.log(response.data)
            })
    }

    getOfficesBasedOnAgency(loc)
    {
        alert(loc)
        AuthenticationDataService.getOfficeBasedOnAgencyName(loc).
            then(response => {
                this.setState({ filteredoffices: response.data })
                console.log(response.data)
            })
    }

    componentDidMount() { //Called immediately when the component is mounted
        //this.refreshToDos()
        AuthenticationDataService.getAllTrips().
            then(response => {
                this.setState({ users: response.data })
                console.log(response.data)
            })

        //Add the detais of the office locations 
        AuthenticationDataService.getAllOffices().
        then(response => {
            this.setState({ offices: response.data })
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Offices</h3>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">


                            <Button variant="primary" onClick={this.openModal}>
                                ADD Office
                            </Button>
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
                                <tbody>

                                    {
                                        this.state.users.map(
                                            trips =>
                                                trips.active == 1 ?
                                                    <tr key={trips.tripId}>
                                                        <td>{trips.tripId}</td>
                                                        <td>{trips.pickupOfficeLocation}</td>
                                                        <td>{trips.returnOfficeLocation}</td>
                                                        <td>{trips.startDate}</td>
                                                        <td>{trips.endDate}</td>
                                                        <td>{trips.agency.name}</td>
                                                        <td>{trips.user.name}</td>
                                                        <td><button className="btn btn-warning" onClick={() => this.deleteTrip(trips.tripId)}>Delete</button></td>
                                                    </tr> :
                                                    ""

                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>
                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>{this.state.modelAction == "Add" ? "Update the office" : "Add an office"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Start Date</label>
                                    <input type="datetime-local" name="startDate" class="form-control" id="location" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">End Date</label>
                                    <input type="datetime-local" name="endDate" class="form-control" id="location" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone No.</label>
                                    <input type="text" name="phone" class="form-control" id="location" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Pickup Location</label>
                                    <select type="text" name="pickup" class="form-control" onClick={this.handleChange} >
                                    {
                                        this.state.offices.map(
                                            office =>
                                                <option>{office}</option>
                                        )
                                    }
                                    </select>   
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Agency Name</label>
                                    <select type="text" name="agency" class="form-control" id="location" onClick={this.handleChange} >
                                    {
                                        this.state.agencies.map(
                                            agency =>
                                                <option value={agency.agencyId}>{agency.name}</option>
                                        )
                                    }
                                    </select>  
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Drop off location</label>
                                    <select type="text" name="dropoff" class="form-control" id="location" onChange={this.handleChange} >
                                    {
                                        this.state.filteredoffices.map(
                                            ofc =>
                                                <option value={ofc.officeAddress}>{ofc.officeAddress}</option>
                                        )
                                    }
                                    </select>  
                                </div>
                                <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Submit</button>
                            </form>

                        </Modal.Body>
                        {

                            /*<Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal} >Close</Button>
                            </Modal.Footer>*/
                        }
                    </Modal>

                </div>

            </div>


        );
    }
}

export default ViewUserTrips;
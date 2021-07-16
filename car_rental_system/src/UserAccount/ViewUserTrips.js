import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import { Modal, Button } from "react-bootstrap";

import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

class ViewUserTrips extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            message : null
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });


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
                                                <tr key={trips.tripId}>
                                                    <td>{trips.tripId}</td>     
                                                    <td>{trips.pickupOfficeLocation}</td>
                                                    <td>{trips.returnOfficeLocation}</td>
                                                    <td>{trips.startDate}</td>
                                                    <td>{trips.endDate}</td>    
                                                    <td>{trips.agency.name}</td>
                                                    <td>{trips.user.name}</td>
                                                    <td><button className="btn btn-warning" onClick={this.onSubmit}>Delete</button></td>           
                                                </tr>
                                        )
                                    }
                                   
                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>
                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>{this.state.modelAction == "Add" ? "Update the office" : "Add an office" }</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <form>
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Start Date</label>
                                    <input type="date" name="startDate" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">End Date</label>
                                    <input type="date" name="endDate" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone No.</label>
                                    <input type="text" name="phone" class="form-control" id="location" onChange={this.handleChange}/>
                                </div> 
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Agency Name</label>
                                    <input type="" name="agencyName" class="form-control" id="location" onChange={this.handleChange}/>
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
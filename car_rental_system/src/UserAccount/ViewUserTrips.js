import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';



class ViewUserTrips extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            office: [],
            message : null
        }
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getOfficeName = this.getOfficeName.bind(this);
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
        
        AuthenticationDataService.getAllOfficers().
        then( response => { 
            this.setState ({ office : response.data }) 
            console.log( response.data )
            } )   
    }

    getOfficeName(officeId)//Get office name
    {
       
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit(values) {

       // const { history } = this.props;

        let requestBody = {

            agency: AuthenticationService.getLoggedInUser(),
            coordinates : this.state.latittude + "," + this.state.logitude,
            creationDateTime: "2021-07-12T16:04:37.493Z",
            emailId : this.state.email,
            officeAddress:  this.state.location,
            officeAlternatePhone : this.state.alphone,
            officeId : 0,
            officePhone : this.state.phone,
            password: "sample"
    }

        AuthenticationDataService.addOffice(requestBody)
        .then((response) => { 
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Invalid credentials"})
                } 
                else{  
                    alert("Added data successfully");
                    this.setState({message:"Valid credentials"})
                    //history.push('/Agency/Home');
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
            <div>
                <Header/>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Trips</h3>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">

                            
                            <Button variant="primary" onClick={this.openModal}>
                                ADD Trips
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
                            <Modal.Title>Add trip</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <form>
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Start Date</label>
                                    <input type="datetime-local" name="startDate" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">End Date</label>
                                    <input type="datetime-local" name="endDate" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone No.</label>
                                    <input type="text" name="phone" class="form-control" id="location" onChange={this.handleChange}/>
                                </div> 
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Agency Name</label>
                                    <select type="" name="agencyName" class="form-control" id="location" onChange={this.handleChange}>
                                    {this.state.users.map((office => <option key={office.value} value={office.value}>{office.display}</option>))}
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
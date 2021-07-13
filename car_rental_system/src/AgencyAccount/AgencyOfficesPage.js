import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

class AgencyOfficesPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            location : '',
            latittude : '',
            logitude : '',
            address : '',
            email : '',
            phone : '',
            alphone : ''
        };

        this.onSubmit =this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() {
        console.log("Agency component did mount");
    }

    onSubmit(values) {

        const { history } = this.props;

        let requestBody = {

            agency: AuthenticationService.getLoggedInAgency(),
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
    
    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
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
                        <div className="col-2"></div>
                        <div className="col-8"></div>
                        <div className="col-2">
                            <Button variant="primary" onClick={this.openModal}>
                                +
                            </Button>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>
                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add an office" : "Update the office"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location</label>
                                    <input type="text" name="location" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Coordinates</label>
                                    <input type="number" name="latitude"  class="form-control" id="location" placeholder="latitude" onChange={this.handleChange}/>
                                    <input type="number" name="logitude" class="form-control" id="location" placeholder="longitude" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Address</label>
                                    <input type="text" name="address" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Emailid</label>
                                    <input type="text" name="email" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Phone No.</label>
                                    <input type="text" name="phone" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Alternate Phone No.</label>
                                    <input type="text" name="alphone" class="form-control" id="location" onChange={this.handleChange}/>
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
                <Footer />
            </div>
        );
    }
}

export default AgencyOfficesPage;
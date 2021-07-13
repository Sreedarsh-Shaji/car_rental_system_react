import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

class ViewTrips extends Component {

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

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8"></div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trip Start</th>
                                        <th scope="col">Trip End</th>
                                        <th scope="col">Pick Up Office</th>
                                        <th scope="col">Return Office</th>
                                        <th scope="col">Agency</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Delete Trips</th>

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
                        
                    </div>
                    
                </div>
                
                <Footer/>
            </div>
        );
    }
}

export default ViewTrips;
import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

class AllTrips extends Component {

    render() {
        return (
            <>  
            <Header/>        
            <div>
                
                <div className="container">
                <h1>Vehicle</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Trip Id</th>
                                <th>Pickup Office</th>
                                <th>Rating</th>
                                <th>Return Office</th>
                                <th>Review</th>
                                <th>Start Date</th>
                                <th>Agency</th>
                                <th>Vehicle</th>
                                
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
                </div>
            <Footer/>
            </>
        );
    }
}

export default AllTrips;
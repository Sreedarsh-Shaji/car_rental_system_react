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
                        
                        
                        </table>
                </div>
                </div>
            <Footer/>
            </>
        );
    }
}

export default AllTrips;
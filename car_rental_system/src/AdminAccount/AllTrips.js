import React, { Component } from 'react';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';


import moment from 'moment';

class AllTrips extends Component {

    render() {
        return (
            <>  
            <Header/>        
                <div>this is the trip show</div>
            <Footer/>
            </>
        );
    }
}

export default AllTrips;
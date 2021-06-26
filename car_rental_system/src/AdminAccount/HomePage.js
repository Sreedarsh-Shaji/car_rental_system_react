import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                This is the designated admin Home
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
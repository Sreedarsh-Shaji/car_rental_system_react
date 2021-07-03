import React, { Component } from 'react';

class Header extends Component{

    render(){
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><span className="navbar-brand">Car Rental System</span></div>
                    <ul className="navbar-nav">  
                    </ul>
                    <ul  className="navbar-nav navbar-collapse justify-content-end">
                    </ul>
               </nav>
            </header>        
        );
    }

}
export default Header;
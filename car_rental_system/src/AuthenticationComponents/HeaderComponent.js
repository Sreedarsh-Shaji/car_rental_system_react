import React, { Component } from 'react';

class HeaderComponent extends Component{

    
    render(){
    
        return(
            <header>
               <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><span className="navbar-brand">Car Rental System</span></div>
                    <ul class="navbar-nav">
                     
                    </ul>
                    <ul  class="navbar-nav navbar-collapse justify-content-end">
                    </ul>
               </nav>
            </header> 
        );
    }
}

export default HeaderComponent;
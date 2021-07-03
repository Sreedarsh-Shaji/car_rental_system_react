import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class Header extends Component{

    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><span className="navbar-brand">Car Rental System</span></div>

                    


                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                            <HashRouter>  
                                <ul class="navbar-nav">
                                    <li class="nav-item active"><NavLink exact to="/"> Home </NavLink></li>
                                    <li class="nav-item" ><NavLink to ="/about"> About </NavLink></li>
                                    <li class="nav-item"><NavLink to="/contact"> Contact </NavLink></li>
                                    <li class="nav-item"><NavLink to="/login"> Login </NavLink></li>
                                    <li class="nav-item"><NavLink to="/register"> Register </NavLink></li>
                                </ul>  
                            </HashRouter>                        
                    </nav>                  
               </nav>
            </header>        
        );
    }

}
export default Header;
  




  
import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const isAdminLogin = AuthenticationService.isAdminLoggedIn();
        console.log(isAdminLogin);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Dashboard</a></div>
                   <div><input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"/></div>
                   <ul className="navbar-nav">
                       {isAdminLogin && <li><Link to="/welcome/in28minutes"  className="nav-link">Home</Link></li>}
                       {isAdminLogin && <li><Link to="/todos"  className="nav-link">Todo</Link></li>}
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isAdminLogin && <li><Link to="/home" className="nav-link">Logout</Link></li>}
                        {isAdminLogin &&  <li><Link to="/logout" className="nav-link"  onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;
import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';

class Header extends Component {
    render() {
        const isAdminLogin = AuthenticationService.isAdminLoggedIn();
        console.log(isAdminLogin);
    
        return(
            <header>
               <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Dashboard</a></div>
                   <ul class="navbar-nav">
                       {isAdminLogin && <li><Link to="/welcome/in28minutes"  class="nav-link">Home</Link></li>}
                       {isAdminLogin && <li><Link to="/todos"  class="nav-link">Todo</Link></li>}
                   </ul>
                   <ul  class="navbar-nav navbar-collapse justify-content-end">
                        {!isAdminLogin && <li><Link to="/login" class="nav-link">Login</Link></li>}
                        {isAdminLogin &&  <li><Link to="/logout" class="nav-link"  onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;
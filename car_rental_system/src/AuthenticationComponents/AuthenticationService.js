class AuthenticationService{

    registerSuccessfulAdminLogin(username)//Registers admin login
    {
        console.log("Register successful login");
        sessionStorage.setItem('authenticatedAdmin',username);
    }

    isAdminLoggedIn()//Return true if admin is logged in
    { 
        let user = sessionStorage.getItem('authenticatedAdmin');
        return user === null ? false : true ;
    }


    adminLogout()//Removes admin entity
    {
        sessionStorage.removeItem('authenticatedAdmin');
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }

    
    isUserLoggedIn()
    { 
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true ;
    }

     getLoggedinUsername()
     {
         return sessionStorage.getItem('authenticatedUser');;
     }

}

export default new AuthenticationService(); 
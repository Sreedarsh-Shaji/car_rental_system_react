import axios from "axios";

class AuthenticationDataService{
   
    adminLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/admin/adminLogin/${username}/${password}`);
        return ret;
    } 

    getAllusers()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllUser`)
        return users
    }

}

export default new AuthenticationDataService();
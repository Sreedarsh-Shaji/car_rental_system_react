import axios from "axios";

class AuthenticationDataService{
   
    adminLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/admin/adminLogin/${username}/${password}`);
        console.log("Dummy");
        return ret;
    } 

}

export default new AuthenticationDataService();
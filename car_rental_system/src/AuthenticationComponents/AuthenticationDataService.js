import axios from "axios";

class AuthenticationDataService{
   
    adminLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/admin/adminLogin/${username}/${password}`);
        return ret;
    } 

    addOffice(data){
        let ret = axios.post(`http://localhost:8085/api/v1/agency/addOffice`,data);
        return ret;
    } 

    addVehicle(carname,chnumber,ennumber,fueltype,hrrate,regno,kms,office)
    {

        
            let data =
            {
                
                    carName: carname,
                    chassisNumber: chnumber,
                    creationDateTime: "2021-07-13T07:38:48.254Z",
                    currentOffice: office,
                    engineNumber: ennumber,
                    fuelType: fueltype,
                    hourlyRate: hrrate,
                    kmsOperated: 0,
                    manufacturer: "string",
                    registerNumber: regno,
                    status: kms,
                    vehicleId: 0
                  
            }

            let ret = axios.post("http://localhost:8085/api/v1/agency/addVehicle",data)
            return ret;
    }

    agencySignup(data){
        let ret = axios.post(`http://localhost:8085/api/v1/agency/signup/`,data);
        return ret;
    }
    userSignup(data){
        let ret = axios.post(`http://localhost:8085/api/v1/agency/login`,data);
        return ret;
    }

    agencyLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/agency/agencyLogin/${username}/${password}`);
        return ret;
    } 
    userLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/user/userLogin/${username}/${password}`);
        return ret;
    } 

    getAllusers()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllUser`)
        return users
    }

    getAllAgencies()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllAgencies`)
        return users
    }
    getAllOfficers(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllOffices`)
        return users
    }
    getAllTrips(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllTrips`)
        return users
    }
    getAllVehicles(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllVehicles`) 
        return users
    }
    

}

export default new AuthenticationDataService();
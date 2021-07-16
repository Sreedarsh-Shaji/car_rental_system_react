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
        
        let ret = axios.post(`http://localhost:8085/api/v1/agency/agencySignup/`,data);
        return ret;
    }
    userSignup(data){
        let ret = axios.post(`http://localhost:8085/api/v1/user/usersignup`,data);
        return ret;
    }

    agencyLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/agency/agencyLogin/${username}/${password}`);
        return ret;
    } 
    userLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/user/userlogin/${username}/${password}`);
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
        let users = axios.get(`http://localhost:8085/api/v1/user/user_see_all_trips`)
        return users
    }
    getAllVehicles(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllVehicles`) 
        return users
    }
    deleteVehicle(vid){
        let users = axios.delete(`http://localhost:8085/api/v1/admin/vehicle/${vid}`) 
        return users
    }

    deleteTrip(id){
        let users = axios.delete(`http://localhost:8085/api/v1/trips/delete/${id}`)
        return users
    }
    
}

export default new AuthenticationDataService();
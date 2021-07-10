import { Component } from "react";
import Header from "../LandingPage/Header";
import FooterComponent from "./FooterComponent";

class SignUpComponent extends Component{
    render(){
        return(
            <>
                <Header/>
                    <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br/>
                                    <h1 style={{ textAlign: "center" ,color: "#003300"}}> Sign Up </h1>
                                    <br/>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div></div>
                            <div className="row">
                                <div className="col-md-7">
                                    <img src="https://3p6y693soagg24ij033i3rcg-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/541072.jpg" alt="Kia car" />
                                </div>
                                <div className="col-md-5">
                      
                                </div>
                            </div>
                        </div>        

                <FooterComponent/>
            </>
        );
    }
}

export default SignUpComponent;
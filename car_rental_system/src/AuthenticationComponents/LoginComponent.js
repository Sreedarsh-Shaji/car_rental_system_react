import React, { Component } from 'react';

import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import AgencyLogin from './AgencyLogin';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';

class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            usertype: "Admin"
        }

        this.userSelect = this.userSelect.bind(this);
    }


    render() {
        return (
            <>
                <HeaderComponent />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h1 style={{ textAlign: "center" }}>Login  {this.state.usertype}</h1>
                            <br />
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

                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-primary active">
                                    <input type="radio" name="options" id="option1" autocomplete="off" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("Admin")}/> 
                                    Admin
                                </label>
                                <label class="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option2" autocomplete="off"
                                    onClick={() => this.userSelect("Agency")}/> 
                                    Agency
                                </label>
                                <label class="btn btn-primary" style={{ width:"65px" }}>
                                    <input type="radio" name="options" id="option3" autocomplete="off" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("User")}/> 
                                    User
                                </label>
                            </div>

                            <br />

                            <br />

                            {this.state.usertype === "Admin" && <AdminLogin />}
                            {this.state.usertype === "Agency" && <AgencyLogin />}
                            {this.state.usertype === "User" && <UserLogin />}

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

                <FooterComponent />

            </>
        );
    }


    userSelect(user)
    {
        this.setState(prevState => ({
            usertype: user
          }));
    }

}

export default LoginComponent;
import React, { Component } from 'react';

import AdminLogin from './AdminLogin';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';

class LoginComponent extends Component {

    constructor(){
        super();
        this.state={
            usertype : "Admin"
        }
        //this.increment = this.increment.bind(this); 
    }


    render() {
        return (
            <>
                <HeaderComponent />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h1 style={{ textAlign: "center" }}>Login  { this.state.usertype }</h1>
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
                            <img src="https://3p6y693soagg24ij033i3rcg-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/541072.jpg" />   
                        </div>
                        <div className="col-md-5">
                            <br />
                            <AdminLogin />
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
}

export default LoginComponent;
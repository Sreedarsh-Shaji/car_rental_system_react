import React, { Component } from 'react';

class AdminLogin extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <form>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                                <small className="form-text text-muted">Your registered email goes here</small>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <br/>

                            <button type="submit" className="btn btn-success" style={{ width:"100%" }}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;
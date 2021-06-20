import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"

class AdminLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(values) {
        console.log(this.state);
        AuthenticationDataService.adminLogin(this.state.username, this.state.password).
            then((response) => { console.log(response) })
    }


    componentDidMount() {
        console.log("Admin component did mount");
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-6">

                        {this.state.error && <div class="alert alert-danger" role="alert">
                            Invalid credentials
                        </div>}

                    </div>
                </div>

                <div className="row">
                    <div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="username" className="form-control" onChange={this.handleChange}
                                placeholder="Enter email" />
                            <small className="form-text text-muted">Your registered email goes here</small>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange}
                                id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <br />

                        <button type="submit" className="btn btn-success" style={{ width: "100%" }}
                            onClick={this.onSubmit}
                        >Submit</button>

                    </div>
                </div>
            </div>
        );
    }
}



export default AdminLogin;
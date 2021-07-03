import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";

class AgencyOfficesPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {

        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Offices</h3>
                            <br /><br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8"></div>
                        <div className="col-2">
                            <Button variant="primary" onClick={this.openModal}>
                            +
                            </Button>
                        </div>
                    </div>

                    <br/>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>


                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>


                <Footer />
            </div>
        );
    }
}

export default AgencyOfficesPage;
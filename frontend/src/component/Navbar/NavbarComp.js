import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "./nav.css";


export default class NavbarComp extends Component {
    render() {
        return (
                <div>
                    <Navbar bg="primary" variant={"dark"} expand="lg">
                        <Navbar.Brand>TooTasty</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/tootasty/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/tootasty/search">Search</Nav.Link>
                                <Nav.Link as={Link} to="/tootasty/profile">Profile</Nav.Link>
                                <Link className="text-white" to="/tootasty/login"><button className="btn btn-link-white">Log In</button></Link>
                                <Link className="text-white" to="/tootasty/register"><button className="btn btn-outline-white">Sign up</button></Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        )
    }
}
import React from 'react'
import {Button, Form, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom";

class HeaderComponent extends React.Component {
    render = () => {
        return (
            <div className="shadow-sm">
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">Aiwa Applications</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/home">Home</Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavDropdown title="Username" id="basic-nav-dropdown">
                                    <NavDropdown.Item>New Todo</NavDropdown.Item>
                                    <NavDropdown.Item>Ongoing Todos</NavDropdown.Item>
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline pd="sm">
                                <Button variant="outline-info" size="sm">Login</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        )
    }
}

export default HeaderComponent

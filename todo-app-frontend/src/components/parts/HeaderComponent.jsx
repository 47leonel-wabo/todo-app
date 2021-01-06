import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom";

class HeaderComponent extends React.Component {
    render = () => {
        return (
            <div className="shadow-sm">
                <div className="container">
                    <Navbar expand="lg">
                        <Nav><Link className="navbar-brand" to="/">Aiwa Applications</Link></Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/home">Home</Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavDropdown title="Username" id="basic-nav-dropdown">
                                    <Link to="/" className="dropdown-item">New Todo</Link>
                                    <NavDropdown.Item>Ongoing Todos</NavDropdown.Item>
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline pd="sm">
                                <Link to="/login" className="btn btn-outline-info btn-sm">Login</Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        )
    }

    showLoginForm = () => {
        console.log('login pressed!')
    }
}

export default HeaderComponent

import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import {
    faHouseUser,
    faInfoCircle,
    faRunning,
    faSignInAlt,
    faSignOutAlt,
    faTasks
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import AuthenticationService from "../auth/AuthenticationService";

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedUsername: sessionStorage.getItem('authenticateUsername')
        }
    }

    render = () => {
        return (
            <div className="shadow-sm">
                <div className="container">
                    <Navbar expand="lg">
                        <Nav><Link className="navbar-brand" to="/">Aiwa Applications</Link></Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/home">
                                    <FontAwesomeIcon icon={faTasks} style={{margin: "0 2px"}}/>Todos
                                </Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavDropdown title={this.state.loggedUsername === null ?
                                    <span>Unknown</span> : this.state.loggedUsername}
                                             id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faTasks}/> Add Todo
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faRunning}/> Ongoing Todos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faHouseUser}/> Settings
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faInfoCircle}/> Help
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#" onClick={AuthenticationService.logoutFreeData}>
                                        <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline pd="sm">
                                <Link to="/login" className="btn btn-outline-info btn-sm">
                                    <FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        )
    }
}

export default HeaderComponent

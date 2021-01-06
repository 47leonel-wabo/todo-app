import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import {
    faHome,
    faHouseUser,
    faRunning,
    faSignInAlt,
    faSignOutAlt,
    faTasks,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedUsername: 'unknown'
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
                                    <FontAwesomeIcon icon={faHome} style={{margin: "0 2px"}}/>Home
                                </Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="#"><FontAwesomeIcon icon={faUserCircle}/></Link>
                                <NavDropdown title={this.state.loggedUsername} id="basic-nav-dropdown">
                                    <Link to="/" className="dropdown-item">
                                        <FontAwesomeIcon icon={faTasks}/> Add Todo</Link>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faRunning}/> Ongoing Todos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <FontAwesomeIcon icon={faHouseUser}/> Settings
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#">
                                        <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline pd="sm">
                                <Link to="/login" className="btn btn-outline-info btn-sm"><FontAwesomeIcon
                                    icon={faSignInAlt}/> Login</Link>
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

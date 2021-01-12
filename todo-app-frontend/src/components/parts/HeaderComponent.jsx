import React from 'react'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link, withRouter} from "react-router-dom"
import {
    faHouseUser,
    faInfoCircle,
    faRunning,
    faSignInAlt,
    faSignOutAlt,
    faTasks,
    faUserCircle
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

        const isUserLogged = AuthenticationService.isUserLogged()

        return (
            <div className="shadow-sm">
                <div className="container">
                    <Navbar expand="lg">
                        <Nav><Link className="navbar-brand" to="/">Aiwa Applications</Link></Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            {isUserLogged && <Nav className="mr-auto">
                                <Link className="nav-link" to="/home">
                                    <FontAwesomeIcon icon={faTasks} style={{margin: "0 2px"}}/>Todos
                                </Link>
                            </Nav>}

                            <Nav className="ml-auto">
                                {isUserLogged && <NavDropdown title={this.state.loggedUsername ? this.state.loggedUsername
                                    : <FontAwesomeIcon icon={faUserCircle}/>}
                                                              id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => {
                                        this.showTodoCreateForm()
                                    }}>
                                        <FontAwesomeIcon icon={faTasks}/> Add Todo
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="disabled">
                                        <FontAwesomeIcon icon={faRunning}/> Ongoing Todos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="disabled">
                                        <FontAwesomeIcon icon={faHouseUser}/> Settings
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="disabled">
                                        <FontAwesomeIcon icon={faInfoCircle}/> Help
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#" onClick={() => {
                                        AuthenticationService.logoutFreeData()
                                        this.props.history.push('/')
                                        this.updateNavbarState()
                                    }}>
                                        <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>}
                            </Nav>
                            <Nav className="ml-auto">
                                {!isUserLogged && <Link to="/login" className="btn btn-outline-info btn-sm">
                                    <FontAwesomeIcon icon={faSignInAlt}/> Login</Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }

    updateNavbarState = () => {
        this.setState({
            loggedUsername: sessionStorage.getItem('authenticateUsername')
        })
    }

    showTodoCreateForm = () => {
        this.props.history.push('/todo')
    }
}

export default withRouter(HeaderComponent)

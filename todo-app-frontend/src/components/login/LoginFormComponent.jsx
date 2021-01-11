import React from 'react'
import '../../styles/LoginFormComponent.css'
import {Button, Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import AuthenticationService from "../auth/AuthenticationService"

class LoginFormComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            username: 'name',
            password: 'pass',
            badCredentials: false
        }
    }

    render = () => {
        return (
            <div className="container">
                <div className="col-sm-5 m-auto">
                    <h3 className="todoAppHead" style={{marginTop: "32px"}}>Todo Application | Login</h3>
                    {this.state.badCredentials &&
                    <strong style={{color: "red"}}>Incorrect Username and/or Password</strong>}
                    <Form className="col  form-content" style={{marginTop: "32px"}}>
                        <Form.Group htmlFor="username">
                            <Form.Control type="text" name="username" value={this.state.username}
                                          onChange={this.handleChange} required/>
                        </Form.Group>
                        <label htmlFor="password">
                            <Form.Control type="password" name="password" value={this.state.password}
                                          onChange={this.handleChange} required/>
                        </label>
                        <Button variant="outline-primary" block onClick={this.logUser}
                                style={{marginTop: "32px"}}> Login</Button>
                        <div style={{marginTop: "32px"}}>
                            Or
                            <Form.Text>
                                You don't have an account signup <Link to="#">Here</Link>
                            </Form.Text>
                        </div>

                    </Form>
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    logUser = () => {
        if (this.state.username && this.state.password) {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push('/home')
        } else {
            this.setState({badCredentials: true})
        }

    }
}

export default LoginFormComponent

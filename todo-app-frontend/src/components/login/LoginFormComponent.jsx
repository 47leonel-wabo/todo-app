import React from 'react'
import '../../styles/LoginFormComponent.css'
import { Button, Form } from "react-bootstrap"
import {Link} from "react-router-dom";

class LoginFormComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            username: 'name',
            password: 'pass'
        }
    }

    render = () => {
        return (
            <div className="col-4 m-auto">
                <h3 className="todoAppHead" style={{ marginTop: "32px" }}>Todo Application | Login</h3>
                <Form className="col  form-content" style={{ marginTop: "32px" }}>
                    <Form.Group htmlFor="username">
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
                    </Form.Group>
                    <label htmlFor="password">
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    </label>
                    <Button variant="outline-primary" block onClick={this.logUser} style={{ marginTop: "32px" }}> Login</Button>
                    <div style={{ marginTop: "32px" }}>
                        Or
                        <Form.Text>
                            You don't have an account signup <Link to="#">Here</Link>
                        </Form.Text>
                    </div>

                </Form>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    logUser = () => {
        // No form verification done yet
        this.props.history.push('/home')
    }
}

export default LoginFormComponent

import React from 'react'
import '../../styles/LoginFormComponent.css'
import { Button } from "react-bootstrap"

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
            <div className="loginForm">
                <h1 className="todoAppHead">Todo Application | Login</h1>
                <div className="form-content">
                    <label className="username" htmlFor="username">
                        Username
                        <input type="text" id="username" name="username" value={this.state.username}
                               onChange={this.handleChange} required/>
                    </label>
                    <label className="password" htmlFor="password">
                        Password
                        <input type="password" id="password" name="password" value={this.state.password}
                               onChange={this.handleChange} required/>
                    </label>
                    <button className="btn btn-outline-primary" onClick={this.logUser}> Login</button>
                </div>
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

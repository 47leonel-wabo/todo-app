import React from 'react'
import '../../styles/LoginFormComponent.css'

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
                    <button className="loginBtn"> Login</button>
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }
    //
    // handlePassword = (event) => {
    //     this.setState({password: event.target.value})
    // }
}

export default LoginFormComponent

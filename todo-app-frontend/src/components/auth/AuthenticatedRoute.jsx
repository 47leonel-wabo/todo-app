import React from "react"
import {Redirect, Route} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService";

class AuthenticatedRoute extends React.Component {
    render() {
        if (AuthenticationService.isUserLogged()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute

import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Error404Component from "./error/404Component"
import HeaderComponent from "./parts/HeaderComponent"
import FooterComponent from "./parts/FooterComponent"
import WelcomeComponent from "./home/WelcomeComponent"

import 'bootstrap/dist/css/bootstrap.min.css'
import AuthenticatedRoute from "./auth/AuthenticatedRoute"
import TodoComponent from "./parts/TodoComponent"
import TodosListComponent from "./parts/TodosListComponent"

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <BrowserRouter>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}/>
                        <Route path="/login" component={LoginFormComponent}/>
                        <AuthenticatedRoute path="/home" component={TodosListComponent}/>
                        <AuthenticatedRoute path="/todo/:id" component={TodoComponent}/>
                        <Route component={Error404Component}/>
                    </Switch>
                    <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}

export default TodoApp

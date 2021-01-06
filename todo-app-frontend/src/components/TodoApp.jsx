import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent"
import HomeComponent from "./home/HomeComponent"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Error404Component from "./error/404Component"
import HeaderComponent from "./parts/HeaderComponent"
import FooterComponent from "./parts/FooterComponent"
import WelcomeComponent from "./home/WelcomeComponent"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <BrowserRouter>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}/>
                        <Route path="/login" component={LoginFormComponent}/>
                        <Route path="/home" component={HomeComponent}/>
                        <Route component={Error404Component}/>
                    </Switch>
                    <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}

export default TodoApp

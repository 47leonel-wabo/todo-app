import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent"
import HomeComponent from "./home/HomeComponent"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Error404Component from "./error/404Component";

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={LoginFormComponent}/>
                        <Route path="/login" component={LoginFormComponent}/>
                        <Route path="/home" component={HomeComponent}/>
                        <Route component={Error404Component} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default TodoApp

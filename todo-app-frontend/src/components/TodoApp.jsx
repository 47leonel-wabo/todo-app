import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent"
import HomeComponent from "./home/HomeComponent"
import {BrowserRouter, Route} from 'react-router-dom'

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <BrowserRouter>
                    <Route path="/login" component={LoginFormComponent}/>
                    <Route path="/home" component={HomeComponent}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default TodoApp

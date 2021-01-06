import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent";
import HomeComponent from "./home/HomeComponent";

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <h1 className="todoAppHead">Todo Application</h1>
                <LoginFormComponent />
                <HomeComponent />
            </div>
        )
    }
}

export default TodoApp

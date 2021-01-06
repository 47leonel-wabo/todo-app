import React from 'react'
import LoginFormComponent from "./login/LoginFormComponent";

class TodoApp extends React.Component {
    render = () => {
        return (
            <div className="todoApp">
                <h1 className="todoAppHead">Todo Application</h1>
                <LoginFormComponent />
            </div>
        )
    }
}

export default TodoApp

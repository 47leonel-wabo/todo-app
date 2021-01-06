import React from 'react'
import TodosListComponent from "./TodosListComponent";

class HomeComponent extends React.Component{
    render = () => {
        return (
            <div className="todoHome">
                <h1>Home Page</h1>
                <TodosListComponent />
            </div>
        )
    }
}

export default HomeComponent

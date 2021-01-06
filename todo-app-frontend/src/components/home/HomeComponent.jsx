import React from 'react'
import TodosListComponent from "../parts/TodosListComponent";

class HomeComponent extends React.Component{
    render = () => {
        return (
            <div className="todoHome">
                <TodosListComponent />
            </div>
        )
    }
}

export default HomeComponent

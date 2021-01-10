import React from "react"

class TodoComponent extends React.Component{
    render = () => {
        return (
            <div>
                <h1 className="h3 mt-5">Todo Application | Create</h1>
                <span>{this.props.match.params.id}</span>
            </div>
        )
    }
}

export default TodoComponent

import React from 'react'
import {Table} from 'react-bootstrap'
import TodosService from "../../api/todos/TodosService"
import AuthenticationService from "../auth/AuthenticationService"

class TodosListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const userLogged = AuthenticationService.getLoginUsername()
        if (userLogged !== null) {
            TodosService.fetchTodosByUsername(userLogged)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        todos: response.data
                    })
                })
        }
        // Else we can show common todos made
    }

    render = () => {
        return (
            <div className="container" style={{marginTop: "32px"}}>
                <h3>List of Todos</h3>
                <div className="todosTable" style={{marginTop: "32px"}}>
                    <Table bordered hover responsive="lg">
                        <thead>
                        <tr>
                            <th>Done</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Owner</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.dueDate}</td>
                                <td>{todo.owner}</td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default TodosListComponent


import React from 'react'
import {Button, Table} from 'react-bootstrap'
import TodosService from "../../api/todos/TodosService"
import AuthenticationService from "../auth/AuthenticationService"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons"

class TodosListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const userLogged = AuthenticationService.getLoginUsername()
        this.fetchTodosOfCurrentUser(userLogged)
    }

    fetchTodosOfCurrentUser = (user) => {
        if (user !== null) {
            TodosService.fetchTodosByUsername(user)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        todos: response.data
                    })
                })
        }
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
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.dueDate}</td>
                                <td><Button onClick={() => this.deleteTodo(todo.id)}
                                            className="btn-sm btn-warning">
                                    <FontAwesomeIcon icon={faTrashAlt} className="mr-1"/>
                                    Delete </Button></td>
                                <td>
                                    <button onClick={() => this.editTodo(todo.id)}
                                            className="btn-sm btn-outline-info">
                                        <FontAwesomeIcon icon={faEdit} className="mr-1"/>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

    deleteTodo = (todoId) => {
        // console.log(`Deleting...${todoId}`)
        const username = sessionStorage.getItem('authenticateUsername')
        TodosService.removeTodo(username, todoId)
            .then(response => {
                console.log(response.data)
                this.fetchTodosOfCurrentUser(username)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    editTodo = (todoId) => {
        //console.log(`Editing...${todoId}`)
        this.props.history.push(`/todo/${todoId}`)
    }
}

export default TodosListComponent


import React from 'react'
import {Table} from 'react-bootstrap'

class TodosListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                id: 1,
                isDone: false,
                title: 'Learn React',
                description: 'Master frontend technology, before the end of this week.', dueDate: new Date()
            },
                {
                    id: 2,
                    isDone: false,
                    title: 'Become Fullstack',
                    description: 'Route to fullstack job.',
                    dueDate: new Date()
                },
                {
                    id: 3,
                    isDone: false,
                    title: 'Become DevOps',
                    description: 'Route to DevOps job.',
                    dueDate: new Date()
                },
            ]
        }
    }

    render = () => {
        return (
            <div className="container" style={{ marginTop: "32px" }}>
                <h3>List of Todos</h3>
                <div className="todosTable" style={{ marginTop: "32px" }}>
                    <Table bordered hover responsive="lg">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Done</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.isDone.toString()}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.dueDate.toDateString()}</td>
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


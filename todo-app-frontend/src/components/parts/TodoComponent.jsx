import React from "react"
import moment from "moment"
import {ErrorMessage, Field, Form, Formik} from "formik"
import TodosService from "../../api/todos/TodosService";

class TodoComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {
                id: this.props.match.params.id,
                title: '',
                description: '',
                isDone: false,
                owner: sessionStorage.getItem('authenticateUsername'),
                dueDate: ''
            }
        }
    }

    componentDidMount() {
        let username = sessionStorage.getItem('authenticateUsername')
        TodosService.getSpecificTodoByUserAndId(username, this.state.todo.id)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    // Here we spread all the api call data to our local object and format a specific property (dueDate here)
                    todo: {
                        ...response.data,
                        dueDate: moment(response.data.dueDate).format('YYYY-MM-DD')
                    }
                })
            })
    }

    render = () => {

        let {id, title, description, dueDate, done} = this.state.todo
        // let isDone = this.state.todo.done

        return (
            <div className="container">
                <h1 className="h3 mt-5">Todo Application | Create</h1>
                {/*<span>{this.state.todo.dueDate}</span>*/}
                <div className="col-sm-5 m-auto mt-3">
                    <Formik
                        initialValues={{
                            id,
                            title,
                            description,
                            dueDate,
                            done
                        }}
                        validate={this.validateForm}
                        enableReinitialize={true}
                        onSubmit={this.submitTodo}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="title" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="dueDate" component="div" className="alert alert-warning"/>

                                    <fieldset className="form-group">
                                        <Field className="form-control" type="hidden" name="id" readOnly/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="title" placeholder="title"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="description"
                                               placeholder="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="date" name="dueDate"
                                               placeholder="dueDate"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label >
                                            <Field type="checkbox" name="done" />
                                            Done
                                        </label>
                                    </fieldset>
                                    <button type="submit" className="btn btn-outline-primary col">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

    submitTodo = (values) => {
        // console.log('VALUE - SUBMIT...')
        // console.log(values)
        let user = sessionStorage.getItem('authenticateUsername')
        TodosService.updateTodo(user, {...values, owner: user})
            .then(response => {
                this.props.history.push(`/home`)
            })
    }

    validateForm = (values) => {

        let errors = {}

        if (!values.title) {
            errors.title = 'Title should be defined'
        }
        if (!values.description) {
            errors.description = 'Please provide a description'
        }

        if (!moment(values.dueDate).isValid()) {
            errors.dueDate = 'Provide a valid date'
        }
        return errors
    }
}

export default TodoComponent

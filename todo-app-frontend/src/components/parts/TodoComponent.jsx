import React from "react"
import moment from "moment"
import {ErrorMessage, Field, Form, Formik, prepareDataForValidation} from "formik"
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
                dueDate: moment(new Date()).format('YYYY-MM-DD')
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

        let {id, title, description, isDone, owner, dueDate} = this.state.todo

        return (
            <div className="container">
                <h1 className="h3 mt-5">Todo Application | Create</h1>
                <span>{this.state.todo.dueDate}</span>
                <div className="col-sm-5 m-auto mt-3">
                    <Formik
                        initialValues={{
                            title,
                            description,
                            dueDate
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
        console.log(values)
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

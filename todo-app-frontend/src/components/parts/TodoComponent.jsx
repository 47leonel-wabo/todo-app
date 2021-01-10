import React from "react"
import moment from "moment"
import {Field, Form, Formik} from "formik"

class TodoComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {
                id: this.props.match.params.id,
                title: 'Fake todo title',
                description: 'Fake todo description',
                isDone: false,
                owner: sessionStorage.getItem('authenticateUsername'),
                dueDate: moment(new Date()).format('YYYY-MM-DD')
            }
        }
    }

    render = () => {

        let {id, title, description, isDone, owner, dueDate} = this.state.todo

        return (
            <div className="container">
                <h1 className="h3 mt-5">Todo Application | Create</h1>
                <span>{this.state.todo.dueDate}</span>
                <div className="col-sm-6 m-auto">
                    <Formik
                        initialValues={{
                            title,
                            description,
                            dueDate
                        }}
                        onSubmit={this.submitTodo}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label htmlFor="">Title</label>
                                        <Field className="form-control" type="text" name="title"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="">Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="">Due Date</label>
                                        <Field className="form-control" type="date" name="dueDate"/>
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
}

export default TodoComponent

import React from 'react'
import {Link} from "react-router-dom"

import {faCoffee, faHeadphonesAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Button} from "react-bootstrap"
import TodosService from "../../api/todos/TodosService";

class WelcomeComponent extends React.Component {
    render = () => {
        return (
            <div className="mt-lg-5">
                <h3>Welcome</h3>
                <div className="linkToHone">
                    <Link to="/home">Go Home <FontAwesomeIcon icon={faCoffee}/></Link>
                </div>
                <Button className="btn-sm" onClick={this.specialWelcome}><FontAwesomeIcon className="mr-2" icon={faHeadphonesAlt}/>Get
                    Special Welcome</Button>
            </div>
        )
    }

    specialWelcome = () => {
        // HelloService.executeHello()
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        TodosService.fetchAllTodos()
            .then((resp) => {
                console.log(resp.data)
            })
    }
}

export default WelcomeComponent

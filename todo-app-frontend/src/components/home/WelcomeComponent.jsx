import React from 'react'
import {Link} from "react-router-dom"

import {faCoffee, faHeadphonesAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Button} from "react-bootstrap"

class WelcomeComponent extends React.Component {
    render = () => {
        return (
            <div className="welcome">
                <h3>Welcome</h3>
                <div className="linkToHone">
                    <Link to="/home">Go Home <FontAwesomeIcon icon={faCoffee}/></Link>
                </div>
                <Button className="btn-sm" onClick={this.specialWelcome}><FontAwesomeIcon className="mr-2" icon={faHeadphonesAlt}/>Get Special Welcome</Button>
            </div>
        )
    }

    specialWelcome = () => {
        console.log('Special Welcome!')
    }
}

export default WelcomeComponent

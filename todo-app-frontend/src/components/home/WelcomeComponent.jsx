import React from 'react'
import {Link} from "react-router-dom"

import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class WelcomeComponent extends React.Component {
    render = () => {
        return (
            <div className="welcome">
                <h3>Welcome</h3>
                <div className="linkToHone">
                    <Link to="/home">Go Home <FontAwesomeIcon icon={faCoffee}/></Link>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent

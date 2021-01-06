import React from 'react'
import {Link} from "react-router-dom";

class WelcomeComponent extends React.Component{
    render = () => {
        return (
            <div className="welcome">
                <h3>Welcome</h3>
                <div className="linkToHone">
                    <Link to="/home">Go Home</Link>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent

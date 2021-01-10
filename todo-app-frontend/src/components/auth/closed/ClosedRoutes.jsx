import React from "react"
import {Redirect} from 'react-router-dom'

class ClosedRoutes extends React.Component{
    render = () => {
        return (<Redirect to="/home" />)
    }
}

export default ClosedRoutes

import React from 'react'
import {Container, Navbar} from "react-bootstrap";

class FooterComponent extends React.Component {
    render = () => {
        return (
            <div className="footerComponent">
                <Navbar fixed="bottom" expand="lg" variant="light" bg="dark">
                    <Container>
                        <Navbar.Brand style={{color: "white"}}>Aiwa Services &copy;2021</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default FooterComponent

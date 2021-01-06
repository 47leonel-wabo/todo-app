import React from 'react'
import {Container, Navbar} from "react-bootstrap";

class FooterComponent extends React.Component {
    render = () => {
        return (
            <div className="footerComponent">
                <Navbar fixed="bottom" expand="lg" variant="light" bg="dark">
                    <Container>
                        <Navbar.Brand className="text-muted" style={{color: "white", fontSize: "14px"}}>Aiwa Services &copy;2021</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default FooterComponent

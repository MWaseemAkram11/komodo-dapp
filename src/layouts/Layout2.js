import React from "react";
import { Container } from "react-bootstrap";


const Layout2 = (props) => {
    const { children } = props;
    return (
        <div className="main-wrapper">
            <Container fluid>
                {children}
            </Container>
        </div>
    )
}
export default Layout2;
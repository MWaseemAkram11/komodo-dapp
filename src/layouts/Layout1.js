import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/sidebar";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { ENV } from "../config/config";

const Layout1 = (props) => {

    const { children } = props;
    const location = useLocation();
    const pathName = location.pathname;


    // if (!_id && (pathName !== "/" && pathName !== "/communities" && pathName !== "/proposals" && pathName !== "/proposal-vote" && pathName !== "/create-proposal" && pathName !== "/member-request/:slug/:address")) {
    //     console.log("Please connect your wallet first")
    //     return <Navigate to="/" />
    // }

    return (
        <div className="main-wrapper">
            <Header />
            <Container fluid>
                <Row>
                    <Col xl={2} lg={3}>
                        <Sidebar />
                    </Col>
                    <Col xl={10} lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default Layout1;
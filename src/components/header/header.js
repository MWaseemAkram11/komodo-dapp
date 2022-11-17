import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import 'react-bootstrap'
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/komodo.webp'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../../assets/assets'
import { Navbar, Nav, Modal, Dropdown, Row, Col } from 'react-bootstrap';
import { ENV } from "../../config/config";

function Header(props) {

    return (
        <div className='header'>
            <Container fluid>
                <div className='d-flex align-items-center header-flex'>
                    <div className="navbar-section">
                        <Navbar expand="lg">
                            <Container>
                                <div>
                                    <img src={Images.barsIcon} alt='' className='img-fluid' />
                                </div>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto nav-options">
                                        <Nav.Link href="" className="active d-flex align-items-center"><span className="sidebar-icons"><img src={Images.home_icon} alt='' className='black-icon img-fluid' /><img src={Images.home_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Home</span></Nav.Link>
                                        <Nav.Link href="" className="d-flex align-items-center"><span className="sidebar-icons"><img src={Images.chat_icon} alt='' className='black-icon img-fluid' /><img src={Images.chat_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Chat</span></Nav.Link>
                                        <Nav.Link href="" className="d-flex align-items-center"><span className="sidebar-icons"><img src={Images.community_icon} alt='' className='black-icon img-fluid' /><img src={Images.community_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Communities</span></Nav.Link>
                                        <Nav.Link href="" className="d-flex align-items-center"><span className="sidebar-icons"><img src={Images.proposal_icon} alt='' className='black-icon img-fluid' /><img src={Images.proposal_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Proposals</span></Nav.Link>
                                        <Nav.Link href="" className="d-flex align-items-center"><span className="sidebar-icons"><img src={Images.reward_icon} alt='' className='black-icon img-fluid' /><img src={Images.reward_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Reward</span></Nav.Link>
                                        <Nav.Link href="" className="d-flex align-items-center"><span className="sidebar-icons"><img src={Images.economy_icon} alt='' className='black-icon img-fluid' /><img src={Images.economy_icon_1} alt='' className='red-icon img-fluid' /></span> <span className="sidebar-tag">Economy</span></Nav.Link>
                                    </Nav>
                                    <span className="cross-icon"><FontAwesomeIcon icon={faXmark} className="cross-icon-in" /></span>
                                    <div className='nav-logo'>
                                        <img src={Logo} alt='' className="img-fluid" />
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div className='logo'>
                        <a href="/"><img src={Logo} alt='' className="img-fluid" /></a>
                    </div>
                    <div className="second-head">
                        <div className='search-input d-flex align-items-center'>
                            <strong className='overview overview-header'>Overview</strong>
                            <div className="search-bar">
                                <input placeholder='Search' className='seach-input'></input>
                                <img src={Images.seacrhIcon} alt='' className='img-fluid search-icon' />
                                <img src={Images.closeCircle} alt='' className='img-fluid close-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;
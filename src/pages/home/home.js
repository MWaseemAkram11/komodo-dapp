import React, { useState } from 'react';
import "./home.css"
import { ENV } from "../../config/config";
import { Navbar, Nav, Modal, Dropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/komodo.webp'
import CustomizedTables from '../../components/generictable/genericTable';
import { InfinitySpin } from 'react-loader-spinner';

function Home(props) {

    const [daemonConnect, setDaemonConnect] = useState(null);
    const [show, setShow] = useState(false);
    const [isConnect, setIsConnect] = useState(false);
    const [dmnData, setDmnDate] = useState({
        host:"localhost",port:"",user:"",password:""
    });
    const [loader, setLoader] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const daemonConn = async(e) => {
        e.preventDefault();
        console.log(`daemon data -->`, dmnData)
        handleClose();
        const result = await ENV.KomodoRPC(dmnData);
        console.log(`e=resklkll-->`, result)
        if(result){
            setDaemonConnect(result);
            setLoader(false);
        } else{
            alert("Not connected! Something wrong");
            setLoader(false);
        }
    }

    return (
        <>
            <div className='container hdr'>
                <h5>
                    Daemon RPC integeration, click button to interact with the backend running cli daemon
                </h5>
                <button className='button' onClick={handleShow}>
                    Click to connect
                </button>
           </div>
           {
                loader === true ? 
                <div
                    className="w-100 d-flex justify-content-center align-items-center"
                    style={{ height: '20vh' }}>
                    <InfinitySpin width="200" height="800px" color="#1175BC" />
                </div>
                // <HashLoader color="#36d7b7" />
                    :
                <div className='container'>
                    <h3 style={{float:"left"}}>
                        Connected Daemons:
                    </h3>
                    <CustomizedTables data={daemonConnect}/>
                </div>    
           }
           <Modal show={show} onHide={handleClose} className="metamask-modal">
                <span className="modal-cross-icon"><FontAwesomeIcon className="cross-icon-in"/></span>
                <form onSubmit={daemonConn}>
                <Modal.Header closeButton className=' margin-bottom'>
                    <Modal.Title>
                        <div className='modal-logo'>
                            <img src={Logo} alt='' className="img-fluid" />
                        </div>
                    </Modal.Title>  
                </Modal.Header>
                <Modal.Body className="text-center">
                    <span className="modal-head margin-bottom">Connect your Daemon</span>
                    <div className="yellow-div d-flex align-items-center justify-content-between margin-bottom">
                        <span className="div-tag">RPC-Port</span>
                        <input type="text" value={dmnData.port} onChange={(e) => {
                            setDmnDate({
                                ...dmnData,port:e.target.value
                            })
                        }}/>
                        <span className="div-img"><img src="" alt='' className="img-fluid" /></span>
                    </div>
                    <div className="yellow-div d-flex align-items-center justify-content-between margin-bottom">
                        <span className="div-tag">RPC-User</span>
                        <input type="text" value={dmnData.user} onChange={(e) => {
                            setDmnDate({
                                ...dmnData,user:e.target.value
                            })
                        }}/>
                        <span className="div-img"><img src="" alt='' className="img-fluid" /></span>
                    </div>
                    <div className="yellow-div d-flex align-items-center justify-content-between margin-bottom">
                        <span className="div-tag">RPC-Password</span>
                        <input type="text" value={dmnData.password} onChange={(e) => {
                            setDmnDate({
                                ...dmnData,password:e.target.value
                            })
                        }}/>
                        <span className="div-img"><img src="" alt='' className="img-fluid" /></span>
                    </div>
                    <button className='yellow-div' style={{color:"white", fontSize:"bold"}} type="submit" variant="button"><span className="div-tag">Connect</span></button>
                </Modal.Body>
                </form>
            </Modal>
        </>
    );
}

export default Home;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import img from '../../images/man-profile-cartoon_18591-58482.webp';
import { Button, Dropdown, Form, InputGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

function NavComponent() {
    const [show, setShow] = useState(false);
    const { logOut, user } = useFirebase();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className='top sticky-top d-flex align-items-center justify-content-center' expand="lg">
            <Container className='m-0'>
                <Navbar.Brand className="topLeft d-flex align-items-center justify-content-start me-0">
                    <Nav.Link as={Link} to="/home" className="logo d-flex align-items-center">
                        <h3 className='appLogo'>BlogBook<span className='logoDot'>.</span></h3>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="topCenter d-flex justify-content-center mx-auto">
                        <Nav className="topList  m-0 p-0">
                            <Nav.Link as={Link} to="/home" className="topListItem"><li>HOME</li></Nav.Link>
                            <Nav.Link as={Link} to="/about" className="topListItem"><li>ABOUT</li></Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="topListItem"><li>CONTACT</li></Nav.Link>
                            <Nav.Link as={Link} to="/write" className="topListItem"><li>WRITE</li></Nav.Link>
                           
                            <Nav.Link as={Link} to="/register" className="topListItem me-0"><li>REGISTER</li></Nav.Link>
                            {/* <Nav.Link as={Link} to="/logout" onClick={() => logOut()} className="topListItem"><li>LOGOUT</li></Nav.Link> */}

                        </Nav>
                    </div>

                    <div className="topRight d-flex align-items-center justify-content-md-end justify-content-sm-start">
                        {
                            user.auth ?
                                <>
                                    <button className="topListItem me-2">LOGOUT</button>
                                    <img className='topImg me-2'
                                        src={img}
                                        alt=""
                                    />

                                    <p className='mb-0'>{user.displayName}</p>
                                    <Dropdown className="dropDown">
                                        <Dropdown.Toggle className="dropDownBtn" variant="" id="dropdown-basic">

                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                                :  <Nav.Link as={Link} to="/login" className="topListItem">LOGIN</Nav.Link>

                        }

                        <i onClick={handleShow} className="topSearchIcon fa-solid fa-magnifying-glass"></i>

                        <Modal className='d-flex align-items-start' show={show} onHide={handleClose} dialogClassName='modal-90w'>

                            <InputGroup className="p-3">
                                <Form.Control
                                    placeholder="Search by Name or Category"
                                    type='text'
                                    aria-label="Search"
                                />
                                <Button className='searchButton'>
                                    Search
                                </Button>
                            </InputGroup>
                        </Modal>


                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default NavComponent;
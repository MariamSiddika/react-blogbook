import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavComponent.css';
import { Button, Dropdown, Form, InputGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import useFetch from '../../hooks/useFetch';
import { useRef } from 'react';
import axios from "axios";


function NavComponent() {
    const [blogData, setBlogData] = useState(null);
    const [show, setShow] = useState(false);
    const { logOut, user } = useFirebase();
    // const [searchOption, setSearchOption] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data, getData, setDataLoading, patchData, postData, error, loading } = useFetch();
    const searchRef = useRef();
    if (user?.email) {
        getData(`https://blogs-server-ms.onrender.com/api/v1/users?email=${user?.email}`);

    }
    // console.log(data[0]);
    // const searchHandler = (query) => {
    //     if (query) {
    //         // console.log(query)
    //         setSearchOption(query);
    //     }
    //     if (query === "") {
    //         setSearchOption(false);
    //     } 
    // };
    const handleSearch = async () => {
        const searchValue = searchRef.current.value;
        console.log(searchValue);

        // navigate('/allBlogs');
        await axios.get(`https://blogs-server-ms.onrender.com/api/v1/blogs`)
            .then(res => {
                const resData = res.data;
                //    console.log(resData) 
                
                const filteredData = resData?.filter((singleResData) => {
                    //console.log(data.name.toLowerCase());
                    return singleResData?.name?.toLowerCase().includes(searchValue?.toLowerCase());
                });
                setBlogData(filteredData);
                console.log(blogData);

            }).catch(err => {
                console.log(err);
            })
    }
    return (

        <Navbar className='top sticky-top d-flex align-items-center justify-content-center' expand="lg">
            <Container className='m-0'>
                <div className='col-3'>
                    <Navbar.Brand className="topLeft d-flex align-items-center justify-content-start me-0">
                        <Nav.Link as={Link} to="/home" className="logo d-flex align-items-center">
                            <h3 className='appLogo'>BlogBook<span className='logoDot'>.</span></h3>
                        </Nav.Link>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="topCenter  ">
                        <Nav className="topList d-flex justify-content-center align-items-center">
                            <NavLink to="/" style={({ isActive }) => { return { borderBottom: isActive ? "2px solid goldenRod" : "" } }} className="topListItem listmargin" ><li>HOME</li></NavLink>
                            <NavLink to="/about"
                                style={({ isActive }) => { return { borderBottom: isActive ? "2px solid goldenRod" : "" } }}
                                className="topListItem listmargin"><li>ABOUT</li></NavLink>
                            <NavLink to="/contact"
                                style={({ isActive }) => { return { borderBottom: isActive ? "2px solid goldenRod" : "" } }}
                                className="topListItem listmargin"><li>CONTACT</li></NavLink>
                            {
                                user.auth &&
                                <NavLink to="/write" style={({ isActive }) => { return { borderBottom: isActive ? "2px solid goldenRod" : "" } }} className="topListItem"><li>WRITE</li></NavLink>
                                // : 
                                // <Navigate to={'/home'} />

                            }
                            {
                                !user.auth &&
                                <NavLink to="/register" className="topListItem me-0" style={({ isActive }) => { return { borderBottom: isActive ? "2px solid goldenRod" : "" } }}><li>REGISTER</li></NavLink>
                            }


                            {/* <Nav.Link as={Link} to="/logout" onClick={() => logOut()} className="topListItem"><li>LOGOUT</li></Nav.Link> */}

                        </Nav>
                    </div>

                    <div className="topRight d-flex align-items-center justify-content-md-end justify-content-sm-start">
                        {
                            user.auth ?
                                <>
                                    <button onClick={() => logOut()} className=" navLogoutBtn me-3 border-0 ">Logout</button>
                                    {
                                        data[0]?.img
                                            ?
                                            <img className='topImg me-2'
                                                src={data[0]?.img}
                                                alt=""
                                            />
                                            :
                                            <i
                                                className=" fa-regular fa-user me-2"
                                                style={{ fontSize: "30px" }}
                                            ></i>
                                    }
                                    {/* <img className='topImg me-2'
                                        src={img}
                                        alt=""
                                    /> */}

                                    <p className='mb-0'>{data[0]?.name}</p>
                                    <Dropdown className="dropDown">
                                        <Dropdown.Toggle className="dropDownBtn" variant="" id="dropdown-basic">

                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to={`/profile/${data[0]?._id}`}>My Profile</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                                : <NavLink style={{ marginRight: '30px' }} to="/login" className="topListItem"><button className='navLoginBtn  border-0'>Login</button></NavLink>

                        }

                        <i onClick={handleShow} className="topSearchIcon fa-solid fa-magnifying-glass"></i>

                        <Modal className='d-flex align-items-start' show={show} onHide={handleClose} dialogClassName='modal-90w'>

                            <InputGroup className="p-3">
                                <Form.Control
                                    ref={searchRef}
                                    placeholder="Search by Name or Category"
                                    type='text'
                                    aria-label="Search"
                                />
                                <Link className='text-decoration-none' to='/allBlogs' blogState={blogData}>
                                    <Button onClick={handleSearch} className='searchButton'>
                                        Search
                                    </Button></Link>
                                {/* 
                                <Button onClick={handleSearch} className='searchButton'>
                                    Search
                                </Button> */}
                            </InputGroup>
                        </Modal>


                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default NavComponent;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavComponent.css';
import img from '../../images/man-profile-cartoon_18591-58482.webp';
// import logo from '../../images/download.jpg'

function NavComponent() {
    return (
        <Navbar className='top sticky-top d-flex align-items-center' expand="lg">
            <Container>
                <Navbar.Brand className="topLeft d-flex align-items-center justify-content-center" href="#home">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-twitter"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                    <i className="topIcon fa-brands fa-square-pinterest"></i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="topCenter">
                        <Nav className="me-auto topList d-flex justify-content-center m-0 p-0">
                            <Nav.Link as={Link} to="/home" className="topListItem"><li>HOME</li></Nav.Link>
                            <Nav.Link as={Link} to="/about" className="topListItem"><li>ABOUT</li></Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="topListItem"><li>CONTACT</li></Nav.Link>
                            <Nav.Link as={Link} to="/write" className="topListItem"><li>WRITE</li></Nav.Link>
                            <Nav.Link as={Link} to="/login" className="topListItem"><li>LOGIN</li></Nav.Link>
                            <Nav.Link as={Link} to="/register" className="topListItem"><li>REGISTER</li></Nav.Link>
                        </Nav>
                    </div>

                    <div className="topRight d-flex align-items-center justify-content-center">
                        <Link to='settings'><img className='topImg'
                            src={img}
                            alt=""
                        /></Link>
                        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;
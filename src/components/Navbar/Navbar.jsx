import React from 'react';
import './Navbar.css';
import img from '../../images/man-profile-cartoon_18591-58482.webp';
import { Link } from 'react-router-dom';
// import { Link} from 'react-router-dom';


const Navbar = () => {
    const handleSearch = () => {
        
    }
    return (
        <div className='top sticky-top w-100 bg-white'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
            <div className="topCenter">
                <div className="topList">
                    <Link to='/home' className="topListItem">HOME</Link>
                    <Link to='/about' className="topListItem">ABOUT</Link>
                    <Link to='/contact' className="topListItem">CONTACT</Link>
                    <Link to='/write' className="topListItem">WRITE</Link>
                    <Link to='/login' className="topListItem">LOGIN</Link>
                    <Link to='/register' className="topListItem">REGISTER</Link>
                    <Link to='/logout' className="topListItem">LOGOUT</Link>
                </div>
            </div>
            <div className="topRight">
                <Link to='settings'><img className='topImg'
                    src={img}
                    alt=""
                /></Link>
                
                <i onClick={handleSearch} className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default Navbar;
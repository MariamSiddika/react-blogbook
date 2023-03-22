import React from 'react';
import userImg from '../../images/user.jpg'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar m-4 pb-5 d-lg-flex flex-column align-items-center rounded'>
            <div className="sidebarItem d-flex flex-column align-items-center">
                <h4 className="sidebarTitle m-3 p-1 fs-5 text-center fw-bold">ABOUT US</h4>
                <img className='mt-3' src={userImg} alt="" />
                <p className='p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus cum. Maiores, nulla quia voluptatem consequuntur unde mollitia iste!</p>
            </div>
            <div className='sidebarItem d-flex flex-column align-items-center'>
                <h4 className="sidebarTitle m-2 p-1 fs-5 text-center fw-bold">CATEGORIES</h4>
                <ul className="sidebarList mb-5">
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Lifestyle</li>
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Photography</li>
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Sports</li>
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Movie</li>
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Tech</li>
                    <li className="sidebarListItem d-inline-block w-50 mt-2">Food</li>
                </ul>
            </div>
            <div className='sidebarItem d-flex flex-column align-items-center'>
                <h4 className="sidebarTitle m-2 p-1 fs-5 text-center fw-bold">FOLLOW US</h4>
                <div className="sidebarSocial d-flex aligh-items-center justify-content-center mt-2">
                    <i className="sidebarIcon ms-2 fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon ms-2 fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon ms-2 fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon ms-2 fa-brands fa-square-pinterest"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
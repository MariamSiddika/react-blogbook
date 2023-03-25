import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-content py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 sidebarItem">
                            <h4 className="sidebarTitle my-3 py-1 fs-5 text-center fw-bold">ABOUT US</h4>
                            <p className='pt-4 pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellendus cum. Maiores, nulla quia voluptatem consequuntur unde mollitia iste!</p>
                            <p><a href="/about" className="footer-link-more">Learn More</a></p>
                        </div>

                        <div className="col-6 col-lg-3 sidebarItem">
                            <h4 className="sidebarTitle my-3 py-1 fs-5 text-center fw-bold">NAVIGATION</h4>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"><i className="bi bi-chevron-right"></i> Home</a></li>
                                <li><a href="/home"><i className="bi bi-chevron-right"></i> Blog</a></li>
                                <li><a href="/footer"><i className="bi bi-chevron-right"></i> Categories</a></li>
                                <li><a href="/singlePost"><i className="bi bi-chevron-right"></i> Single Post</a></li>
                                <li><a href="/about"><i className="bi bi-chevron-right"></i> About us</a></li>
                                <li><a href="/contact"><i className="bi bi-chevron-right"></i> Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <div className='sidebarItem d-flex flex-column align-items-center'>
                                <h4 className="sidebarTitle my-3 py-1 fs-5 text-center fw-bold">CATEGORIES</h4>
                                <ul className="sidebarList mb-5">
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Lifestyle</li>
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Photography</li>
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Sports</li>
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Movie</li>
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Tech</li>
                                    <li className="sidebarListItem d-inline-block w-50 mt-2">Food</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 ms-0">
                            <div className='sidebarItem d-flex flex-column align-items-center'>
                            <h4 className="sidebarTitle my-3 py-1 fs-5 text-center fw-bold">FOLLOW US</h4>
                            <div className="sidebarSocial d-flex aligh-items-center justify-content-center mt-2">
                                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                                <i className="sidebarIcon ms-2 fa-brands fa-square-twitter"></i>
                                <i className="sidebarIcon ms-2 fa-brands fa-square-instagram"></i>
                                <i className="sidebarIcon ms-2 fa-brands fa-square-pinterest"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
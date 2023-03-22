import React from 'react';
import './Contact.css';
import Lottie from "lottie-react";
import contactImg from '../../images/contact.json';

const Contact = () => {
    return (
        <div className='contact d-lg-flex justify-content-around'>
            <div className='contactAnimation'>
                <Lottie
                    animationData={contactImg}
                // interactivity={interactivity}
                />
            </div>
            <div className="contactDetail d-flex justify-content-between align-items-center pe-5">
                <div className="mt-4">
                    <div className="d-flex pb-3 mt-3">
                        <div>
                            <i className="fas fa-map-marker-alt fs-4 me-5 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold">Address</h4>
                            <p>Mada Center 8th Floor, 379 Hudson St, <br /> New York, NY 10018 US</p>
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <div>
                            <i className="fa-solid fa-phone fs-4 me-5 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold">Lets Talk</h4>
                            <p className="text-success pt-1 pb-1 mb-0">+18001236870</p>
                        </div>
                    </div>
                    <div className="d-flex pb-3">
                        <div>
                            <i className="fas fa-envelope fs-4 me-5 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold">General Support</h4>
                            <p className="text-success">contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
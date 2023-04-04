import React, { useState } from 'react';
import './Settings.css';
import pp from '../../images/man-profile-cartoon_18591-58482.webp';
import { Button, Modal } from 'react-bootstrap';

const Settings = () => {
    const [show, setShow] = useState(false);
    // const [confirm, setConfirm] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleConfirmClose = () => setConfirm(false);
    // const handleConfirmShow = () => setConfirm(true);



    return (
        <div className='settings container w-lg-75'>
            <div className="settingsWrapper p-4">
                <div className="settingsTitle d-flex align-items-center justify-content-between">
                    <span className="settingsUpdateTitle mb-4">Update Your Account</span>
                    <span onClick={handleShow} className="settingsDeleteTitle text-danger">Delete Your Account</span>
                </div>
                <form className='settingsForm d-flex flex-column'>
                    <label className='mb-2' htmlFor="">Profile Picture</label>
                    <div className='settingsPP d-flex align-items-center my-10 mx-0'>
                        <img src={pp} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPpIcon d-flex align-items-center justify-content-center ms-2 fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" name="" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='John Snow' />
                    <label>E-mail</label>
                    <input type="email" placeholder='john@snow.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button type="button" className="settingsSubmit text-white mt-4 btn btn-lg">Update</button>
                </form>

                {/* handle delete modal */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton className='border-0'>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='fs-5'>Are you sure you want to proceed? This action cannot be undone <i className="fa-solid fa-exclamation text-danger fs-4 fw-bold"></i></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ color: 'white', backgroundColor: 'teal' }} variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger">Proceed</Button>
                    </Modal.Footer>
                </Modal>

                {/* handle delete confirm with password */}
                {/* <Modal
                    
                    onHide={handleConfirmClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal> */}

            </div>
        </div >
    );
};

export default Settings;
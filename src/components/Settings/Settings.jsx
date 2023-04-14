import React, { useState } from 'react';
import './Settings.css';
import pp from '../../images/man-profile-cartoon_18591-58482.webp';
import { Button, Form, Modal } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import useFetch from '../../hooks/useFetch';

const Settings = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, updateName } = useFirebase();
    const { data, setDataLoading, postData, error, loading } = useFetch();
    const [imageUpload, setImageUpload] = useState("") || {};

    const handleProfileImage = async (e) => {
        setDataLoading(true);
        const image = e.target.files[0];
        const formData = new FormData();
        formData.set("key", "5ef8b75ebd5911a1ca073db6b222856d");
        formData.append("image", image);

        const imgUpload = await postData("https://api.imgbb.com/1/upload", formData);
        if (imgUpload.status === 200) {
            setDataLoading(false);
            setImageUpload(imgUpload.data.data.url);
            console.log(imageUpload);
        }
    };

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
                        {
                            imageUpload
                                ?
                                <img src={imageUpload? imageUpload : user?.img} alt="" />
                                :
                                <i
                                    className=" fa-regular fa-user"
                                    style={{ fontSize: "35px" }}
                                ></i>
                        }

                        <label htmlFor="fileInput">
                            <i className="settingsPpIcon d-flex align-items-center justify-content-center ms-2 fa-regular fa-circle-user"></i>
                        </label>
                        <input  onChange={handleProfileImage}
                        accept="image/*" type="file" name="" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.displayName} />
                    <label>E-mail</label>
                    <input type="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" placeholder='Enter new password'/>
                    <button type="submit" className="settingsSubmit text-white mt-4 btn btn-lg">Update</button>
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
                        <p style={{ fontSize: "18px" }}>Are you sure you want to proceed? Remember this action cannot be undone <i className="fa-solid fa-exclamation text-danger fw-bold"></i></p>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-danger">Enter Your Password to Proceed</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ color: 'white', backgroundColor: 'teal' }} variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="danger" >Proceed</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div >
    );
};

export default Settings;
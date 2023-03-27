import React from 'react';
import './Settings.css';
import pp from '../../images/man-profile-cartoon_18591-58482.webp';

const Settings = () => {
    return (
        <div className='settings container w-lg-75'>
            <div className="settingsWrapper p-4">
                <div className="settingsTitle d-flex align-items-center justify-content-between">
                    <span className="settingsUpdateTitle mb-4">Update Your Account</span>
                    <span className="settingsDeleteTitle text-danger">Delete Your Account</span>
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
            </div>
            {/* <Sidebar></Sidebar> */}
        </div>
    );
};

export default Settings;
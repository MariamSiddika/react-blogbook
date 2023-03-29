import React from 'react';
import './UseProfile.css';
import pp from '../../images/man-profile-cartoon_18591-58482.webp';
import UserPost from '../UserPost/UserPost';

const UserProfile = () => {
    return (
        <div className='userProfile mt-4 mb-5'>
            <div className="profileInfo d-flex align-items-center justify-content-start shadow">
                <img className='userPp  ms-5' src={pp} alt="" />
                <div className='userInfo  ms-5'>
                    <h4 className='infoName'>Mark David</h4>
                    <div className='d-flex align-items-center justify-content-start'>
                        <i className="fa-solid fa-envelope infoMailIcon me-2"></i>
                        <p className='mb-0 infoMail'>markdavid@gmail.com</p>
                    </div>
                </div>
            </div>
            <h1 className='recentBlog mt-5 ps-5 shadow mb-3'>Your Blogs</h1>
            <div className='container'>
                
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
            </div>
        </div>
    );
};

export default UserProfile;
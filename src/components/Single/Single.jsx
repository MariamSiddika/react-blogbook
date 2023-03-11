import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css'

const Single = () => {
    return (
        <div className='single d-flex'>
            <SinglePost></SinglePost>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Single;
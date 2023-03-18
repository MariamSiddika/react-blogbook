import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='recentBlog mt-5 ps-5 shadow sticky-top'>Recent Blogs</h1>
            <div className='home d-lg-flex'>
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;
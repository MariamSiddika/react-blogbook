import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='recentBlog mt-5 ps-5 shadow sticky-top'>Recent Blogs</h1>
            <div className='home'>
                <Posts></Posts>
            </div>
            <div className="text-center mb-3">
                <Link className='text-decoration-none' to="/home">
                    <button className="btn-lg btn-get-started d-inline-flex align-items-center justify-content-center align-self-center border-0 px-4 py-3 mt-0"><span>See More</span>
                        <i className="fa-solid fa-arrow-right"></i></button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='home d-flex'>
                <Posts></Posts>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;
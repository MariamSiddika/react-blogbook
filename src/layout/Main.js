import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavComponent from '../components/NavComponent/NavComponent';


const Main = () => {
    return (
        <div>
            <NavComponent></NavComponent>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import Nav from '../Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Landing = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='bg-black'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Landing;
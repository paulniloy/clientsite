import React from 'react';
import Nav from '../Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Admincart from '../admincart/Admincart';

const Admin = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='grid grid-cols-2 justify-items-center bg-black'>
                <Admincart></Admincart>
                <div className='min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Admin;
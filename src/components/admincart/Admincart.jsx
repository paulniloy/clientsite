import React from 'react';
import { Link } from 'react-router-dom';

const Admincart = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Link className='btnn rounded-xl' to={"/admin/work"}>Works</Link>
            <Link className='btnn rounded-xl' to={'/admin/blogs'}>Blogs</Link>
            <Link className='btnn rounded-xl' to={'/admin/clientinfo'}>Client Info.</Link>
            <Link className='btnn rounded-xl' to={"/admin/addwork"}>Add-work</Link>
            <Link className='btnn rounded-xl' to={'/admin/addblogs'}>Add-blogs</Link>
        </div>
    );
};

export default Admincart;
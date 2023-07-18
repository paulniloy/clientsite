import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Separateblog = () => {
    const id = useParams();
    const blog = useLoaderData();
    console.log(blog, id);


    return (
        <div className='blackbg'>
            <div className="card p-20 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={blog.image} alt="Shoes" className="rounded-xl w-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl font-bold"><span className='italic'>Blog Title :</span> "{blog.blogName}"</h2>
                    <p className='italic p-20'><span className='italic font-medium text-2xl'>Description : </span><span className=''>{blog.blogDescription}</span></p>
                    <p className='font-bold italic m-10'>Written by : Niloy Paul</p>
                    <Link to={"/blog"} className='btnnn btn'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Separateblog;
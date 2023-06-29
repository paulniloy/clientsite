import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Separatework = () => {
    const id = useParams();
    const work = useLoaderData();
    console.log(work, id);
    return (
        <div className='blackbg'>
            <div className="card md:p-20 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={work.image} alt="Shoes" className="rounded-xl w-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl font-bold"><span className='italic'>Project Title :</span> "{work.projectName}"</h2>
                    <p className='italic p-20'><span className='italic font-medium text-2xl'>Description : </span><span className=''>{work.projectDescription}</span></p>
                    <p className='italic'><span className='italic font-medium text-2xl'>Technologies : </span><span className=''>{work.technologies}</span></p>
                    <p className='font-bold italic m-10'>Project completed by : Niloy Paul</p>
                    <div className=''>
                        <div className='flex md:flex-row flex-col gap-10'>
                            <Link to={work.livesite} className='btn btnnn'>Live website</Link>
                            <Link to={work.github} className='btn btnnn'>Github</Link>
                            <Link to={"/"} className='btn btnnn'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Separatework;
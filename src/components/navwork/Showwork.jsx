import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { useState } from 'react';
import './showwork.css'

const Showwork = () => {
    const [showpic, setshowpic] = useState(false);

    const { data: works = [], refetch } = useQuery({
        queryKey: 'showwork',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/works')
            return result.json();
        }
    })
    return (
        <div className='p-5'>
            <Heading heading={"Projects"} subheading={"MERN Projects"}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10'>
                {
                    works.map(item =>
                        <div data-aox='fade-left'>
                           
                            <div className="card w-full md:min-h-screen blackbg shadow-xl">
                                <figure className="px-10 pt-10 show">
                                    <img src={item.image} alt="Shoes" className="rounded-xl" />
                                    {/* <img className='helo' src="https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.projectName}</h2>
                                    <p className='italic'> <span className='text-xl font-bold'>Description :</span >{item.projectDescription.slice(0,150)}<Link to={`/separatework/${item._id}`}><span className='text-white hover:text-blue-400 transition-all duration-400 ease-in-out font-bold italic'>...see more</span></Link></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Showwork;
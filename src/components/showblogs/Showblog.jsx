import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Heading from '../Heading';
import { Link } from 'react-router-dom';

const Showblog = () => {
    const { data: blogs = [], refetch } = useQuery({
        queryKey: 'works',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/blogs')
            return result.json();
        }
    })
    return (
        <div className='p-1'>
            <Heading heading={"Blogs"} subheading={"Paul's blogs"}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    blogs.map(item =>
                        <div data-aox='fade-left'>
                            <div className="card h-full blackbg lg:card-side p-5 bg-base-100 gap-20 shadow-xl  transition-all duration-1000 rounded-xl ease-in-out hover:bg-[rgb(243,237,233)]">
                            <figure><img className='rounded-xl' src={item.image} alt="Album" /></figure>
                                <div className="card-body transition-all duration-1000 rounded-xl ease-in-out">
                                    <h2 className="text-4xl text-center m-2 font-bold">Title : "{item.blogName}"</h2>
                                    <p className='italic'> <span className='text-xl font-bold'>Description :</span >{item.blogDescription.slice(0,150)}<Link to={`/separateblog/${item._id}`}><span className='text-white hover:text-blue-400 transition-all duration-400 ease-in-out font-bold italic'>...see more</span></Link></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Showblog;
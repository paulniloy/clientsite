import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Blogs = () => {
    const { data: blogs = [], refetch } = useQuery({
        queryKey: 'works',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/blogs')
            return result.json();
        }
    })

    const handledelete = (id) => {
        fetch(`https://portfolioserver-phi.vercel.app/deleteblog/${id}`, {
            method : "DELETE"
        })
        refetch();
    }
    return (
        <div className='grid grid-cols-1'>
            {
                blogs.map(item =>
                    <div data-aox='fade-left'>
                            <figure><img src={item.image} alt="Album" /></figure>
                        <div className="card lg:card-side p-5 blackbg gap-20 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-4xl text-center m-2 font-bold">Blog title : "{item.blogName}"</h2>
                                <p className='italic'> <span className='text-xl font-bold'>Description : </span>{item.blogDescription}</p>
                                <div className="card-actions justify-center mt-5">
                                    <button onClick={()=>handledelete(item._id)} className="btnnn">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Blogs;
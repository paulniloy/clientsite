import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';

const Work = () => {

    const { data: works = [], refetch } = useQuery({
        queryKey: 'works',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/works')
            return result.json();
        }
    })


    const handledelete = (id) => {
        fetch(`https://portfolioserver-phi.vercel.app/deletework/${id}`, {
            method : "DELETE"
        })
        refetch();
    }
    return (
        <div className='grid grid-cols-1'>
            {
                works.map(item =>
                    <div data-aox='fade-left'>
                            <figure><img src={item.image} alt="Album" /></figure>
                        <div className="card lg:card-side p-5 gap-20 shadow-xl">
                            <div className="card-body blackbg">
                                <h2 className="card-title font-bold">{item.projectName}</h2>
                                <p className='italic'>{item.projectDescription}</p>
                                <div className="card-actions justify-center mt-5">
                                    <Link to={item.github}><button className="btnnn">Github</button></Link>
                                    <Link to={item.livesite}><button className="btnnn">Live website</button></Link>
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

export default Work;
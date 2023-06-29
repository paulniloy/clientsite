import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import Tilt from 'react-parallax-tilt';

const Selectedworks = () => {
    const [scale, setScale] = useState(.85);

    const { data: works = [], refetch } = useQuery({
        queryKey: 'selected',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/works')
            return result.json();
        }
    })
    return (
        <div className='grid gap-10 m-5 rounded-xl' data-aos="fade-down">
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* {
                works.slice(0,2).map(item =>
                    <div className='bg-background'>
                            <figure><img className='w-1/2 mx-auto' src={item.image} alt="Album" /></figure>
                        <div className="card lg:card-side max-h-screen bg-gray-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title font-bold">{item.projectName}</h2>
                                <p className='italic'>{item.projectDescription.slice(0,300)}<Link to={"/work"}><span className='text-blue-600'>...see more</span></Link></p>
                                <div className="card-actions justify-end mt-5">
                                    <Link to={item.github}><button className="btn hover:bg-brown btnn">Github</button></Link>
                                    <Link to={item.livesite}><button className="btn hover:bg-brown btnn">Live website</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } */}
                {
                    works.slice(0, 4).map(item =>
                        <SwiperSlide>
                            
                            <div className='blackbg md:h-full transition-all duration-300'>
                            <Tilt transitionSpeed={3000} scale={scale}>

                                <img className='w-1/2 mx-auto rounded-xl m-5' src={item.image} alt="" />
                            </Tilt>
                                <h1 className='font-bold hidden md:block text-xl m-5'><span className='italic font-medium'><span className='invisible md:visible'>Project Name :</span> </span>{item.projectName}</h1>
                                <p className='p-2 mb-10 hidden md:block'><span className='italic font-medium'>Description : </span>{item.projectDescription.slice(0, 100)}<Link to={`/separatework/${item._id}`}><span className='text-white hover:text-blue-400 transition-all duration-400 ease-in-out font-bold italic'>...see more</span></Link></p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Selectedworks;
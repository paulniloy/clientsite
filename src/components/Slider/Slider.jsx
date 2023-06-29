import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import "./slider.css";
import { useQuery } from '@tanstack/react-query';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

const Slider = () => {
    const [scale, setScale] = useState(.85)
    const { data: blogs = [], refetch } = useQuery({
        queryKey: 'sliderblogs',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/blogs')
            return result.json();
        }
    })
    console.log(blogs);
    return (
        <div className='m-5' data-aos="fade-down">
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
                {
                    blogs.slice(0, 4).map(item =>
                        <SwiperSlide className=''>
                            <div className='blackbg md:h-full transition-all duration-300'>
                                <Tilt transitionSpeed={3000} scale={scale}>
                                <img className='w-1/2 mx-auto rounded-xl m-5' src={item.image} alt="" />

                                </Tilt>
                                <h1 className='font-bold hidden md:block text-xl m-5 '><span className='invisible md:visible'>Blog Title :</span> {item.blogName}</h1>
                                <p className='p-5 mb-10 hidden md:block invisible md:visible'>{item.blogDescription.slice(0, 100)}<Link to={`/separateblog/${item._id}`}><span className='text-white hover:text-blue-400 transition-all duration-400 ease-in-out font-bold italic'>...see more</span></Link></p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Slider;
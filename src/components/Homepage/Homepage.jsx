import React from 'react';
import img from "../../assets/image.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Type from '../Type/Type';
import Marquee from 'react-fast-marquee';
import Selectedworks from '../Selected/Selectedworks';
import Heading from '../Heading';
// import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Divider from '../Divider/Divider';
import Contact from '../contact/Contact';
import "./homepage.css"
import react from "../../assets/logos/reactjs.png"
import jwt from "../../assets/logos/jwt.png"
import mongodb from "../../assets/logos/mongodb.png"
import express from "../../assets/logos/express.png"
import nodejs from "../../assets/logos/nodejs.png"
import nextjs from "../../assets/logos/nextjs.png"
import axios from "../../assets/logos/axios.jpeg"
import redux from "../../assets/logos/redux.png"
import tanstack from "../../assets/logos/tanstack.png"
import js from "../../assets/logos/js.png"
import { HashLink as Link } from 'react-router-hash-link';
import { FaArrowCircleUp } from "react-icons/fa";


// 



const Homepage = () => {
    AOS.init();
    return (
        <div className='bg-black'>

            {/* <Marquee className='bg-black text-white italic' speed={80} pauseOnHover={false}>
                    You are welcome to explore my portfolio website and Get ready to explore my creative journey and discover a world of innovative projects. From stunning designs to captivating visuals, this portfolio is a showcase of my passion and dedication. Feel inspired, connect with me, and let's bring your ideas to life!
                </Marquee> */}
            <div id='top' className='bg-cover h-screen bg-center md:bg-cover w-full mb-40 md:h-screen bg-no-repeat  ' style={{ backgroundImage: `linear-gradient(to bottom, black, rgba(255,0,0,0)),URL(${img})` }}>
                <Type></Type>
            </div>
            <div id='work'>
                <Heading heading={'Projects'} subheading={"Popular projects"}></Heading>
                <Selectedworks></Selectedworks>
                <div className='flex justify-center w-60 mx-auto mb-40'>
                    <Link className='btnnn' to={"/work"}>More Projects</Link>
                </div>
            </div>
            <div id='blog'>
                <Heading heading={"Blogs"} subheading={"Popular Blogs"}></Heading>
                <Slider></Slider>
                <div className='flex justify-center w-60 mx-auto mb-40'>
                    <Link className='btnnn' to={"/blog"}>More Blogs</Link>
                </div>
            </div>
            <Heading heading={"Services"} subheading={"Service provide"}></Heading>
            <div className='m-5'>
                <Divider></Divider>
            </div>
            {/* <div className=''>
                <Marquee data-aos='fade-up' className=' p-5 bg-black text-white italic' speed={50} direction='right' pauseOnHover={true}>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={react} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={express} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={mongodb} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={nodejs} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={tanstack} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={axios} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={jwt} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={nextjs} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={redux} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={js} alt="" />
                    </div>
                </Marquee>
            </div> */}
            <div className=''>
                <Heading heading={"Contact"} subheading={"Message me"}></Heading>
                <div className='mt-5'>
                    <Contact></Contact>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>

                <Link smooth className='' to={"#top"}><button className='moveon flex flex-col items-center'><FaArrowCircleUp className='w-5 h-5' />Scroll to top </button></Link>
            </div>
            <div className='mt-40'>
                <Marquee data-aos='fade-up' className=' p-5 bg-black text-white italic' speed={50} pauseOnHover={false}>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={react} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={express} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={mongodb} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={nodejs} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={tanstack} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={axios} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={jwt} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={nextjs} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={redux} alt="" />
                    </div>
                    <div className='image-wrapper'>
                        <img className='w-40 h-20' src={js} alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Homepage;
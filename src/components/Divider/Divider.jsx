import React from 'react';
import { FaCode, FaSeedling, FaMobileAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Divider = () => {
    AOS.init();
    return (
        <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="md:min-h-full transition-all blackbg p-10 rounded-xl duration-500 text-white hover:text-gray-600 ease-in-out hover:-translate-y-6">
                <FaCode className='w-20 h-10 mb-5 mx-auto animate-bounce' />
                <h1 className='text-2xl font-bold mb-5 text-center'>Web Development</h1>
                <p className='text-xl italic text-center'>I will make a website with the use of MERN technology as well as I will provide according to the client pleasures focusing on what the client needs.</p>
            </div>

            <div data-aos="fade-up" className="">
                <div className=" md:min-h-full transition-all blackbg p-10 rounded-xl duration-500 text-white hover:text-gray-600 ease-in-out hover:-translate-y-6">
                    <FaSeedling className='w-20 h-10 mb-5 mx-auto animate-spin' />
                    <h1 className='text-2xl font-bold mb-5 text-center'>Web Design</h1>
                    <p className='text-xl italic text-center'>Web design refers to the process of creating and arranging the visual elements, layout, and overall aesthetics of a website and I will make your website attractive and soothing looking.</p>
                </div>
            </div>

            <div className="">
                <div className=" md:min-h-full transition-all blackbg p-10 rounded-xl duration-500 text-white hover:text-gray-600 ease-in-out hover:-translate-y-6">
                    <FaMobileAlt className='w-20 h-10 mb-5 mx-auto animate-bounce' />
                    <h1 className='text-2xl font-bold mb-5 text-center'>Technologies</h1>
                    <p className='text-xl italic text-center'>I will make sure that your project will be definitely a gamechanging website for you with the use of updated recent technologies.</p>
                </div>
            </div>
        </div>
    );
};

export default Divider;
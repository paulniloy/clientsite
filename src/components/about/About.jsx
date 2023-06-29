import React from 'react';
import image from "../../assets/paul.jpg"
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import wpm from "../../assets//wpm.png";
import LazyLoad from 'react-lazy-load';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';


const About = () => {

    const [scale, setScale] = useState(1.10);

    return (
        <div className='md:p-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <Tilt reset={false} transitionSpeed={3000} scale={scale} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                        <img src={image} className=" transition-all duration-500 ease-in-out max-w-sm rounded-lg shadow-2xl w-40 md:w-full" />
                        
                    </Tilt>
                </LazyLoad>
                    <div className=''>
                        <h1 className="text-5xl font-bold text-white transition-all duration-500 ease-in-out hover:text-gray-400">Mr. Niloy Paul <span className='italic font-normal'>(MERN developer)</span></h1>
                        <p className="m-5 w-9/12 italic font-medium text-white transition-all duration-500 ease-in-out hover:text-gray-400">A MERN stack developer, dedicated learner, coder, Law graduate and a person who is always try to give his best...</p>
                        <div className='gap-5 flex flex-col md:flex-row items-center'>
                            <Link to={'https://github.com/paulniloy'}><button className="md:text-gray-400 hover:text-white transition-all duration-500 ease-in-out"><FaGithub className='w-20 h-10'/></button></Link>
                            <Link to={'https://www.linkedin.com/in/niloypaul00/'}><button className="md:p-5 text-gray-400 hover:text-white transition-all duration-500 ease-in-out"><FaLinkedin className='w-20 h-10'/></button></Link>
                            <Link to={'https://www.facebook.com/niloypaul00/'}><button className="md:p-5 text-gray-400 hover:text-white transition-all duration-500 ease-in-out"><FaFacebook className='w-20 h-10'/></button></Link>
                            <Link to={'https://drive.google.com/file/d/1TIHIqoby1RY_1g6MKRAZKVKiG5KUw-6I/view?usp=drive_link'}><button className="md:p-5 transition-all duration-500 ease-in-out btnnn">Download RESUME/CV</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Heading heading={"Technology Skills"} subheading={"scale out of 100"}></Heading>
            <div className='grid grid-cols-1s md:grid-cols-2 justify-items-center'>
                <div>
                    <h1 className='font-medium text-white hover:text-gray-400 transition-all duration-500 ease-in-out italic'>HTML</h1>
                    <progress className="progress progress-success w-56 bg-white" value="90" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>CSS</h1>
                    <progress className="progress progress-success bg-white w-56" value="85" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Javascript</h1>
                    <progress className="progress progress-success bg-white w-56" value="75" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>React JS</h1>
                    <progress className="progress progress-success bg-white w-56" value="85" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Tailwind CSS</h1>
                    <progress className="progress progress-success bg-white w-56" value="95" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Bootstrap</h1>
                    <progress className="progress progress-success bg-white w-56" value="95" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Express JS</h1>
                    <progress className="progress progress-success bg-white w-56" value="65" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Node JS</h1>
                    <progress className="progress progress-success bg-white w-56" value="60" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>MongoDB</h1>
                    <progress className="progress progress-success bg-white w-56" value="85" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Adobe Illustator</h1>
                    <progress className="progress progress-success bg-white w-56" value="90" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Adobe Premiere Pro</h1>
                    <progress className="progress progress-success bg-white w-56" value="75" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Adobe Photoshop</h1>
                    <progress className="progress progress-success bg-white w-56" value="65" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Adobe Audition</h1>
                    <progress className="progress progress-success bg-white w-56" value="50" max="100"></progress>
                </div>
                <div>
                    <h1 className='font-medium italic text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Adobe After Effects</h1>
                    <progress className="progress progress-success bg-white w-56" value="65" max="100"></progress>
                </div>
            </div>
            <Heading heading={'Typing skills'} subheading={"Extra skills"}></Heading>
            <div>
                <img src={wpm} alt="" />
            </div>
        </div>
    );
};

export default About;
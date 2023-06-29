import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 blackbg">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved to Niloy Paul</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to={'https://www.facebook.com/niloypaul00/'}><FaFacebook  className='w-10 h-7'/></Link>
                    <Link to={'https://github.com/paulniloy'}><FaGithub  className='w-10 h-7'/></Link>
                    <Link to={'https://www.linkedin.com/in/niloypaul00/'}><FaLinkedin  className='w-10 h-7'/></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
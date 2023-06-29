import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';
// import Marquee from "react-fast-marquee";
import "./nav.css";
// import funtion from "../../../funtion";

const Nav = () => {

    
    const [isactive, setisactive] = useState(false);
    const [onload, setonload] = useState(true)
    const handleload=()=>{
        setInterval(() => {
            setonload(!onload)
        }, 2500);
    }



    const handleisactive = () => {
        setisactive(!isactive)
    }

    const handleblur=() =>{
            setisactive(!isactive)
    }

// hello
    const nav = <div className='md:gap-5 h-20 md:h-full grid md:grid-cols-5 my-auto md:bg-black'>
        <Link className='hover:text-gray-400 transition-all duration-300 ease-in-out mx-5 bg-black md:bg-none mt-2 md:mt-0' to={"/"}>Home</Link>
        <Link className='hover:text-gray-400 transition-all duration-300 ease-in-out mx-5 bg-black md:bg-none mt-2 md:mt-0' smooth to={"/work"}>Projects</Link>
        <Link className='hover:text-gray-400 transition-all duration-300 ease-in-out mx-5 bg-black md:bg-none mt-2 md:mt-0' smooth to={"/blog"}>Blogs</Link>
        <Link className='hover:text-gray-400 transition-all duration-300 ease-in-out mx-5 bg-black md:bg-none mt-2 md:mt-0' to={"/about"}>About</Link>
        <Link className='hover:text-gray-400 transition-all duration-300 ease-in-out mx-5 bg-black md:bg-none mt-2 md:mt-0' to={"/hireme"}>Contact</Link>
        {/* {
            isadmin ? <Link className='btnn' to={"/admin"}>Dashboard</Link> : ""
        } */}
    </div>
    // const navtwo = <div className={`flex flex-col absolute mt-10 transition duration-400 ease-in-out ${isactive ? "" : "-left-40 transition duration-300 ease-in-out"}`}>
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/work"}>Projects</Link>
    //     <Link to={"/blog"}>Blogs</Link>
    //     <Link to={"/about"}>About</Link>
    //     <Link to={"/hireme"}>Contact</Link>
    //     {/* {
    //         isadmin ? <Link className='btnn' to={"/admin"}>Dashboard</Link> : ""
    //     } */}
    // </div>

    return (
        <div onLoad={handleload}>
            <div className={`${onload ? "container" : "hidden"}`}>
                <div className="ball"></div>
            </div>
            <div  className="flex justify-between bg-black text-white items-center navbar">
                <div className="">
                    <div onClick={handleisactive} className={`${isactive ? "isactive" : ""} hamburger md:hidden`}>
                        <div className={`bar`}></div>
                    </div>
                    <div className=''>
                        <div className={`fixed gap-5 z-10 bg-black text-gray-400 p-2 rounded-xl flex flex-col absolute mt-12 transition-all md:hidden duration-400 ease-in-out ${isactive ? "block left-0" : "-left-40"}`}>
                            <Link onClick={handleblur}  className='' to={"/"}>Home</Link>
                            <Link onClick={handleblur}  className='' smooth to={"#blog"}>Blogs</Link>
                            <Link onClick={handleblur}  className='' smooth to={"#work"}>Projects</Link>
                            <Link onClick={handleblur}  className='' to={"/about"}>About</Link>
                            <Link onClick={handleblur}  className='' smooth to={"/hireme"}>Contact</Link>
                            {/* {
            isadmin ? <Link className='btnn' to={"/admin"}>Dashboard</Link> : ""
        } */}
                        </div>
                    </div>
                    {/* <div className="dropdown blackbg">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="gap-5 z-10 menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box">
                            <div className='gap-5'>
                                {nav}
                            </div>
                        </ul>
                    </div> */}
                    <div>
                        <img className='w-10 h-10 md:h-20 md:w-20' src={logo} alt="" />
                    </div>
                </div>
                <div className="gap-5  navbar-end invisible md:visible">
                    {nav}
                </div>
            </div>
            {/* <div className='flex justify-between  bg-[rgb(243,237,233)] items-center '>
                <div className='flex gap-10 items-center'>
                    <img className='w-20 h-20 p-4 ' src={logo} alt="logo" />
                </div>
                <div className={`flex flex-col md:flex-row text-font gap-20 mx-20 md:visible`}>
                    <Link className='btnn' to={"/"}>Home</Link>
                    <Link className='btnn' to={"/work"}>Work</Link>
                    <Link className='btnn' to={"/about"}>About</Link>
                    {
                        isadmin ? <Link className='btnn' to={"/admin"}>Dashboard</Link> : ""
                    }
                </div>
                <div>
                    <button onClick={handlesidebar} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
            <div>

            </div> */}
        </div>
    );
};

export default Nav;
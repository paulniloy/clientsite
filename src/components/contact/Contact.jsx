import React, { useRef } from 'react';
// import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2dys9er', 'template_v0k9hqe', form.current, 'VMmt5cfg3vgiAnNWP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     reset,
    //     formState: { errors },
    // } = useForm();

    // const onSubmit = (data) => {
    //     const name = data.name;
    //     const email = data.email;
    //     const phone = data.phone;
    //     const query = data.query;
    //     console.log(name, email, phone, query);
    //     const clientinfo = {
    //         name, email, phone, query
    //     }
    //     fetch("https://portfolioserver-phi.vercel.app/client", {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(clientinfo)
    //     })
    //     reset();
    // }

    return (
        <div className='bg-black text-white '>
            <div className='grid md:grid-cols-2 items-center justify-items-center'>
                <div>
                    <h1 className='mb-10 font-bold text-2xl italic'>Contact info</h1>
                    <div class="flex gap-10 items-center mb-5">
                        <div className='blackbg rounded-xl p-5'>
                            <FaPaperPlane />
                        </div>
                        <div>
                            <p className='text-gray-600 italic text-xl'>Mail Us</p>
                            <p className='font-bold'>niloyp10@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex gap-10 items-center mb-5">
                        <div className='blackbg rounded-xl p-5'>
                            <FaPhone />
                        </div>
                        <div>
                            <p className='text-gray-600 italic text-xl'>Call Us</p>
                            <p className='font-bold'>+880-1758253088</p>
                        </div>
                    </div>
                    <div class="flex gap-10 items-center mb-5">
                        <div className='blackbg rounded-xl p-5'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <p className='text-gray-600 italic text-xl'>Location</p>
                            <p className='font-bold'>niloyp10@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div id='hireme' className='flex flex-col'>
                    <h1 className='mb-10 font-bold text-2xl italic'>Let's work together</h1>
                    {/* <div className="hero blackbg rounded-xl w-9/12 md:w-full">
                        <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    {/* <div className="card flex-shrink-0 shadow-2xl p-0"> */}
                    {/* <div className="card-body "> */}
                    <div>
                        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                            <label className=''>Name</label>
                            <input className='p-2 rounded text-black' placeholder='user_name' type="text" name="user_name" />
                            <label className='mt-5'>Email</label>
                            <input className='p-2 rounded text-black' placeholder='user_email' type="email" name="user_email" />
                            <label className='mt-5'>Message</label>
                            <textarea className='p-5 rounded text-black' placeholder='message' name="message" />
                            <input className='btnnn mt-5'  type="submit" value="Send" />
                        </form>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
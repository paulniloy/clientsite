import React from 'react';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const query = data.query;
        console.log(name, email, phone, query);
        const clientinfo = {
            name, email, phone, query
        }
        fetch("https://portfolioserver-phi.vercel.app/client", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(clientinfo)
        })
        reset();
    }

    return (
        <div className='bg-black text-white min-h-screen'>
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
                <div>
                    <h1 className='mb-10 font-bold text-2xl italic'>Let's work together</h1>
                    {/* <div className="hero blackbg rounded-xl w-9/12 md:w-full">
                        <div className="hero-content flex-col lg:flex-row-reverse"> */}
                            {/* <div className="card flex-shrink-0 shadow-2xl p-0"> */}
                                {/* <div className="card-body "> */}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control mb-5">
                                            <input type="text" {...register("name", { required: true })} placeholder="name*" className="input input-bordered text-black italic" />
                                        </div>
                                        <div className="form-control mb-5">
                                            <input type="text" {...register("email", { required: true })} placeholder="email*" className="input input-bordered text-black italic" />
                                        </div>
                                        <div className="form-control mb-5">
                                            <input type="number" {...register("phone", { required: true })} placeholder="contact number" className="input input-bordered text-black italic" />
                                        </div>
                                        <div className="form-control">
                                            <textarea rows="10" cols="5" type="text" placeholder="query" {...register("query", { required: true })} className="input input-bordered text-black italic" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type='submit' className="btnnn flex items-center gap-2 mx-2">Send<FaPaperPlane  className='w-5 h-10'/></button>
                                        </div>
                                    </form>
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
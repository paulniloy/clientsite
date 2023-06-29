import React from 'react';
import { useForm } from "react-hook-form"

const Addblogs = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const blogName = data.name;
        const blogDescription = data.description;
        const image = data.photo;
        const project = {
            blogName, blogDescription, image
        }
        fetch('https://portfolioserver-phi.vercel.app/addblog',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(project)
        })
        console.log(project);
        reset();
    };
    return (
        <div>
            <div className="hero blackbg rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 shadow-2xl">
                        <div className="card-body w-96">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Blog Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name of blog" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Image</span>
                                    </label>
                                    <input type="url" {...register("photo", { required: true })} placeholder="Image of blog" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" {...register("description", { required: true })} className="input input-bordered p-5" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btnnn">Add Work</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addblogs;
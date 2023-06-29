import React from 'react';
import { useForm } from "react-hook-form"

const Addwork = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const projectName = data.name;
        const projectDescription = data.description;
        const image = data.photo;
        const livesite = data.livesite;
        const github = data.github;
        const technologies = data.tech;
        const project = {
            projectName, projectDescription, image, livesite, github, technologies
        }
        fetch('https://portfolioserver-phi.vercel.app/addwork',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(project)
        })
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
                                        <span className="label-text text-white">Project Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name of project" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Website image</span>
                                    </label>
                                    <input type="url" {...register("photo", { required: true })} placeholder="image url of the project" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Live website link</span>
                                    </label>
                                    <input type="url" {...register("livesite", { required: true })} placeholder="live url of the project" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Github link</span>
                                    </label>
                                    <input type="url" {...register("github", { required: true })} placeholder="Github url of the project" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" {...register("description", { required: true })} className="input input-bordered" />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Technologies</span>
                                    </label>
                                    <input type="text" placeholder="Technologies" {...register("tech", { required: true })} className="input input-bordered" />
                                    
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

export default Addwork;
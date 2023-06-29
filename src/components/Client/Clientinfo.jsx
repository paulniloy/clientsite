import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const Clientinfo = () => {

    const { data: client = [], refetch} = useQuery({
        queryKey: 'client',
        queryFn: async () => {
            const result = await fetch('https://portfolioserver-phi.vercel.app/clientinfo')
            return result.json();
        }
    })
    console.log(client);

    const handledelete = (id) =>{
        fetch(`https://portfolioserver-phi.vercel.app/deleteclient/${id}`,{
            method : "DELETE"
        })
        refetch();
    }


    return (
        <div className=''>
            <div className='flex flex-col gap-5'>
            {
                client.map((info, index) =>
                    <div className='text-white flex gap-10 blackbg p-5 rounded-xl'>
                        <div>
                            {index + 1}
                        </div>
                        <div>
                            <p>{info.name}</p>
                            <p>{info.email}</p>
                            <p>{info.phone}</p>
                        </div>
                        <div>
                            <button onClick={()=>handledelete(info._id)}><FaTimesCircle className='h-10 hover:text-black w-10' /></button>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Clientinfo;
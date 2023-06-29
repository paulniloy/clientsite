import React from 'react';

const Heading = ({heading, subheading}) => {
    return (
        <div className='text-center m-5'>
            <h1 className ='text-2xl font-bold text-white italic'>{heading}</h1>
            <p className ='text-xl italic font-medium text-gray-400'>-----   {subheading}    -----</p>
        </div>
    );
};

export default Heading;
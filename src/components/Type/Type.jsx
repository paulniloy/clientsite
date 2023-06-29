import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
    return (
        <div>
            <div data-aos="fade-up" className='text-center'>
                <h1 className='text-4xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                    {' '}
                    <span className='md:text-6xl md:text-2xl' style={{ color: 'bisque', fontWeight: '400', fontFamily : "times new roman" }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Myself Niloy Paul", 'Coder...', 'MERN Developer...', 'Javascript Developer...']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Type;
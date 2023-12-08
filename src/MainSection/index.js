import React from 'react';
import illustration from '../images/illustration-working.svg';

const MainSection = () => {
    return (
        <section id="main">
            <div className='container flex flex-col-reverse lg:flex-row items-center mx-auto p-6'>
                <div className='flex flex-col space-y-10 text-center lg:text-left mb-44 lg:mt-16 lg:w-1/2 xl:mb-52 '>
                    <h1 className='font-bold text-5xl lg:text-6xl lg:max-w-md '>
                        More than just shorter links
                    </h1>
                    <p className='text-2xl text-gray-400 lg:max-w-md'>
                        Build your brand's recognation and get detailed insights on how your
                        links are performing
                    </p>
                    <div className='mx-auto-3 lg:mx-0 '>
                    <button className='bg-cyan py-5 text-2xl text-white px-10 rounded-full hover:opacity-70'>Get Started</button>
                    </div>
                </div>
                <div className=' mx-auto mb-24'>
                    <img src={illustration} alt='' />
                </div>
            </div>
        </section>
    )
}

export default MainSection;
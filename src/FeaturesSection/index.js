import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';

const FeaturesSection = () => {
    return (
        <section id="features" className='pb-32 bg-gray-100'>
            <div className='container relative flex flex-col space-y-7 items-center px-6 mx-auto md:flex-row
               md:space-x-7 md:space-y-0'>
                <div id="horizontal" className='hidden absolute top-24 left-16 h-3 w-10/12 bg-cyan md:block'></div>
                <div id='vertical' className='block absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden'></div>
                <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full
                    bg-veryDarkViolet '>
                            <img src={brand} alt='' />
                        </div>
                    </div>
                    <h5 className='pt-6 text-xl font-bold text-center capitlize md:text-left'>
                        Brand Recognation
                    </h5>
                    <p className='text-md text-gray-500 text-center md:text-left'>
                        Boost your brand recognation with each click. Generic links don't mean a thing.
                        Brended links help instil confidence in your content.
                    </p>
                </div>
                <div className='relative -bottom-10 mt-24 md:mt-8 flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full
                    bg-veryDarkViolet '>
                            <img src={records} alt='' />
                        </div>
                    </div>
                    <h5 className='pt-6 text-xl font-bold text-center capitlize md:text-left'>
                        Detailed Records
                    </h5>
                    <p className='text-md text-gray-500 text-center md:text-left'>
                        Gain insights into who is clicking your links. Knowing when and
                        where people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className='relative -bottom-20 flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full
                    bg-veryDarkViolet '>
                            <img src={custom} alt='' />
                        </div>
                    </div>
                    <h5 className='pt-6 text-xl font-bold text-center capitlize md:text-left'>
                        Fully Customizable
                    </h5>
                    <p className='text-md text-gray-500 text-center md:text-left'>
                        Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;
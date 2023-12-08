import React from 'react'

const CTASection = () => {
    return (
        <section id="cta" className='py-24 bg-darkViolet'>
            <div className='flex flex-col p-2 space-y-6'>
                <h5 className='mx-auto text-4xl font-bold text-center text-white'>
                    Boost your links today
                </h5>
                <button className='bg-cyan text-white text-2xl mx-auto font-bold py-5 
                rounded-full px-10 hover:bg-cyanLight md:text-base md:py-3 focus:bg-opacity-70'>
                    Get started
                </button>
            </div>
        </section >
    )
}

export default CTASection;
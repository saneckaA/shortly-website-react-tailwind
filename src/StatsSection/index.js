import React from 'react'

const StatsSection = () => {
    return (
        <section id='stats' className='py-24 bg-gray-100'>
            <div className='container mx-auto flex flex-col space-y-4 items-center justify-center'>
                <h3 className='text-5xl font-bold text-center'>Advanced Statistics</h3>
                <p className='text-lg text-gray-500 max-w-md lg:max-w-xl text-center'>
                    Track how your links are performing across the web with our advanced
                    statistics dashboard
                </p>
            </div>
        </section>
    )
}

export default StatsSection;
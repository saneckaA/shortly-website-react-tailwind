import React, { useState } from 'react';
import logo from '../images/logo.svg';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <section id="navigation">
            <nav className='relative container mx-auto p-6'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-20'>
                        <div><img src={logo} alt="" /></div>
                        <div className='hidden font-bold space-x-8 lg:flex'>
                            <a className='text-grayishViolet hover:text-veryDarkViolet' href="#">Features</a>
                            <a className='text-grayishViolet hover:text-veryDarkViolet' href="#">Pricing</a>
                            <a className='text-grayishViolet hover:text-veryDarkViolet' href="#">Resources</a>
                        </div>
                    </div>
                    <div className='hidden space-x-6 items-center font-bold text-grayishViolet lg:flex'>
                        <div className='hover:text-veryDarkViolet'>Login</div>
                        <button className='py-3 px-8 rounded-3xl text-white bg-cyan hover:opacity-70'>Sign Up</button>
                    </div>
                    <div className='md:hidden'>
                        <button id="menu-btn" type='button' onClick={toggleMenu} className={`${isOpen ? 'open' : ""} 
                    z-40 block hamburger md:hidden focus:outline-none`} >
                            <span className='hamburger-top'></span>
                            <span className='hamburger-middle'></span>
                            <span className='hamburger-bottom'></span>
                        </button>
                    </div>
                </div>
            </nav>
            <div id="menu" className='absolute top-20 z-100 right-6 left-6  '>
                <div className={`flex-col bg-darkViolet p-6 items-center justify-center w-full 
                space-y-6 font-bold text-white rounded-sm ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="#" className='hover:text-cyan'>Features</a>
                    <a href="#" className='hover:text-cyan'>Pricing</a>
                    <a href="#" className='hover:text-cyan'>Resources</a>
                    <div className='border-b w-full border-b-gray-300'></div>
                    <div className='hover:text-veryDarkViolet'>Login</div>
                    <button className='py-3 px-8 rounded-3xl text-white bg-cyan hover:opacity-70'>
                        Sign Up
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Navigation;
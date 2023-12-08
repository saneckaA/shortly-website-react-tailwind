import React from 'react';
import logo from '../images/logo.svg';

const Navigation = () => {
    return (
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
            </div>
        </nav>
    )
}

export default Navigation;
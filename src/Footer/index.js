import React from 'react';
import logo from '../images/logo.svg';
import twitter from '../images/icon-twitter.svg';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className='flex flex-col space-y-6 md:flex-row md:space-x-32 md:space-y-0 items-center md:items-start justify-center
     bg-veryDarkViolet py-12 md:py-16 px-6'>
            <img src={logo} alt='' />
            <div className='flex flex-col text-center space-y-10 md:space-y-0 md:text-left md:flex-row md:space-x-20'>
                <div className='flex flex-col space-y-3'>
                    <h3 className='text-white font-bold mb-2'>Features</h3>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Link shortening</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Branded Links</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Analytics</a>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h3 className='text-white font-bold mb-2'>Resources</h3>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Blog</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Developers</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Support</a>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h3 className='text-white font-bold mb-2'>Company</h3>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>About</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Our Team</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Careers</a>
                    <a href='#' className='text-grayishViolet hover:text-cyan'>Contact</a>
                </div>
            </div>
            <div className='flex flex-row space-x-6'>
                <a href="#">
                    <img src={twitter} alt='' className='ficon' />
                </a>
                <a href="#">
                    <img src={facebook} alt='' className='ficon' />
                </a>
                <a href="#">
                    <img src={insta} alt='' className='ficon' />
                </a>
                <a href="#">
                    <img src={pinterest} alt='' className='ficon' />
                </a>
            </div>
        </div>
    )
}

export default Footer;
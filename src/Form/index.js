import React, { useState } from 'react'

const Form = () => {

    const validURL = (str) => {
        const pattern = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[\w-]*)*\/?(\?[^\s]*)?$/i;
        return pattern.test(str);
    };

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        setError(null);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === "") {
            setError("Please enter something!")
        } else if (!validURL(inputValue)) {
            setError("Please enter a valid URL")
        }
    };

    return (
        <section id="form" className='relative bg-gray-100'>
            <div className='max-w-4xl mx-auto flex flex-col space-y-5 items-center p-6'>
                <form
                    onSubmit={onFormSubmit}
                    id='link-form'
                    className='relative flex flex-col w-full space-y-4 md:flex-row 
                   md:space-y-0 md:space-x-3 bg-darkViolet p-10 mt-20 rounded-lg'
                >
                    <input

                        value={inputValue}
                        onChange={onInputChange}
                        placeholder='Shorten a link here'
                        id='link-input'
                        className={`flex-1 rounded-lg border-2 py-2 px-6 text-sm
                       placeholder-yellow-500 focus:outline-none ${error ? "border-red" : ""}`}
                    />
                    <button className='bg-cyan rounded-lg py-3 px-10 text-white hover:bg-cyanLight
                    focus:outline-none lg:py-2'>
                        Shorten It!
                    </button>
                    {error ?
                        <div id='err-msg' className='absolute left-7 bottom-3 text-red 
                    text-sm italic'>{error}</div>
                        : ""
                    }
                </form>
                <div className='w-full flex flex-col space-y-5 '>
                    <div className='flex flex-col space-y-2 lg:space-y-0 items-center lg:flex-row 
                    lg:justify-between lg:space-x-5 p-6 lg:p-4 rounded-md justify-center bg-white'>
                        <div><a href='#' className='font-bold'>https://www.frontendmentor.io</a></div>
                        <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-3  lg:space-y-0 
                        items-center'>
                            <div><a href='#' className='font-bold text-cyan'>https://rel.ink/k4lKyk</a></div>
                            <button className='bg-cyan text-white py-2 px-6 rounded-lg hover:opacity-70'>Copy</button>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 lg:space-y-0 items-center lg:flex-row 
                    lg:justify-between lg:space-x-5 p-6 lg:p-4 rounded-md justify-center bg-white'>
                        <div><a href='#' className='font-bold'>https://twitter.com/frontendmentor</a></div>
                        <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-3  lg:space-y-0 
                        items-center'>
                            <div><a href='#' className='font-bold text-cyan'>https://rel.ink/gxOXp9</a></div>
                            <button className='bg-darkViolet text-white py-2 px-6 rounded-lg hover:opacity-70'>Copy</button>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 lg:space-y-0 items-center lg:flex-row 
                    lg:justify-between lg:space-x-5 p-6 lg:p-4 rounded-md justify-center bg-white'>
                        <div><a href='#' className='font-bold '>https://www.linkedin.com/frontend-mentor</a></div>
                        <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-3  lg:space-y-0 
                        items-center'>
                            <div><a href='#' className='font-bold text-cyan'>https://rel.ink/gob3X9</a></div>
                            <button className='bg-cyan text-white py-2 px-6 rounded-lg hover:opacity-70'>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;
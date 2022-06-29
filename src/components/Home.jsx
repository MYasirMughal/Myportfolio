import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0A192F]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Frans Achmad</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-gray-400'>I'm a React Native Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div>
                <Link to="/work" className='w-[175px] text-white border-2 px-6 py-3 my-2 flex justify-center items-center gap-2 hover:bg-pink-600 hover:border-pink-600 duration-200 hover:gap-5'>View Work <HiArrowNarrowRight /></Link>
            </div>
        </div>

    </div>
  )
}

export default Home
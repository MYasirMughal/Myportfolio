import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0A192F]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'Muhammad Yasir</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-gray-400'>I'm Front End Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>A passionate and detail-oriented front-end developer with a strong background in creating visually appealing and responsive user interfaces. Proficient in HTML, CSS, and JavaScript, with experience using modern front-end frameworks like React, Vue.js, or Angular. Skilled at transforming designs into functional web applications that provide a seamless user experience across devices. Strong understanding of UX/UI principles, version control (Git), and cross-browser compatibility. Continuously learning and keeping up with industry trends to deliver optimized, high-performance web solutions.</p>
         </div>
    </div>
  )
}

export default Home
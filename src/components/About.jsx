import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full px-10'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 md:text-right'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div className=''>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='md:text-right'>
                    <p className='text-4xl font-bold'>Hi. I'm Muhammad Yasir, nice to meet you. Please take a look around</p>
                </div>
                <div className='pb-8 text-justify'>
                    <p className=''>A passionate and detail-oriented front-end developer with a strong background in creating visually appealing and responsive user interfaces. Proficient in HTML, CSS, and JavaScript, with experience using modern front-end frameworks like React, Vue.js, or Angular. Skilled at transforming designs into functional web applications that provide a seamless user experience across devices. Strong understanding of UX/UI principles, version control (Git), and cross-browser compatibility. Continuously learning and keeping up with industry trends to deliver optimized, high-performance web solutions. Collaborative team player with excellent problem-solving abilities.
</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
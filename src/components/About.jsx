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
                    <p className='text-4xl font-bold'>Hi. I'm Frans, nice to meet you. Please take a look around</p>
                </div>
                <div className='pb-8 text-justify'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ratione porro hic consectetur dolores molestias molestiae, delectus culpa qui! Maiores labore iste aliquid veniam modi molestias cum, nesciunt qui quas autem adipisci, debitis soluta quae itaque asperiores? Distinctio non soluta nihil saepe consequatur quo, nemo veniam error officiis in harum?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
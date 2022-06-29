import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
    function gridItem(a, b, c, d) {
        return (
            <div
                style={{backgroundImage: `url(${a})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >

                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3'>
                    <span className='text-2xl font-bold text-white text-center tracking-wider'>
                        {b}
                    </span>
                    <div className='text-center'>
                        <a href={c ? c : '/'}>
                            <button className='w-20 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href={d ? d : '/'}>
                            <button className='w-20 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0A192F] mb-10'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-4'>// Check out some of my favourite projects</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid */}
                {gridItem(
                    "https://repository-images.githubusercontent.com/452623686/9ea14ce5-e13f-43f6-860c-96fdd0df6de2",
                    "Blogshot",
                    "https://blogshot.vercel.app",
                    "https://github.com/fransachmadhw/Blogshot"
                )}
                {gridItem(
                    "https://repository-images.githubusercontent.com/501931143/ed1599a9-2297-40a5-811f-dddf47c24e22",
                    "Trivia React",
                    "https://triviaaa.vercel.app",
                    "https://github.com/fransachmadhw/Trivia-React"
                )}
                {gridItem(
                    "https://repository-images.githubusercontent.com/431815358/fac7e016-1285-4399-afc9-d1f252b28dca",
                    "DreadOut 2 Unofficial Website Remake",
                    "https://dreadout2unofficial.netlify.app/",
                    "https://github.com/fransachmadhw/DreadOut2_Website"
                )}


            </div>
        </div>
    </div>
  )
}

export default Work
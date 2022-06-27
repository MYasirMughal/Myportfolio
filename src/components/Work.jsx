import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
    function gridItem(a, b, c) {
        return (
            <div
                style={{backgroundImage: `url(${a})`}}
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >

                {/* Hover Effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center '>
                        <a href={b ? b : '/'}>
                            <button className='w-20 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href={c ? c : '/'}>
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
                    WorkImg,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}
                {gridItem(
                    realEstate,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}
                {gridItem(
                    WorkImg,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}
                {gridItem(
                    realEstate,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}
                {gridItem(
                    WorkImg,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}
                {gridItem(
                    realEstate,
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx",
                    "https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Skills.jsx"
                )}

            </div>
        </div>
    </div>
  )
}

export default Work
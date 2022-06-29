import React from 'react'
import WorkData from '../workData.js'

const Work = () => {
    const [allWork, setAllWork] = React.useState(WorkData)

    React.useEffect(() => {
        console.log(allWork.length)
    })

    const workElement = allWork.map(work => (
        <div
            style={{backgroundImage: `url(${work.img})`}}
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >

            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                    {work.name}
                </span>
                <div className='text-center'>
                    <a href={work.live ? work.live : '/'}>
                        <button className='w-20 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href={work.code ? work.code : '/'}>
                        <button className='w-20 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    ))

  return (
    <div name='work' className={`${allWork.length > 3 ? 'h-full' : 'h-screen'} w-full text-gray-300 bg-[#0A192F]`}>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className={`${allWork.length > 3 && 'mt-[100px]'} pb-8`}>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-4'>// Check out some of my favourite projects</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[80px]'>
                {workElement}
            </div>
        </div>
    </div>
  )
}

export default Work
import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MongoDB from '../assets/mongo.png';

const Skills = () => {
    function gridItem(a, b) {
        return (
            <div className='pt-6 pb-4 py-4 rounded-lg shadow-none hover:shadow-lg hover:shadow-pink-600 hover:scale-110 duration-500 hover:cursor-pointer'>
                    <img className='w-20 mx-auto' src={a} alt={b} />
                    <p className='mt-4'>{b}</p>
            </div>
        )
    }

  return (
    <div name='skills' className='w-full h-full md:h-screen bg-[#0A192F] text-gray-300 px-4'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='mt-[100px]'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// There are the tech stacks I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {gridItem(HTML, "HTML")}
                {gridItem(CSS, "CSS")}
                {gridItem(JavaScript, "JavaScript")}
                {gridItem(ReactImg, "React")}
                {gridItem(Tailwind, "Tailwind CSS")}
                {gridItem(GitHub, "GitHub")}
                {gridItem(Node, "NodeJS")}
                {gridItem(MongoDB, "MongoDB")}

            </div>
        </div>

    </div>
  )
}

export default Skills
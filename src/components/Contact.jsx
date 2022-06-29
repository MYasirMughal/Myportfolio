import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0A192F] p-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex justify-center w-full h-full'>
        <form action="https://getform.io/f/35f07513-bc15-4c6b-93f9-0a6355bf70ac" method='POST' className='flex flex-col max-w-[600px] w-full mt-12'>
            <div className='pb-8 text-gray-300 '>
                <p className='font-bold text-4xl inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>// Submit the form below</p>
            </div>
            <input className='p-2 bg-gray-300' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-gray-300' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
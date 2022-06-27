import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>

        {/* Logo */}
        <div>
            <img src={Logo} alt="logo" style={{ width: '50px' }} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-indigo-500 to-pink-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Instagram <AiFillInstagram size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Mail <HiOutlineMail size={30} /></a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar
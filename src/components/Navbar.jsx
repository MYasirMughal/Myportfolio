import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>

        {/* Logo */}
        <div>
            {/* <img src={Logo} alt="logo" style={{ width: '50px' }} /> */}
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link to="/skills">
                    Skills
                </Link>
            </li>
           
            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to='/skills'>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to='/work'>
              Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>

       


    </div>
  )
}

export default Navbar
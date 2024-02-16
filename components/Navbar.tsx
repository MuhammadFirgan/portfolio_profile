'use client'
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
    const [ navbarVisible, setNavbarVisible ] = useState(false)
    const handleClick = () => {
        setNavbarVisible(!navbarVisible)
    }
  return (
    <>
        <nav className={`flex flex-col py-4 items-center bg-gray-900 gap-5 h-screen w-[180px] md:flex-row md:min-w-full md:justify-around md:bg-white md:max-h-14 fixed top-0 z-50 ${navbarVisible ? '-left-96 md:left-0' : 'left-0'}`}> 
            <h1 className='text-white text-lg font-bold md:text-gray-900'>Company</h1>
            <ul className='flex flex-col gap-3 text-sm text-white md:text-gray-500  md:flex-row md:gap-5'>
                <li><a href="" className="md:hover:text-gray-900">Home</a></li>
                <li><a href="" className="md:hover:text-gray-900">About</a></li>
                <li><a href="" className="md:hover:text-gray-900">Service</a></li>
                <li><a href="" className="md:hover:text-gray-900">Project</a></li>
                <li><a href="" className="md:hover:text-gray-900">Blog</a></li>
                <li><a href="" className="md:hover:text-gray-900">Support</a></li>
            </ul>
            <ul className='my-8 flex flex-col text-gray-100 md:text-gray-900 gap-3 md:flex-row md:my-0'>
                <li><a href="">Sign In</a></li>
                <li><a href="" className='px-4 py-1 border border-gray-100  hover:bg-gray-100 hover:text-gray-900 md:border-gray-900 md:hover:bg-gray-900 md:hover:text-gray-100'>Sign Up</a></li>
            </ul>
        </nav>
        <FaBarsStaggered size={23} className='fixed right-0 top-0 m-5 hover:cursor-pointer md:hidden' onClick={handleClick} />
    </>
  )
}

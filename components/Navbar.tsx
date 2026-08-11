"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { hrefLink: '/', label: "Home" },
    { hrefLink: '/about', label: "About" },
    { hrefLink: '/Crouses', label: "Courses" },
    { hrefLink: '/contact', label: "Contact" }
  ]

  return (
    <>
      {/* Main Navbar */}
      <div className='fixed lg:mt-10 mt-2 top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 bg-white/90 backdrop-blur-md shadow-md rounded-2xl'>
        <div className='lg:px-10 px-5 py-3 flex justify-between items-center'>
          {/* Logo */}
          <Link href={"/"}>
          <img src="/logo.svg" alt="Logo" className="h-8" />

          </Link>

          
          {/* Desktop Navigation */}
          <div className='lg:flex gap-3 items-center hidden'>
            <nav>
              <ul className='flex gap-5'>
                {links.map((item, index) => (
                  <li key={index} className='font-semibold text-text hover:text-primary transition-colors'>
                    <Link href={item.hrefLink}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop Button */}
          <button className='hidden lg:block bg-primary rounded-2xl text-white text-md lg:px-4 lg:py-3 px-3 py-2 hover:opacity-90 transition-opacity'>
            Enroll Now
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className='lg:hidden text-2xl text-text p-1 focus:outline-none'
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Right Slide-in) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between p-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header Inside Mobile Drawer */}
          <div className='flex justify-between items-center pb-4 border-b border-gray-100'>
            <img src="/logo.svg" alt="Logo" className="h-6" />
            <button 
              onClick={() => setIsOpen(false)}
              className='text-2xl text-gray-600 hover:text-black p-1'
              aria-label="Close Menu"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className='mt-8'>
            <ul className='flex flex-col gap-5'>
              {links.map((item, index) => (
                <li key={index} className='font-medium text-lg text-text border-b border-gray-50 pb-2'>
                  <Link 
                    href={item.hrefLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Action Button */}
        <div className='pt-4'>
          <button 
            className='w-full bg-primary rounded-2xl text-white py-3 text-center font-medium shadow-md'
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
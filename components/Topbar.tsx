import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Topbar = () => {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto text-white lg:block hidden px-10 py-2'>
        <div className='flex justify-between items-center'>
          
          {/* Left Side: Email ya Phone (Optional) */}
          <div className='text-sm'>
            <span><MdEmail className='inline'/> edplus@gmail.com</span>
          </div>

          {/* Right Side: Social Media Icons */}
          <ul className='flex items-center gap-4'>
            <li>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className='hover:text-gray-300 transition-colors'
              >
                <FaFacebookF size={16} />
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className='hover:text-gray-300 transition-colors'
              >
                <FaTwitter size={16} />
              </a>
            </li>
            <li>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className='hover:text-gray-300 transition-colors'
              >
                <FaInstagram size={16} />
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className='hover:text-gray-300 transition-colors'
              >
                <FaLinkedinIn size={16} />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Topbar
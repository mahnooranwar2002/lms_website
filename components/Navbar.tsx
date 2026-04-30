import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:px-15 px-5  py-3 flex justify-between  items-center container mx-auto'>
     <img src="/logo.svg"/>
 <div className='lg:flex gap-3 items-center hidden '>
      <nav className=''>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>about</li>
            <li>Crouses</li>
            <li>Conatact</li>
        </ul>
      
     </nav>

 </div>
       <button className='bg-primary rounded-2xl text-white text-md px-4 py-3'>Enroll Now</button>
    </div>
  )
}

export default Navbar

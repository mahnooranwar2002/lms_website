import React from 'react'

const CardSection = () => {
  return (
    <div className='container mx-auto flex lg:gap-15 gap-5 my-10 flex-row p-5'>
     <div className='bg-primary lg:w-6/12 w-full  py-5 rounded-2xl flex justify-between items-center'>
     <div className='lg:w-8/12 w-full lg:px-8 px-5'>
     <h5 className='text-white font-bold lg:text-2xl  text-lg my-5'>Get Free Courses</h5>
     <p className='text-white lg:text-base text-sm'>Top instructors from around the world teach
millions of student on EduPlus</p>
 <button className='bg-white mt-5 rounded-2xl text-primary text-md px-4 py-3 lg:text-base text-xs'>view All Program</button>
    
     </div>
     <div className='w-6/12 lg:block hidden'><img src="/explore1.png" alt="" className='h-60 lg:block hidden' /></div>

     </div>
       <div className='bg-primary lg:w-6/12 w-full py-5 rounded-2xl flex justify-between items-center'>
     <div className='lg:w-8/12 w-full lg:px-8 px-5 '>
     <h5 className='text-white font-bold lg:text-2xl  text-lg my-5'>Become a Tutor</h5>
     <p className='text-white lg:text-base text-sm'>Top instructors from around the world teach
millions of student on EduPlus</p>
 <button className='bg-white mt-5 rounded-2xl text-primary text-md px-4 py-3 lg:text-base text-xs'>view All Program</button>
    
     </div>
     <div className='w-6/12 lg:block hidden'><img src="/explore2.png" alt="" className='h-60 ' /></div>

     </div>
    </div>
  )
}

export default CardSection

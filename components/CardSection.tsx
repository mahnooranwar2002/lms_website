import React from 'react'

const CardSection = () => {
  return (
    <div className='container mx-auto flex gap-15 my-10 lg:flex-row flex-col p-5'>
     <div className='bg-primary lg:w-6/12 py-5 rounded-2xl flex justify-between items-center'>
     <div className='w-8/12 px-8'>
     <h5 className='text-white font-bold text-2xl my-5'>Get Free Courses</h5>
     <p className='text-white'>Top instructors from around the world teach
millions of student on EduPlus</p>
 <button className='bg-white mt-5 rounded-2xl text-primary text-md px-4 py-3'>view All Program</button>
    
     </div>
     <div className='w-6/12'><img src="/explore1.png" alt="" className='h-60' /></div>

     </div>
       <div className='bg-primary lg:w-6/12 py-5 rounded-2xl flex justify-between items-center'>
     <div className='w-8/12 px-8'>
     <h5 className='text-white font-bold text-2xl my-5'>Become a Tutor</h5>
     <p className='text-white'>Top instructors from around the world teach
millions of student on EduPlus</p>
 <button className='bg-white mt-5 rounded-2xl text-primary text-md px-4 py-3'>view All Program</button>
    
     </div>
     <div className='w-6/12'><img src="/explore2.png" alt="" className='h-60' /></div>

     </div>
    </div>
  )
}

export default CardSection

import Bannar from '@/components/Bannar'
import { locationData } from '@/type/types'
import { Locate, Mail, Map, MapPin, Phone } from 'lucide-react'
import React from 'react'

const datalocationData=[
   {icon:MapPin,
    title:"Location",
    sub:" Karachi Pakiatan"
   },
  
    {icon:Mail ,
    title:"Email",
    sub:"Edplus@gmail.com"
   },
     {icon:Phone,
    title:"Phone",
    sub:"0335069056"
   },
]
const page = () => {
  return (
    <div>
     <Bannar pageTitle="Contact Us" subtitle="Contact"/>
     <section className=' lg:px-15 px-5 flex lg:flex-row flex-col container mx-auto py-20'>
        <div className='md:w-5/12 w-full'>
           <h3 className='text-3xl'>We’re always excited to
hear<br/>
from you!</h3>
 <img src="/titleLink.svg" alt="" className="inline" />
 <ul className='my-10'>
  
   {
  datalocationData.map((item, index) => (
    <div key={index}>
        <li className='boder-2 border-dashed flex gap-3 my-10'>
   
    <span className="inline-block border-2  border-dashed rounded-full border-[#4a34ff] p-3">

  <item.icon className='text-primary'/>
</span>
<div>
    <h3 className='text-xl font-semibold'>{item.title}</h3>
    <p className='text-text'>{item.sub}</p>
</div>
    </li>

    </div>
  ))
}
 </ul>
        </div>
     <div className='md:w-6/12 w-full bg-gray-200 p-10 rounded-3xl flex flex-col gap-5'>
    <h3 className='text-2xl font-semibold text-black'>Get in Touch</h3>
    <p className='text-gray-600'>Feel free to contact with us, we don’t spam your email</p>
    
    <input 
        type="text" 
        className="border-0 border-b-2 w-full border-gray-400 bg-transparent pb-2 placeholder:text-gray-500 focus:border-[#4a34ff] outline-none transition-colors"
        placeholder='Enter Name' 
    />
    <input 
        type="email" 
        className="border-0 border-b-2 w-full border-gray-400 bg-transparent pb-2 placeholder:text-gray-500 focus:border-[#4a34ff] outline-none transition-colors"
        placeholder='Enter Email' 
    />
    <input 
        type="tel" 
        className="border-0 border-b-2 w-full border-gray-400 bg-transparent pb-2 placeholder:text-gray-500 focus:border-[#4a34ff] outline-none transition-colors"
        placeholder='Enter Phone' 
    />
    <textarea 
        rows={3}
        className="border-0 border-b-2 w-full border-gray-400 bg-transparent pb-2 placeholder:text-gray-500 focus:border-[#4a34ff] outline-none transition-colors resize-none" 
        placeholder='Enter message'
    ></textarea>
    
    <button className="mt-4 bg-[#4a34ff] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3a2ad4] transition w-fit">
        Send Message
    </button>
</div>
     </section>
    </div>
  )
}

export default page

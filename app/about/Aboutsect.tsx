import React from 'react'

const Aboutsect = () => {
  return (
    <div className='bg-bannar my-5'>
    <div className='container m-auto lg:gap-4 flex lg:flex-row flex-col lg:h-screen p-10'>
       <div className='lg:w-6/12 w-full relative h-[350px] md:h-[500px] lg:h-[600px]'>
    {/* Pehli Image (Top-Left) */}
    <img 
        src="/about2.jpg" 
        alt="About 1" 
        className='absolute top-0 left-0 rounded-3xl z-10 w-2/3 lg:w-3/4 h-auto shadow-xl' 
    />

    {/* Doosri Image (Bottom-Right) */}
    <img 
        src="/about1.jpg" 
        alt="About 2" 
        className='absolute right-0 bottom-0 rounded-3xl z-20 w-2/3 lg:w-3/4 h-auto shadow-2xl'
    />
</div>
        <div className='lg:w-6/12  p-5 w-full'>
         <span className="text-primary ">
      <img src="/title-icon.svg" className="w-15 inline border p-2 rounded-[45%] border-primary" alt="" /> 
   About Our Edplus
    </span>
    <h2 className="text-black my-2 text-3xl font-bold">We create unique digital media experiences.</h2>
    <img src="/titleLink.svg" alt="" className="inline w-fit" />
       
        <p className='text-text my-4'>At University Edplus, we are driven by the transformative power of education and the limitless potential within each individual. Founded in 1971, we have remained steadfast in our commitment to nurturing intellectual curiosity, promoting academic excellence, cultivating a dynamic campus community.</p>
<ul className='flex mt-10 gap-5'>
    <li> 
        <img src="/1.svg" alt="" />
        <h3 className='font-bold my-2'>
Our Mission</h3>
<p className='text-text'>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p></li>
    <li> 
        <img src="/1.svg" alt="" />
        <h3 className='font-bold my-2'>
Our Mission</h3>
<p className='text-text'>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p></li>
   
</ul>
     <button className='bg-primary mt-10 rounded-2xl text-white text-md px-4 py-3'>view All Program</button>
         </div>
    </div>
 
    </div>
  )
}

export default Aboutsect

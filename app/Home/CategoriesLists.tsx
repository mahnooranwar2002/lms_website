import React from 'react'

const CategoriesLists = () => {
const coursesData = [
  { 
    title: " Web Development", 
    icon: "fa-solid fa-code" 
  },
  { 
    title: "Python for Data Science", 
    icon: "fa-brands fa-python" 
  },
  { 
    title: "UI/UX Design Fundamentals", 
    icon: "fa-solid fa-pen-nib" 
  },
  { 
    title: "Mobile App Development", 
    icon: "fa-solid fa-mobile-screen-button" 
  },

  { 
    title: "Artificial Intelligence", 
    icon: "fa-solid fa-brain" 
  },
  { 
    title: "Cloud Computing with AWS", 
    icon: "fa-solid fa-cloud" 
  },

];
  return (
    <div className='container mx-auto'>
      <ul className='mt-5 flex p-5 justify-center items-center lg:gap-5 gap-3 flex-wrap'>
{
  coursesData.map((i, index) => (
    <li 
      key={index} 
      className='group text-primary flex lg:gap-3 gap-5 hover:bg-primary hover:text-white lg:w-3/12 w-full p-8 border border-[#5555] rounded-2xl transition-all duration-300'
    >
      <i className={i.icon}></i>
      <h4 className='text-[#000] font-bold group-hover:text-white transition-colors'>
        {i.title}
      </h4>
    </li>
  ))
}
      </ul>
      
    </div>
  )
}

export default CategoriesLists

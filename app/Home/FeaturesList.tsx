import { ThumbsUpIcon, User2, UserStar } from 'lucide-react'
import React from 'react'

const FeaturesList = () => {
  const data=[
    {title:"Our Happy Students",
      value:"245K",
      icon:User2
    },
      {title:"Enrolled Learner",
      value:"125K",
      icon:User2
    },
       {title:"Expert Instructor",
      value:"20+",
      icon:UserStar
    },
       {title:"Satisfaction Rate",
      value:"90%",
      icon:ThumbsUpIcon
    }
  
  ]
  return (
    <div className='lg:mt-20 mt-5 flex px-5 flex-row lg:flex-nowrap flex-wrap lg:gap-0 gap-y-4 justify-items-center items-center rounded-2xl py-15 bg-primary container mx-auto'>
    {data.map((r, index) => {
  // Icon ko Capital variable mein assign karein
  const IconComponent = r.icon;

  return (
    <div key={index} className=' lg:w-4/12 w-3/6 flex   gap-5 text-white'>
   
      
      {/* Ab isse as a component use karein */}
      <IconComponent className="lg:w-15 lg:h-16 h-8 w-8 border border-white border-dashed rounded-[45%] lg:p-3 p-1" />
      <div>   <p className='lg:text-3xl text-lg'>{r.value}</p>
      <p className='lg:text-md text-sm '>{r.title}</p></div>
    </div>
  );
})}
    </div>
  )
}

export default FeaturesList

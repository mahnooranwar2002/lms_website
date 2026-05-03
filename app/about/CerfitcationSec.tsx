import React from 'react'

const CerfitcationSec = () => {
    const certificationData=[
        {title:"Skilled Lecturers ",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae corrupti molestias, architecto ",
            img:"/clock.svg"
        }
           ,{title:"Certification Grauntee ",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae corrupti molestias, architecto  ",
            img:"/certificate.svg"
        },   {title:"why study in edPlus ",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae corrupti molestias, architecto  ",
            img:"/graduation-hat.svg"
        }
        ,   {title:"Skilled Lecturers ",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae corrupti molestias, architecto ",
            img:"/teacher.svg"
        }
    ]
  return (
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4 container mx-auto"> 
  {certificationData.map((r, index) => (
    <div key={index} className="rounded-2xl transition-all hover:border-primary text-center border-bannar border-2 p-4 lg:p-8">
      <img src={r.img} alt="" className="inline" />
      <h3 className="text-black font-bold my-3 text-sm lg:text-base">{r.title}</h3>
      <p className="text-text text-xs lg:text-sm mb-2">{r.para}</p>
      <a href="" className='text-primary '>Read more</a>
    </div>
  ))}
</div>
  )
}

export default CerfitcationSec

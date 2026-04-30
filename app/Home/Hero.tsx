import React from 'react'
import { Book, GraduationCap, Star, User } from "lucide-react";
import { BookText } from 'lucide-react';
const Hero = () => {
  return (
    <div>
        <div className="lg:h-screen" id="bannarSec">
        <div className="h-full bg-[#4c34ff4f] px-5">
          <div className="container mx-auto flex lg:flex-row flex-col ">
            <div className="lg:w-6/12 mt-25 w-full">
              <span className="text-white flex items-center justify-center lg:w-2/6 w-3/6 rounded-2xl  py-2 my-5 gap-5 bg-primary">
                <GraduationCap /> Keep Learning
              </span>
              <h3 className="lg:text-7xl text-5xl font-bold text-white">
                Best Online Courses From EduPlus
              </h3>
              <p className="text-white my-5">
                Remember to tailor the section names to fit the specific needs
                and structure of your university website.
              </p>
              <button className="lg:w-2/6 w-3/6  bg-primary rounded-2xl text-white text-md px-4 py-3">
                Explore Crouses
              </button>
            </div>
             <div className="lg:w-6/12 w-full mt-25 w-full flex gap-5 lg:flex-row flex-col">
             <div className=" lg:w-3/6 w-full p-5 ">
           <div className="bg-white rounded-2xl py-10 flex items-center justify-center flex-col">
            <GraduationCap size={50} className="text-primary"/>
            <h5>250 +</h5>
            <h4 className="font-bold text-text">Enrolled Students</h4>
           </div>
            <div className="bg-primary mt-5 text-white rounded-2xl py-10 flex items-center justify-center flex-col">
         <BookText size={50}/>
            <h5>250 +</h5>
            <h4 className="font-bold ">Enrolled Students</h4>
           </div>
             </div>
                 <div className=" lg:w-4/6 lg:block  hidden">
            <div className="h-full bg-white rounded-2xl p-2">
              <img src="/1.jpg" alt="" className="rounded-2xl" />
              <div className="mt-5 px-3">
                <span className="flex gap-2 text-xs text-primary"><Star size={15} className=""/> 3.5</span>
             <h3 className="text-xl font-bold mt-2">The complete guide to build restful API
</h3>
<ul className="flex justify-center items-center gap-5 mt-3">
  <li className="text-sm"><Book size={10} className="inline"/> 250 Lessons</li>
  <li className="text-sm"><User size={10} className="inline"/> 125 students</li>
</ul>
<ul className="flex text-sm justify-center items-center gap-5 mt-3">
 <li className="text-primary font-bold">12000 </li>
 <li className=" flex justify-center items-center "><img src="1.png" alt="" /> By Hamza Ali Shah</li>
</ul>
              </div>
            </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

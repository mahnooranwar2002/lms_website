import React from "react";
import CrousesList from "./CrousesList";

const Crouses = () => {
  return (
    <div>
<section className="grid lg:grid-cols-2 lg:mt-20 mt-8 bg-bannar lg:py-10 p-5 container mx-auto items-center justify-center text-center lg:text-left">
   
  <div className="flex flex-col items-center lg:items-start">
    <span className="text-primary flex items-center gap-2">
      <img src="/title-icon.svg" className="w-15 inline border p-2 rounded-[45%] border-primary" alt="" /> 
      Courses
    </span>
    <h2 className="text-black my-2 text-2xl font-bold">Most Popular Courses</h2>
    <img src="/titleLink.svg" alt="" className="inline w-fit" />
  </div>

  <div className="mt-2 lg:mt-0">
    <ul className="flex gap-5 justify-evenly px-4">
      <li>All Course</li>
    <li>
      Art & Design 
    </li>
    <li>
      Finance
    </li>
    </ul>
  </div>
</section>
    </div>
  );
};

export default Crouses;

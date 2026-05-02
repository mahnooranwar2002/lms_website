import { Book, User } from "lucide-react";
import React from "react";

const CrousesList = () => {
  const coursesData = [
    {
      title: " Web Development",
      icon: "fa-solid fa-code",
    },
    {
      title: "Python for Data Science",
      icon: "fa-brands fa-python",
    },
    {
      title: "UI/UX Design Fundamentals",
      icon: "fa-solid fa-pen-nib",
    },
    {
      title: "Mobile App Development",
      icon: "fa-solid fa-mobile-screen-button",
    },

    {
      title: "Artificial Intelligence",
      icon: "fa-solid fa-brain",
    },
    {
      title: "Cloud Computing with AWS",
      icon: "fa-solid fa-cloud",
    },
  ];
  return (
    <div className="container mb-5 flex lg:flex-row flex-col p-5   justify-center items-center gap-5 mx-auto mt-5">
      <div className="lg:w-4/12 w-full border border-[#dce1f5]  bg-white rounded-2xl lg:p-6  p-4">
        <div className=" relative">
          <span className="absolute left-2 top-4 bg-primary  text-white px-4 py-2 text-sm rounded-2xl ">
            Programming
          </span>
          <img src="/1.jpg" alt="" className="w-full rounded-2xl" />
        </div>
        <div className="px-2 ">
          <h4 className="font-bold text-xl my-5">
            Learn Machine Learning Practically with Python
          </h4>
          <ul className="flex gap-5 my-4">
            <li className="flex gap-3">
              <Book className="text-primary" /> 90 lesson
            </li>
            <li className="flex gap-3">
              <User className="text-primary" /> 40 students
            </li>
          </ul>
          <ul className="border-t border-[#dce1f5] pt-2 items-center flex justify-between">
            <li className="text-primary font-bold"> 4000 Rs/-</li>
            <li className="text-primary font-bold">
              {" "}
              <img src="1.png" alt="" className="inline" /> By Hamza Ali Shah
            </li>
          </ul>
        </div>
      </div>
    <div className="lg:w-4/12 w-full border border-[#dce1f5]  bg-white rounded-2xl lg:p-6  p-4">
        <div className=" relative">
          <span className="absolute left-2 top-4 bg-primary  text-white px-4 py-2 text-sm rounded-2xl ">
            Programming
          </span>
          <img src="/1.jpg" alt="" className="w-full rounded-2xl" />
        </div>
        <div className="px-2 ">
          <h4 className="font-bold text-xl my-5">
            Learn Machine Learning Practically with Python
          </h4>
          <ul className="flex gap-5 my-4">
            <li className="flex gap-3">
              <Book className="text-primary" /> 90 lesson
            </li>
            <li className="flex gap-3">
              <User className="text-primary" /> 40 students
            </li>
          </ul>
          <ul className="border-t border-[#dce1f5] pt-2 items-center flex justify-between">
            <li className="text-primary font-bold"> 4000 Rs/-</li>
            <li className="text-primary font-bold">
              {" "}
              <img src="1.png" alt="" className="inline" /> By Hamza Ali Shah
            </li>
          </ul>
        </div>
      </div>
        <div className="lg:w-4/12 w-full border border-[#dce1f5]  bg-white rounded-2xl lg:p-6  p-4">
        <div className=" relative">
          <span className="absolute left-2 top-4 bg-primary  text-white px-4 py-2 text-sm rounded-2xl ">
            Programming
          </span>
          <img src="/1.jpg" alt="" className="w-full rounded-2xl" />
        </div>
        <div className="px-2 ">
          <h4 className="font-bold text-xl my-5">
            Learn Machine Learning Practically with Python
          </h4>
          <ul className="flex gap-5 my-4">
            <li className="flex gap-3">
              <Book className="text-primary" /> 90 lesson
            </li>
            <li className="flex gap-3">
              <User className="text-primary" /> 40 students
            </li>
          </ul>
          <ul className="border-t border-[#dce1f5] pt-2 items-center flex justify-between">
            <li className="text-primary font-bold"> 4000 Rs/-</li>
            <li className="text-primary font-bold">
              {" "}
              <img src="1.png" alt="" className="inline" /> By Hamza Ali Shah
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CrousesList;

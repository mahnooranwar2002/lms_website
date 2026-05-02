import { Camera, Star } from "lucide-react";
import React from "react";
import CrousesList from "./CrousesList";

const Learning = () => {
  return (
    <div className="container  mx-auto text-center mt-14 lg:p-0 p-5">
      <span className="text-sm text-primary uppercase font-bold">
        Live Class
      </span>

      <h4 className="text-black font-bold text-3xl">
        It's Easy to Start Learning
      </h4>
      <img src="/titleLink.svg" alt="" className="inline" />
      <section className="flex lg:flex-row flex-col container mx-auto my-5 gap-5 ">
        <img src="/2.png" alt="" className="rounded-2xl lg:w-6/12 w-full" />

        <div className="lg:w-6/12 w-full flex flex-col justify-start gap-3 items-start border  border-[#DCE1f5] rounded-2xl p-8 ">
          <span>
            {" "}
            <img src="1.png" alt="" className="inline" /> By Hamza Ali Shah
        
          </span>
          <h3 className="text-black font-bold text-2xl">
            The complete guide to build restful API
          </h3>
          <span className="inline-flex items-center justify-center p-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
            <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
            <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
            <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
            <Star className="size-4 text-[#FF9c00]  fill-[#FF9c00]" />
            <b className="ml-1.5   text-[#FF9c00]  ">4.5</b>
          </span>
          <ul className="flex  gap-5 w-full  items-center">
            <li className=" w-6/12 text-start p-2">
              <span className="font-semibold ">Online Students</span>
              <img src="/avator.png" alt="" className="w-40 mt-2" />
            </li>
            <li className="w-6/12">
              <button className="border-primary w-full border  px-2 lg:px-6 py-3 rounded-2xl text-primary ">
                <Camera className="inline mr-5" />
                Join Now
              </button>
            </li>
          </ul>
         
        </div>
      </section>
    </div>
  );
};

export default Learning;

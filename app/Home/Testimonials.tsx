"use client"; // Sab se upar ye lazmi add karein

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-col lg:p-0 p-5 items-center lg:items-start">
          <span className="text-primary flex items-center gap-2">
            <img
              src="/title-icon.svg"
              className="w-15 inline border p-2 rounded-[45%] border-primary"
              alt=""
            />
            Testimonials
          </span>
          <h2 className="text-black my-2 lg:text-3xl text-lg font-bold">
            People’s Say About Our Edplus
          </h2>
          <img src="/titleLink.svg" alt="" className="inline w-fit" />
        </div>
        <div className="flex  lg:mt-10 mt-5  gap-5 lg:flex-row flex-col p-5">
          <div
            id="box2"
            className="lg:w-4/12 w-full rounded-2xl  overflow-hidden h-64"
          >
            <div className="h-full w-full bg-[#0000006b] flex flex-col items-center justify-center">
              <h4 className="text-center text-2xl text-white font-bold mr-3">
                4.8
              </h4>
              <span className="inline-flex items-center justify-center p-1.5 ">
                <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
                <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
                <Star className="size-4 text-[#FF9c00] fill-[#FF9c00]" />
                <Star className="size-4 text-[#FF9c00]  fill-[#FF9c00]" />
              </span>
              <h4 className="text-center text-2xl text-white font-bold mr-3">
                5 rating
              </h4>
            </div>
          </div>
          <div className=" lg:w-8/12 w-full">
            <Carousel
              showArrows={false}
              autoPlay={true}
              showStatus={false}
              infiniteLoop={true}
              showThumbs={false} // Thumbs aksar design kharab karte hain
            >
              <div className=" flex gap-5 py-10 justify-center items-center h-65 px-5">
                {/* Left Box */}
                <div className="p-7 lg:w-6/12 w-1/2 border rounded-xl h-65   border-[#dce1f5]">
                  {/* justify-between ko hata kar justify-start aur gap use karein */}
                  <div className="flex flex-col gap-5 ">
                    <div>
                      <img
                        src="/1.png"
                        alt="icon"
                        className="h-12 w-auto object-contain inline"
                      />
                      <span className="text-sm mt-3 block font-semibold text-gray-800">
                        {" "}
                        Ali{" "}
                      </span>
                    </div>
                    <p className="text-[#555555]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, molestias.
                    </p>
                  </div>
                </div>

                {/* Right Box */}
                <div className="p-7 w-6/12 border  h-65    rounded-xl  border-[#dce1f5]">
                  {/* justify-between ko hata kar justify-start aur gap use karein */}
                  <div className="flex flex-col gap-5 ">
                    <div>
                      <img
                        src="/1.png"
                        alt="icon"
                        className="h-12 w-auto object-contain inline"
                      />
                      <span className="text-sm flex justify-center  items-center gap-5 font-semibold text-gray-800">
                        {" "}
                        Ali{" "}
                      </span>
                    </div>
                    <p className="text-[#555555]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, molestias.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex gap-5 py-10 justify-center items-center h-65 px-5">
                {/* Left Box */}
                <div className="p-7 w-6/12 border  h-65    rounded-xl  border-[#dce1f5]">
                  {/* justify-between ko hata kar justify-start aur gap use karein */}
                  <div className="flex flex-col gap-5 ">
                    <div>
                      <img
                        src="/1.png"
                        alt="icon"
                        className="h-12 w-auto object-contain inline"
                      />
                      <span className="text-sm flex justify-center  items-center gap-5 font-semibold text-gray-800">
                        {" "}
                        Ali{" "}
                      </span>
                    </div>
                    <p className="text-[#555555]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, molestias.
                    </p>
                  </div>
                </div>

                {/* Right Box */}
                <div className="p-7 w-6/12 border  h-65    rounded-xl  border-[#dce1f5]">
                  {/* justify-between ko hata kar justify-start aur gap use karein */}
                  <div className="flex flex-col gap-5 ">
                    <div>
                      <img
                        src="/1.png"
                        alt="icon"
                        className="h-12 w-auto object-contain inline"
                      />
                      <span className="text-sm flex justify-center  items-center gap-5 font-semibold text-gray-800">
                        {" "}
                        Ali{" "}
                      </span>
                    </div>
                    <p className="text-[#555555]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, molestias.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

// ReactDOM.render wali line delete kar dein

export default Testimonials;

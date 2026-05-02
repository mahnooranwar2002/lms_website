import React from "react";
import FeaturesList from "./FeaturesList";

const About = () => {
  const features = [
    {
      title: "Best Instructors & Courses",
      icon: "fa-solid fa-check",
    },
    {
      title: "Online Courses",
      icon: "fa-solid fa-check",
    },
    {
      title: "Trusted by Students",
      icon: "fa-solid fa-check",
    },
    {
      title: "Live Classes",
      icon: "fa-solid fa-check",
    },
    {
      title: "100% ISO Certified",
      icon: "fa-solid fa-check",
    },
    {
      title: "24 Hours Support",
      icon: "fa-solid fa-check",
    },
  ];
  return (
    <section className="bg-bannar py-20 ">
      <div className="container mx-auto flex gap-10 lg:flex-row flex-col lg:p-0 p-5">
        <div className="lg:w-6/12 w-full relative">
          <img
            src="3.jpg"
            alt=""
            className="rounded-[250] h-150"
            height={100}
          />
          <img
            src="4.jpg"
            alt=""
            className="rounded-[250] h-150 border-10 border-white absolute top-10 lg:left-39 left-20"
          />
        </div>
        <div className="lg:w-6/12  p-5 w-full">
          <h3 className="font-bold text-primary text-xl">
            <img src="/title-icon.svg" alt="" height={40} className="inline" />
            About Our Edplus
          </h3>
          <h3 className="text-black font-bold lg:text-4xl  text-2xl my-2">
            We create unique digital media experiences
          </h3>
          <p className="text-[#555555] mt-4">
            At University Edplus, we are driven by the transformative power of
            education and the limitless potential within each individual.
            Founded in 1971, we have remained steadfast in our commitment to
            nurturing intellectual curiosity, promoting academic excellence,
            cultivating a dynamic campus community.
          </p>
          <ul className="flex  gap-y-5  flex-wrap lg:gap-x-5 gap-0.5 py-4 mt-5">
            {features.map((item, index) => (
              <li
                key={index}
                className="group  w-full md:w-5/12 p-3 border border-[#5555] rounded-2xl transition-all cursor-pointer"
              >
                <h4 className="text-[#555555] text-xs font-bold">
                  <i className={`${item.icon} text-primary`}></i> {item.title}
                </h4>
              </li>
            ))}
          </ul>
                 <button className='bg-primary rounded-2xl text-white text-md px-4 py-3'>Views All Crouses </button>

        </div>
      </div>
    <div className="p-5">
        <FeaturesList/>
    </div>
    </section>
  );
};

export default About;

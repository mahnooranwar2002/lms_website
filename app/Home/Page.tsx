import React from "react";
import Hero from "./Hero";
import Crouses from "./Crouses";
import About from "./About";
import Learning from "./Learning";
import Categories from "./Categories";

const Page = () => {
  return (
    <div>
  <Hero/>
  <Categories/>
<About/>
<Learning/>
<Crouses/>
  
    </div>
  );
};

export default Page;

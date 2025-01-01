import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import blackhole2 from "../assets/blackhole2.webm";

const Tech = () => {

  return (

    
 
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full bg-cover z-[0] opacity-30"
      > 
      {/* object-cover */}
        <source src= {blackhole2} type="video/webm" />
      </video> 
      {technologies.map((technology) => (
        <div className='w-28 h-28 ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    
  );
};    

export default SectionWrapper(Tech, "");

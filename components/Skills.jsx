"use client";

import { skills } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 px-4 md:px-10 scroll-mt-20 ">
      <div className="max-w-6xl mx-auto text-center">
      
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base">
          Technologies and tools I use to build and deploy modern full-stack applications
        </p>

   
        <div className="flex flex-wrap  items-center justify-center gap-3 md:gap-4">
          {skills.map(({title ,icon },index) => ( 
            
            <button
              key={index}
              className="
                flex items-center gap-2
                px-4 py-2 md:px-6 md:py-3
                text-sm md:text-base font-medium
                rounded-full
                bg-gray-100 text-gray-800
                border border-gray-200
                hover:bg-black hover:text-white
                hover:shadow-lg
                transition-all duration-300
                active:scale-95
              "
            >
              <Image src={icon} alt="skills-icon" className="w-5 h-5" />
              {title}
            </button> 
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
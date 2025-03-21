"use client";

import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="AboutMe" className="relative h-screen w-full overflow-hidden">
      <div className="h-full w-full bg-brandBeige p-1">
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          <Image
            src="/AboutMe.png"
            alt="Classical architecture backdrop"
            fill
            priority
            className="object-cover"
          />
          
          {/* WHO AM I heading - positioned differently based on screen size */}
          <div className="relative z-10 w-full text-center md:absolute md:top-10 md:left-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brandBeige tracking-wider font-normal">
              WHO AM I
            </h1>
          </div>
          
          {/* Text box - centered with flex */}
          <div className="relative z-10 mt-4 md:mt-0 max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
            <div className="backdrop-blur-[5%] bg-brandBrown bg-opacity-65 p-5 md:p-6 rounded-lg">
              <p className="text-brandBeige text-xs sm:text-sm md:text-base mb-3 md:mb-4">
                <span className="font-bold">Greetings, I am Dylan.</span> In the spirit of 
                past scholars, I am on a journey of perpetual learning, delving into the 
                realms of software and cloud engineering
              </p>
              
              <p className="text-brandBeige text-xs sm:text-sm md:text-base">
                <span className="font-bold">Progress and Art.</span> The twin pillars that 
                uphold my passion for technology. Every project, every milestone, and 
                every discovery unfolds beneath the shadow of elegance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
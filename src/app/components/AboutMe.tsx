"use client";

import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 p-1 bg-brandBeige">
        <div className="relative h-full w-full">
          <Image
            src="/AboutMe.png"
            alt="Classical architecture backdrop"
            fill
            priority
            className="object-cover"
          />
          
          <div className="absolute top-10 right-10 sm:top-14 sm:right-14 md:top-20 md:right-20 lg:top-24 lg:right-32">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brandBeige tracking-wider font-normal">
              WHO AM I
            </h1>
          </div>
          
          <div className="absolute top-1/2 left-10 md:left-16 lg:left-20 transform -translate-y-1/2
                         max-w-[280px] sm:max-w-sm md:max-w-md 
                         backdrop-blur-[5%] bg-brandBrown bg-opacity-65 p-5 md:p-6
                         rounded-lg">
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
    </section>
  );
};

export default AboutMe;
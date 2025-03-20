import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroImg.png"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Text Overlay */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-cinzel text-white tracking-wider">
          I LOVE, SO I CREATE
        </h1>
      </div>
    </section>
  );
};

export default Hero;
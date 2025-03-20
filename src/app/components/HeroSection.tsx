// components/HeroSection.jsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/HeroImg.png" 
          alt="Hero Background" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="container mx-auto px-6 z-20 text-center">
        <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-white text-6xl md:text-8xl font-light tracking-wide">
          I LOVE, SO I CREATE
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
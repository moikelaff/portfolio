"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WorkItem {
  id: string;
  title: string;
  image: string;
  period?: string;
  description?: string;
  tags?: string[];
  isActive?: boolean;
}

export default function Portfolio() {
  const [activeWork, setActiveWork] = React.useState<WorkItem | null>(null);

  const works: WorkItem[] = [
    {
      id: "sihire",
      title: "SIHIRE",
      image: "/sihire.png",
      period: "OCT - DEC 2024",
      description: "CONDUCTED AN IN DEPTH SQA INITIATIVE FOR A RECRUITMENT INFORMATION SYSTEM WITH NO PRIOR QA PROCESSES IN PLACE. IMPLEMENTED TEST PLANNINGS, CODE INSPECTIONS, ROBUST & PROPER CI/CD, CONTINUOUS MONITORING & ENHANCED OVERALL SYSTEM RELIABILITY & PERFORMANCE",
      tags: ["SQA", "DEVOPS", "CI-CD", "REQUIREMENT VALIDATION"],
      isActive: true
    },
    {
      id: "adan",
      title: "ADAN",
      image: "/adan.png"
    },
    {
      id: "seken",
      title: "SEKEN",
      image: "/seken.png"
    },
    {
      id: "konfui",
      title: "KONFUI",
      image: "/konfui.png"
    },
    {
      id: "pga",
      title: "PGA",
      image: "/pga.png"
    },
    {
      id: "foss",
      title: "FOSS UIII",
      image: "/foss.png"
    }
  ];

  React.useEffect(() => {
    // Set SIHIRE as active by default
    setActiveWork(works.find(work => work.id === "sihire") || null);
  }, []);

  const handleWorkClick = (work: WorkItem) => {
    setActiveWork(work);
  };

  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Portfolio.png"
          alt="Portfolio Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Portfolio Title */}
      <h2 className="text-white text-6xl mb-12 z-10 tracking-widest text-center">MY WORKS</h2>
      
      {/* Portfolio Gallery */}
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        {/* Frames Layout */}
        <div className="grid grid-cols-3 gap-8 px-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div onClick={() => handleWorkClick(works[1])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/adan.png" alt="ADAN Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">ADAN</h3>
                </div>
              </div>
            </div>
            
            <div onClick={() => handleWorkClick(works[2])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/seken.png" alt="SEKEN Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">SEKEN</h3>
                </div>
              </div>
            </div>
            
            <div onClick={() => handleWorkClick(works[3])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/konfui.png" alt="KONFUI Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">KONFUI</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle Column (Active Work Details) */}
          <div className="col-span-1 flex items-center justify-center">
            {activeWork && (
              <div className="text-center text-white">
                <h3 className="text-4xl mb-4">{activeWork.title}</h3>
                {activeWork.period && (
                  <p className="text-lg mb-6">{activeWork.period}</p>
                )}
                {activeWork.description && (
                  <p className="text-sm mb-6 leading-relaxed tracking-wide max-w-md">
                    {activeWork.description}
                  </p>
                )}
                {activeWork.tags && activeWork.tags.length > 0 && (
                  <div className="flex justify-center gap-2 flex-wrap">
                    {activeWork.tags.map((tag, index) => (
                      <span key={index} className="text-xs border border-white px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            <div onClick={() => handleWorkClick(works[0])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/sihire.png" alt="SIHIRE Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">SIHIRE</h3>
                </div>
              </div>
            </div>
            
            <div onClick={() => handleWorkClick(works[4])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/pga.png" alt="PGA Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">PGA</h3>
                </div>
              </div>
            </div>
            
            <div onClick={() => handleWorkClick(works[5])} className="cursor-pointer transform transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/gold-frame.png" 
                  alt="Frame" 
                  width={300} 
                  height={200} 
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image src="/foss.png" alt="FOSS UIII Project" width={250} height={150} className="object-cover" />
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <h3 className="text-white text-xl">FOSS UIII</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows (optional) */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button className="text-white text-4xl hover:text-brandBeige transition-colors">
            &#8249;
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button className="text-white text-4xl hover:text-brandBeige transition-colors">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
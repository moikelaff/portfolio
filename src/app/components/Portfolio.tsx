"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkItem {
  id: string;
  title: string;
  image: string;
  period?: string;
  description?: string;
  tags?: string[];
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const works: WorkItem[] = [
    {
      id: "sihire",
      title: "SIHIRE",
      image: "/sihire.png",
      period: "OCT - DEC 2024",
      description: "CONDUCTED AN IN DEPTH SQA INITIATIVE FOR A RECRUITMENT INFORMATION SYSTEM WITH NO PRIOR QA PROCESSES IN PLACE. IMPLEMENTED TEST PLANNINGS, CODE INSPECTIONS, ROBUST & PROPER CI/CD, CONTINUOUS MONITORING & ENHANCED OVERALL SYSTEM RELIABILITY & PERFORMANCE",
      tags: ["SQA", "DEVOPS", "CI-CD", "REQUIREMENT VALIDATION"],
    },
    {
      id: "adan",
      title: "ADAN",
      image: "/adan.png",
      period: "FEB - MAY 2025",
      description: "CONDUCTED IN-DEPTH RESEARCH ON E-LEARNING PLATFORMS & ITS USERS TO CREATE AN APPLICATION THAT OPTIMALLY ALIGNS WITH USER NEEDS. CREATED DESIGNS BEST ON RESEARCH GATHERED & APPLIED BEST UI/UX PRACTICES TO CREATE A USER-FRIENDLY INTERFACE",
      tags: ["FULLSTACK", "UI/UX", "SYSTEM ANALYSIS", "USER-CENTERED DESIGN"],
    },
    {
      id: "seken",
      title: "SEKEN",
      image: "/seken.png",
      period: "FEB - JUN 2024",
      description: "DEVELOPED AND DESIGNED A MINIMUM VIABLE PRODUCT FOR A THRIFTING APPLICATION, CONDUCTED MARKET VALIDATION, FULLSTACK DEVELOPMENT, AND CONDUCTED SEED FUNDING WITH SEVERAL POSITIVE RETURNS",
      tags: ["FULLSTACK", "STARTUP", "REQUIREMENT GATHERING", "MVP"],
    },
    {
      id: "konfui",
      title: "KONFUI",
      image: "/konfui.png",
      period: "FEB - JUL 2024",
      description: "REVAMPED & MIGRATED A FASILKOM UI MOBILE CONFERENCE APPLICATION TO MOBILE TO INCREASE USE RATE. CONDUCTED SYSTEM ANALYSIS, UI/UX ANALYSIS, MOBILE-BE INTEGRATION, AND CONDUCTED PROPER SQA TO ENSURE SYSTEM INTEGRITY & RELIABILITY",
      tags: ["SOFTWARE ENGINEERING", "SYSTEM ANALYSIS", "SQA", "REQUIREMENT GATHERING"],
    },
    {
      id: "pga",
      title: "PGA",
      image: "/pga.png",
      period: "JAN 2025 - PRESENT",
      description: "DEVELOPED A COMPREHENSIVE GYMNASTICS COMPANY PROFILE USING NEXT.JS. IMPLEMENTED A SECURE NODE BACKEND FOR MEMBERSHIP MANAGEMENT, SCHEDULING & NON-TECH USER FRIENDLY INTERFACE FOR THE ADMIN",
      tags: ["FULLSTACK", "SYSTEM ANALYSIS", "USER-CENTERED DESIGN", "UI/UX"],
    },
    {
      id: "foss",
      title: "FOSS UIII",
      image: "/foss.png",
      period: "FEB 2025 - PRESENT",
      description: "REVAMPED THE COMPANY PROFILE OF FACULTY OF SOCIAL SCIENCES OF UNIVERSITAS ISLAM INTERNASIONAL INDONESIA (FOSS UIII). TO ENSURE A MORE MARKETABLE UNIVERSITY, CONDUCTED SYSTEM ANALYSIS, GATHERING CAMPUS USER FEEDBACK, APPLIED UP-TO-DATE DESIGN PRINCIPLES & IMPLEMENTED MODERN FULL-STACK DEVELOPMENT FOR SEAMLESS AND CLEAN FUNCTIONALITY",
      tags: ["FULLSTACK", "UI/UX", "SYSTEM ANALYSIS", "USER-CENTERED DESIGN", "REQUIREMENT GATHERING"],
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWorkClick = (index: number) => {
    setActiveIndex(index);
  };

  // Animation variants with FASTER durations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.2, // Reduced from 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 } // Reduced from 0.5
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25 } // Reduced from 0.4
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 } // Reduced from 0.3
    }
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % works.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [works.length]);

  return (
    <section id="Portfolio" className="relative min-h-screen flex flex-col items-center justify-center py-10 border-r-4 border-l-4 border-brandBeige overflow-hidden">
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
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }} // Faster animation
        className="text-brandBeige text-5xl sm:text-6xl md:text-7xl mb-6 md:mb-8 z-10 tracking-widest text-center font-cinzel"
      >
        MY WORKS
      </motion.h2>

      {/* Portfolio Gallery */}
      <motion.div 
        className="w-full max-w-6xl mx-auto z-10 relative flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Frames Layout - Improved responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 sm:gap-8 px-4 w-full">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 sm:space-y-8 items-center md:mr-4 order-2 md:order-1">
            {works.slice(0, 3).map((work, index) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                onClick={() => handleWorkClick(index)}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 relative ${
                  activeIndex === index ? 'scale-105 z-20' : 'opacity-80 hover:opacity-100'
                }`}
                whileHover={{ 
                  rotate: [-1, 1, -1, 0],
                  transition: { duration: 0.3 } // Faster animation
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Select ${work.title} project`}
                role="button"
                tabIndex={0}
              >
                {/* Gold border for active item with rounded corners and margin */}
                {activeIndex === index && (
                  <motion.div 
                    className="absolute -inset-2 rounded-md"
                    style={{ 
                      border: '2px solid #D4AF37', // Gold color
                      zIndex: -1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <div className="relative w-48 h-32 shadow-lg overflow-hidden rounded-md">
                  <Image
                    src={work.image}
                    alt={`${work.title} Project`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-brandBrown transition-opacity duration-200 ${
                    activeIndex === index ? 'opacity-0' : 'opacity-40 hover:opacity-10'
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Column (Active Work Details) - Improved transitions and wider */}
          <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-4 relative order-1 md:order-2 mb-8 md:mb-0">
            <AnimatePresence mode="wait">
              {works[activeIndex] && (
                <motion.div
                  key={works[activeIndex].id}
                  className="relative flex flex-col items-center w-full max-w-full mx-auto" 
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div 
                    className="bg-brandBrown bg-opacity-50 backdrop-blur-sm rounded-lg p-2 w-full text-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <h3 className="text-3xl md:text-4xl mb-2 text-brandBeige font-cinzel">{works[activeIndex].title}</h3>
                  </motion.div>
                  
                  {/* Wider text container */}
                  <motion.div 
                    className="bg-brandBrown bg-opacity-50 backdrop-blur-sm rounded-lg p-4 md:p-8 w-full text-center mt-4 min-h-[240px]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.25 }} 
                  >
                    <p className="text-xs md:text-sm leading-relaxed tracking-wide text-brandBeige mb-6 font-cinzel">
                      {works[activeIndex].period}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed tracking-wide text-brandBeige mx-auto max-w-full">
                      {works[activeIndex].description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                      {works[activeIndex].tags?.map((tag, i) => (
                        <motion.span 
                          key={i}
                          className="text-xs bg-brandBeige bg-opacity-20 text-brandBeige px-2 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + (i * 0.05) }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <div className="flex justify-between w-full mt-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-brandBeige bg-brandBrown bg-opacity-50 rounded-full p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
                      }}
                      aria-label="Previous project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-brandBeige bg-brandBrown bg-opacity-50 rounded-full p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex((prev) => (prev + 1) % works.length);
                      }}
                      aria-label="Next project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 sm:space-y-8 items-center md:ml-4 order-3">
            {works.slice(3).map((work, index) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                onClick={() => handleWorkClick(index + 3)}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 relative ${
                  activeIndex === index + 3 ? 'scale-105 z-20' : 'opacity-80 hover:opacity-100'
                }`}
                whileHover={{ 
                  rotate: [1, -1, 1, 0],
                  transition: { duration: 0.3 } // Faster animation
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Select ${work.title} project`}
                role="button"
                tabIndex={0}
              >
                {/* Gold border for active item with rounded corners and margin */}
                {activeIndex === index + 3 && (
                  <motion.div 
                    className="absolute -inset-2 rounded-md"
                    style={{ 
                      border: '2px solid #D4AF37', // Gold color
                      zIndex: -1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <div className="relative w-48 h-32 shadow-lg overflow-hidden rounded-md">
                  <Image
                    src={work.image}
                    alt={`${work.title} Project`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-brandBrown transition-opacity duration-200 ${
                    activeIndex === index + 3 ? 'opacity-0' : 'opacity-40 hover:opacity-10'
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile navigation dots */}
        <div className="md:hidden flex justify-center mt-4 space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-brandBeige w-4' : 'bg-brandBeige bg-opacity-50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
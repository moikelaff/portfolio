"use client";

import React from 'react';
import Image from 'next/image';

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

  const handleWorkClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center py-10">
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
      <h2 className="text-white text-5xl mb-8 z-10 tracking-widest text-center">MY WORKS</h2>

      {/* Portfolio Gallery */}
      <div className="w-full max-w-6xl mx-auto z-10 relative flex flex-col items-center">
        {/* Frames Layout */}
        <div className="grid grid-cols-3 gap-4 px-4 w-full">
          {/* Left Column */}
          <div className="flex flex-col space-y-4 items-center">
            {works.slice(0, 3).map((work, index) => (
              <div
                key={work.id}
                onClick={() => handleWorkClick(index)}
                className="cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="relative w-48 h-32"> {/* Adjusted size */}
                  <Image
                    src={work.image}
                    alt={`${work.title} Project`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column (Active Work Details) */}
          <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-4 relative">
            {works[activeIndex] && (
              <>
                <div className="relative flex flex-col items-center w-full">
                  <div className="bg-brandBrown bg-opacity-50 backdrop-blur-sm rounded-lg p-1 w-full text-center border-1 border-brandBeige">
                    <h3 className="text-3xl mb-2 text-brandBeige">{works[activeIndex].title}</h3>
                  </div>
                  <div className="bg-brandBrown bg-opacity-50 backdrop-blur-sm rounded-lg p-4 w-full text-center mt-4 border-1 border-brandBeige">
                    <p className="text-xs leading-relaxed tracking-wide text-brandBeige mb-4 ">
                      {works[activeIndex].period}
                    </p>
                    <p className="text-sm leading-relaxed tracking-wide text-brandBeige">
                      {works[activeIndex].description}
                    </p>
                    <p className="text-xs leading-relaxed tracking-wide text-brandBeige mt-4">
                      {works[activeIndex].tags.map((tag) => `${tag}`).join(" | ")}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4 items-center">
            {works.slice(3).map((work, index) => (
              <div
                key={work.id}
                onClick={() => handleWorkClick(index + 3)}
                className="cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="relative w-48 h-32"> {/* Adjusted size */}
                  <Image
                    src={work.image}
                    alt={`${work.title} Project`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

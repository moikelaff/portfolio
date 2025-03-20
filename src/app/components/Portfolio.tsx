"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 'sihire',
    name: 'SIHIRE',
    description: 'CONDUCTED AN IN-DEPTH SQA INITIATIVE FOR A RECRUITMENT INFORMATION SYSTEM WITH NO PRIOR QA PROCESSES IN PLACE. IMPLEMENTED PLANNING, CODE INSPECTIONS, ROBUST & PROPER CI/CD CONTINUOUS MONITORING & ENHANCED OVERALL QUALITY ASSURANCE PROCEDURES.',
    image: '/project-thumbnails/sihire.png',
    date: 'OCT - DEC 2024',
    tags: ['SQA', 'DevOps', 'CI/CD', 'Requirement Validation']
  },
  {
    id: 'adan',
    name: 'ADAN',
    image: '/project-thumbnails/adan.png',
  },
  {
    id: 'pga',
    name: 'PGA',
    image: '/project-thumbnails/pga.png',
  },
  {
    id: 'seken',
    name: 'SEKEN',
    image: '/project-thumbnails/seken.png',
  },
  {
    id: 'fossujii',
    name: 'FOSS UJII',
    image: '/project-thumbnails/fossujii.png',
  },
  {
    id: 'konfui',
    name: 'KONFUI',
    image: '/project-thumbnails/konfui.png',
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Portfolio.png" 
          alt="Portfolio Background" 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <h2 className="text-white text-6xl md:text-8xl mb-12 text-center">MY WORKS</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="relative aspect-square cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`absolute inset-0 border-4 ${selectedProject.id === project.id ? 'border-white' : 'border-gray-700'}`}>
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xl font-medium">{project.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <div className="mt-12 bg-black/80 p-8 text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl">{selectedProject.name}</h3>
              {selectedProject.date && (
                <span className="text-gray-400">{selectedProject.date}</span>
              )}
            </div>
            {selectedProject.description && (
              <p className="mb-4">{selectedProject.description}</p>
            )}
            {selectedProject.tags && (
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 px-3 py-1 text-sm rounded">{tag}</span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
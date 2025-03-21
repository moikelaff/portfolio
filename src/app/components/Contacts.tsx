"use client";

import React from 'react';
import Image from 'next/image';

const Contacts = () => {
  return (
    <section id="Contacts" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 p-1 bg-brandBeige">
        <div className="relative h-full w-full">
          <Image
            src="/Contacts.png" // Background image
            alt="Contacts backdrop"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl md:text-8xl font-cinzel text-brandBeige">FIN.</h1>
          </div>

          {/* Social media icons - moved higher on mobile */}
          <div className="absolute bottom-16 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 bg-brandBrown bg-opacity-70 backdrop-blur-[5%] p-2 rounded-lg">
              <a href="https://github.com/moikelaff" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform w-6 h-6 md:w-8 md:h-8"
                />
              </a>
              <a href="https://www.instagram.com/dylanlaff" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform w-6 h-6 md:w-8 md:h-8"
                />
              </a>
              <a href="https://www.linkedin.com/in/dylan23adiprawira/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform w-6 h-6 md:w-8 md:h-8"
                />
              </a>
              <a href="mailto:dylan.adiprawira@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform w-6 h-6 md:w-8 md:h-8"
                />
              </a>
              <a href="https://medium.com/@dylanadipa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/medium.png"
                  alt="Medium"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform w-6 h-6 md:w-8 md:h-8"
                />
              </a>
            </div>
          </div>

          {/* Copyright text - guaranteed single line with more space below */}
          <div className="absolute bottom-4 left-0 right-0 mx-auto text-center w-full px-4">
            <p className="text-[10px] sm:text-xs text-brandBeige whitespace-nowrap overflow-hidden text-ellipsis">
              © 2025 Dylan Adiprawira. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
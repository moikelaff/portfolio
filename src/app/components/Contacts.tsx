"use client";

import React from 'react';
import Image from 'next/image';

const Contacts = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 p-1 bg-brandBeige">
        <div className="relative h-full w-full">
          <Image
            src="/Contacts.png" // Background image
            alt="Contacts backdrop"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 bg-brandBrown bg-opacity-70 backdrop-blur-[5%] p-2 rounded-lg">
              <a href="https://github.com/moikelaff" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a href="https://www.instagram.com/dylanlaff" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a href="https://www.linkedin.com/in/dylan23adiprawira/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a href="mailto:dylan.adiprawira@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/mail.png"
                  alt="Email"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
              </a>
              <a href="https://medium.com/@dylanadipa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image
                  src="/medium.png"
                  alt="Medium"
                  width={32}
                  height={32}
                  className="hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-8xl font-cinzel text-brandBeige">FIN.</h1>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-xs text-brandBeige">
            <p>© 2025 Dylan Adiprawira. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

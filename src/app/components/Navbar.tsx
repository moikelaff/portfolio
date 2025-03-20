"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center md:justify-end space-x-8">
          <Link href="#about" style={{ color: 'var(--beige)', fontFamily: 'var(--font-serif)' }} className="hover:text-white transition-colors">
            ABOUT ME
          </Link>
          <Link href="#portfolio" style={{ color: 'var(--beige)', fontFamily: 'var(--font-serif)' }} className="hover:text-white transition-colors">
            PORTFOLIO
          </Link>
          <Link href="#contacts" style={{ color: 'var(--beige)', fontFamily: 'var(--font-serif)' }} className="hover:text-white transition-colors">
            CONTACTS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
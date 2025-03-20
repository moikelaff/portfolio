"use client";

import { useState } from "react";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full z-50">
        <nav className="backdrop-blur-md bg-opacity-70" style={{ backgroundColor: 'rgba(34, 20, 11, 0.7)' }}>
            <div className="container mx-auto py-4">
            <ul className="flex justify-center space-x-16 text-lg">
                <li>
                <Link 
                    href="#AboutMe" 
                    className="text-white hover:text-[#EBD7CF] transition-colors duration-300 text-lg tracking-wide"
                >
                    About Me
                </Link>
                </li>
                <li>
                <Link 
                    href="#portfolio" 
                    className="text-white hover:text-[#EBD7CF] transition-colors duration-300 text-lg tracking-wide"
                >
                    Portfolio
                </Link>
                </li>
                <li>
                <Link 
                    href="#contacts" 
                    className="text-white hover:text-[#EBD7CF] transition-colors duration-300 text-lg tracking-wide"
                >
                    Contacts
                </Link>
                </li>
            </ul>
            </div>
        </nav>
        </header>
  );
};

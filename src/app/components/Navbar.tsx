"use client";

import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full z-50">
            <nav className="backdrop-blur-[5%] bg-brandBrown bg-opacity-70 h-[60px] flex items-center">
                <div className="w-full">
                    {/* Mobile menu button - now centered */}
                    <div className="md:hidden flex justify-center">
                        <button 
                            onClick={toggleMenu}
                            className="text-brandBeige text-2xl"
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>

                    {/* Mobile dropdown menu - darker background */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-[60px] left-0 w-full bg-brandBrown py-4">
                            <ul className="flex flex-col items-center space-y-4">
                                <li>
                                    <Link
                                        href="#AboutMe"
                                        className="text-brandBeige text-2xl font-xl hover:text-gray-400 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About Me
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#Portfolio"
                                        className="text-brandBeige text-2xl font-normal hover:text-gray-400 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#Contacts"
                                        className="text-brandBeige text-2xl font-normal hover:text-gray-400 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Desktop menu */}
                    <ul className="hidden md:flex justify-center space-x-8 lg:space-x-24">
                        <li>
                            <Link
                                href="#AboutMe"
                                className="text-brandBeige text-2xl lg:text-[40px] font-xl hover:text-gray-400 transition-colors duration-300"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Portfolio"
                                className="text-brandBeige text-2xl lg:text-[40px] font-normal hover:text-gray-400 transition-colors duration-300"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Contacts"
                                className="text-brandBeige text-2xl lg:text-[40px] font-normal hover:text-gray-400 transition-colors duration-300"
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
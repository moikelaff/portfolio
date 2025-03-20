"use client";

import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed w-full z-50">
            <nav className="backdrop-blur-[5%] bg-brandBrown bg-opacity-70 h-[60px] flex items-center">
                <div className="w-full">
                    <ul className="flex justify-center space-x-20 lg:space-x-24">
                        <li>
                            <Link
                                href="#AboutMe"
                                className="text-brandBeige text-3xl md:text-[40px] font-xl hover:text-gray-400 transition-colors duration-300"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Portfolio"
                                className="text-brandBeige text-3xl md:text-[40px] font-normal hover:text-gray-400 transition-colors duration-300"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Contacts"
                                className="text-brandBeige text-3xl md:text-[40px] font-normal hover:text-gray-400 transition-colors duration-300"
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
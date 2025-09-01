"use client";

import { useState, useEffect } from "react";
import BtnOne from "./BtnOne";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    // Optional: clean up when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

    return (
        <nav className="px-5 sm:px-10 md:px-18 lg:px-18 py-4">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-between gap-x-3">
                <img src="logo.png" alt="Nexaforge-logo" className="w-30 md:w-40" />

                <ul className="flex items-center gap-x-4">
                    <Link href="/">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Home
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/services">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Services
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/solutions">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Solutions
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/portfolio">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Portfolio
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/work">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Work
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/clients">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Clients
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/careers">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Careers
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                    <Link href="/blogs">
                        <li className="group inline-block relative cursor-pointer text-base">
                            Blogs
                            <span className="absolute left-0 -bottom-1 w-full h-1 
                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] group-hover:opacity-100 opacity-0 transition"></span>
                        </li>
                    </Link>
                </ul>

                <BtnOne name="Book a Demo" />
            </div>

            {/* Mobile Nav Top Bar */}
            <div className="flex lg:hidden justify-between items-center">
                <img src="logo.png" alt="Nexaforge-logo" className="w-30" />

                <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl cursor-pointer select-none transition"
                >
                    ☰
                </span>
            </div>

            {/* Mobile Screen */}
            {isOpen && (
                <section
                    className="lg:hidden fixed left-2 right-2 top-2 bottom-2 z-50
          bg-black/30 backdrop-blur-md rounded-2xl transition-all"
                >
                    <ul className="flex flex-col justify-start px-3 gap-y-5 text-white">
                        <div className="w-full flex justify-between items-center px-0 sm:px-5 md:px-10">
                            <BtnOne
                                name="Book a Demo"
                                className="mt-4"
                                bgColor="bg-transparent"
                                textColor="text-white"
                                borderColor="border-white"
                            />
                            <span
                                onClick={() => setIsOpen(false)}
                                className="text-6xl relative pr-2 cursor-pointer select-none transition"
                            >
                                ×
                            </span>
                        </div>

                        <Link href="/">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="/services">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Services
                            </li>
                        </Link>
                        <Link href="/solutions">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Solutions
                            </li>
                        </Link>
                        <Link href="/portfolio">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Portfolio
                            </li>
                        </Link>
                        <Link href="/work">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Work
                            </li>
                        </Link>
                        <Link href="/clients">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Clients
                            </li>
                        </Link>
                        <Link href="/careers">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Careers
                            </li>
                        </Link>
                        <Link href="/blogs">
                            <li
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer border-b border-gray-300"
                            >
                                Blogs
                            </li>
                        </Link>
                    </ul>
                </section>
            )}
        </nav>
    );
}

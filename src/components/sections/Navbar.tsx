"use client"; // Required for useState and useEffect

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { name: "Home", link: "/" },
    { name: "Featured events", link: "#events" },
    { name: "Pricing", link: "#pricing" },
  ];

  return (
    <header
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between w-4xl py-2 px-10 
        border border-zinc-300 bg-white/30 backdrop-blur-lg rounded-full
        transition-all duration-500 ease-in-out
        ${isScrolled ? "top-4 shadow-md" : "top-15"} 
      `}
    >
      <div className="flex items-center gap-2">
        <Image src="/vector-logo.svg" alt="Logo" width={30} height={30} />
        <h1 className="text-3xl font-semibold bg-linear-to-r from-[#5D51FF] to-blue-500 bg-clip-text text-transparent">
          acca
        </h1>
      </div>
      
      <nav className="flex items-center">
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="mx-4 font-medium hover:text-blue-500 transition-colors"
          >
            {item.name}
          </a>
        ))}
        <div className="flex items-center">
          <Link
            href="sign-in"
            className="ml-4 px-4 py-1.5 mr-4 font-medium hover:text-zinc-700 transition-colors rounded-lg text-black duration-300 border-2 border-blue-500 hover:border-zinc-300"
          >
            Sign in
          </Link>
          <Link
            href="sign-up"
            className="px-4 py-1.5 bg-linear-to-r from-[#5D51FF] to-blue-500 rounded-lg text-white hover:from-blue-500 hover:to-[#5D51FF] transition-colors duration-300"
          >
            Create Event
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
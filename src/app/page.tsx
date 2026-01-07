import Glows from "@/components/Glows";
import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <Glows />
      <div className="absolute text-sm top-0 w-screen flex items-center justify-between bg-white py-2 px-30 border-b border-zinc-300 shadow-sm">
        <p className="">
          {" "}
          <span className="font-semibold">Coming soon: </span>Preview the
          affiliate marketing feature
        </p>
        <Link
          href="/affiliate"
          className="flex items-center gap-3 py-1.5 px-4 rounded-lg font-light bg-linear-to-r from-[#5D51FF] to-blue-500 hover:from-blue-500 hover:to-[#5D51FF] transition-colors duration-300 text-white"
        >
          <p className="">Pre-register</p>
          <Image src="/open-new tab.svg" width={15} height={15} alt="open x" />
        </Link>
      </div>
      <Navbar />
      <main className="mx-auto container">
        <Hero />
        <Events />
      </main>
    </div>
  );
};

export default HomePage;

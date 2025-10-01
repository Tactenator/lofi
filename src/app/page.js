'use client'

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const backgrounds = [
    '/wall-1.gif',
    '/wall-2.gif',
    '/wall-3.gif',
    '/wall-4.gif',
    '/wall-5.gif',
    '/wall-6.gif',
  ];

  // ✅ Correct random index (0–5)
  const [background] = useState(
    backgrounds[Math.floor(Math.random() * backgrounds.length)]
  );

  return (
    <section className="relative h-screen w-full -z-10">
     
      <Image
        src={background}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Content */}
      <div className="absolute z-40 flex h-full w-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          High quality service with great results
        </p>
        <a
          href="#services"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

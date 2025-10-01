'use client'

import { useState } from "react";
import Image from "next/image";
import Player from "./components/player";

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
      <Player />
    </section>
  );
}

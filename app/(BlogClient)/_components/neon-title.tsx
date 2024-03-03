"use client";
import { Marck_Script } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const font = Marck_Script({ subsets: ["latin"], weight: ["400"] });

export default function NeonTitle() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-[300px] md:h-[450px]">
      {loading && (
        <div className="absolute z-10 inset-0 bg-zinc-500 bg-opacity-30 blur-sm flex items-center justify-center pointer-events-none" />
      )}
      <Image
        src="/images/night.jpg"
        alt="Background image"
        fill={true}
        style={{ objectFit: "cover" }}
        priority={true}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      {!loading && (
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 text-center">
          <h1
            className={`${font.className} neonText animate-pulsate text-5xl md:text-6xl select-none`}
          >
            Somewhere Only We Know
          </h1>
        </div>
      )}
    </div>
  );
}

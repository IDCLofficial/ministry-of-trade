'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImages: string[];
}

export default function HeroSection({
  title,
  description,
  buttonText,
  backgroundImages,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup
  }, [backgroundImages.length]);
  return (
    <section className="relative max-h-max py-10 md:py-20">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      {backgroundImages.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Hero background ${index + 1}`}
          fill
          className={`object-cover object-center absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06163A]/60 z-10"></div>
    </div>
  
    {/* Frosted Glass Card */}
    <div className="relative lg:mt-0 z-10 max-w-[96vw] px-6 md:px-10 pt-32 lg:pt-20 pb-6 lg:pb-32 md:pt-48">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg lg:max-w-[60vw]">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
  
        <p className="mt-3 lg:mt-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 md:p-8 shadow-lg max-w-xl text-sm md:text-lg">
          {description}
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block lg:hidden bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  </section>
  

  );
}

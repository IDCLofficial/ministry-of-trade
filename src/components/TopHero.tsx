import React from "react";
import AnimatedSection from "./AnimatedSection";
interface TopHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

export const TopHero: React.FC<TopHeroProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative w-full h-[50vh] lg:h-[60vh] flex items-center bg-cover bg-center py-24 px-6 md:px-12 lg:px-20 text-left"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-2xl text-white py-10">
        <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
        </AnimatedSection>
      </div>
    </section>
  );
};



import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import React from "react";

type Department = {
  id: number;
  title: string;
  description: string;
};

type StructureProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt?: string;
  departments: Department[]; // provide 6 items for a 3x2 grid
};

const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export default function StructureSection({
  title,
  subtitle,
  imgSrc,
  imgAlt = "",
  departments,
}: StructureProps) {
  const rows = chunk(departments, 3); // two rows of three

  return (
    <section className="bg-[#0b1d2c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        {/* Top: Head text + Image */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              {subtitle}
            </p>
          </div>

          <div className="relative">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={800}
              height={520}
              className="w-full rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Grid: 3 x 2 with dotted lines */}
        <div className="mt-12 space-y-10">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="relative">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {row.map((dept) => (
                  <div key={dept.id} className="relative pt-6">
                    {/* number bubble */}
                    <span className="absolute -top-4 left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#e63946] text-sm font-bold">
                      {dept.id}
                    </span>
<AnimatedSection>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        {dept.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {dept.description}
                      </p>
                    </div>
</AnimatedSection>                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

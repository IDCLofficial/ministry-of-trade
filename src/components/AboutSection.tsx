import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  reverse?: boolean; // optional: flip layout (image right, text left)
}

export default function AboutSection({
  title,
  description,
  image,
  link,
  buttonText,
  reverse = false,
}: AboutSectionProps) {
  return (
    <section
      className={`w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-36 px-4 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left: Image */}
      <div className="w-[90%] md:w-[40%] flex items-stretch">
        <div className="relative w-full h-[350px] md:h-[500px] min-h-[350px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right: Text and Button */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-8 max-w-[700px] leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        <div className="flex flex-row gap-4 mt-4">
          <Link
            href={link}
            className="bg-[#D61F00] hover:bg-[#D61F00]/50 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

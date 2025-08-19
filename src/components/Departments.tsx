import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
interface Department {
  title: string;
  desc: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  departments: Department[];
  image: string;
  buttonText: string;
  buttonLink: string;
}

const DepartmentsSection = ({
  title,
  subtitle,
  departments,
  image,
  buttonText,
  buttonLink,
}: SectionProps) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
            <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-[#06163A] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">{subtitle}</p>
          </AnimatedSection>
          {/* Department Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {departments.map((dept, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <AnimatedSection>
                <h3 className="font-semibold text-[#06163A] text-lg mb-2">
                  {dept.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dept.desc}
                </p>
                </AnimatedSection>              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href={buttonLink}
            className="inline-block bg-red-600 hover:bg-red-700 animate-bounce w-max text-white font-semibold px-6 py-3 rounded transition"
          >
            {buttonText}
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={image}
            alt="Imo State Ministry of Livestock Development"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;

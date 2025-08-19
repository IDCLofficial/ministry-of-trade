import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function PartnerSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20 px-6 md:px-12 lg:px-20 text-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }} 
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-3xl mx-auto text-white">
        <AnimatedSection>
        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner With Us To Drive Economic Growth In Imo
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-sm md:text-base leading-relaxed text-gray-200">
          Collaborate with the Ministry of Trade, Commerce, and Investment to 
          unlock business opportunities, attract investments, and foster economic 
          development across Imo State. Together, we can create a thriving 
          business environment that benefits all stakeholders and drives 
          sustainable economic transformation.
        </p>
        </AnimatedSection>

        {/* Button */}
        <Link
          href="/contact-us"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

const services = [
  {
    title: "Trade Facilitation & Market Access",
    description:
      "Streamlines trade processes and reduces barriers to commerce. Implements policies that enhance domestic and international trade, ensuring smooth business operations and market access for local enterprises.",
  },
  {
    title: "Investment Promotion & Support",
    description:
      "Attracts and facilitates both local and foreign investments. Provides comprehensive support services to investors, including market intelligence, investment incentives, and aftercare services.",
  },
  {
    title: "MSME Development & Support",
    description:
      "Empowers Micro, Small, and Medium Enterprises through capacity building, access to finance, and business development services. Implements programs to enhance competitiveness and sustainability.",
  },
  {
    title: "Export Development & Promotion",
    description:
      "Supports local businesses in accessing international markets. Provides export readiness assessments, market research, and participation in international trade fairs and exhibitions.",
  },
  {
    title: "Business Registration & Licensing",
    description:
      "Oversees business registration processes and issues trade licenses. Ensures compliance with business regulations while providing efficient and transparent services to entrepreneurs.",
  },
  {
    title: "Public-Private Partnerships",
    description:
      "Facilitates collaboration between government and private sector. Develops and manages PPP projects that drive infrastructure development and service delivery in key economic sectors.",
  },
  {
    title: "E-Commerce & Digital Trade",
    description:
      "Promotes digital transformation in business operations. Supports businesses in adopting e-commerce platforms and digital tools to expand their market reach and operational efficiency.",
  },
];

const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
  <AnimatedSection>
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
    </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
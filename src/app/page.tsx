import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import FeaturedPartners from "@/components/FeaturedPartners";
import Footer from "@/components/Footer";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import { FaBusinessTime, FaChartLine, FaHandshake, FaInfoCircle, FaStore, FaUsers, FaFileContract, FaIndustry } from "react-icons/fa"
import DepartmentsSection from "@/components/Departments";
import PartnerSection from "@/components/PartnerSection";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const cardsData = [
    {
      title: "Business Registration",
      description: "Register your business and access support services for local enterprises in Imo State.",
      icon: FaBusinessTime,
      link: "/services"
    },
    {
      title: "Investment Opportunities",
      description: "Discover investment opportunities and incentives for businesses in Imo State.",
      icon: FaChartLine,
      link: "/projects"
    },
    {
      title: "Trade Events",
      description: "Access upcoming trade events and opportunities.",
      icon: FaFileContract,
      link: "/events"
    },
    {
      title: "About Us",
      description: "Learn about the Imo State Ministry of Trade, Commerce & Investment.",
      icon: FaInfoCircle,
      link: "/about"
    },
  ];

  // departments
  const tradeDepartments = [
    {
      title: "Department of Commerce & Industry",
      desc: "Oversees commercial activities, industrial development, and business regulations to foster a thriving business environment in Imo State.",
    },
    {
      title: "Department of Investment Promotion",
      desc: "Attracts and facilitates both local and foreign investments through strategic partnerships and investor-friendly policies.",
    },
    {
      title: "Department of Trade Development",
      desc: "Promotes trade facilitation, market access, and capacity building for local businesses to compete regionally and globally.",
    },
    {
      title: "Department of Public-Private Partnerships",
      desc: "Coordinates collaborative projects between government and private sector to drive economic growth and infrastructure development.",
    },
  ];

  
  return (
    <>

     
      {/* hero section */}
      <div className="relative">
  <HeroSection
    title="Driving Economic Growth Through Trade & Investment"
    description="Fostering a vibrant business environment, promoting commerce, and attracting sustainable investments to Imo State."
    buttonText="Explore Opportunities"
    backgroundImages={[
      "/images/hero1.png",
      "/images/hero2.png",
      "/images/hero3.png",
    ]}
  />

  {/* InfoCards - Full Width */}
  <div className="w-full bg-[#06163A] lg:bg-transparent py-8 relative lg:absolute lg:left-0 lg:bottom-0 lg:translate-y-1/2 z-20">

      <section className="w-full px-6">
        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6">
          {cardsData.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-6 shadow-md 
                         transition-all duration-500 ease-in-out
                         scale-100 lg:scale-75 
                         hover:lg:flex-[2] hover:lg:scale-100
                         hover:-translate-y-2 hover:shadow-2xl flex-1"
            >
              {/* Irregular purple border effect */}
              <div
                className="absolute inset-0 rounded-xl border-4 border-[#06163A] 
                           [clip-path:polygon(6%_0,94%_0,100%_10%,100%_94%,94%_100%,6%_100%,0_90%,0_6%)] 
                           pointer-events-none"
              ></div>
<AnimatedSection>
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#06163A] mb-3 bg-gray-100">
                <item.icon className="text-black text-base" />
              </div>
              </AnimatedSection>
              <AnimatedSection >

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 text-graay-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {item.description}
              </p>
              </AnimatedSection>
              {/* Link */}
              <Link
                href={item.link}
                className="text-purple-600 font-semibold hover:underline"
              >
                More info
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  




</div>

      {/* About Mandate Section */}
      <AboutSection
  title="Imo State Ministry of Trade, Commerce & Investment"
  description={`The Ministry serves as the driving force behind Imo State's economic transformation, creating an enabling environment for businesses to thrive.  

Our strategic initiatives focus on attracting both local and foreign investments, developing industrial parks, and implementing policies that stimulate economic growth. We are committed to building strong public-private partnerships that create jobs and wealth for the people of Imo State.

Through our various departments, we provide essential services including business registration, investment facilitation, trade promotion, and policy formulation to ensure sustainable economic development across all sectors.`}
  image="/images/heromain.png"
  link="/about"
  buttonText="Our Mandate"
/>
      {/* departments */}
<DepartmentsSection
      title="Our Departments & Their Functions"
      subtitle="Explore how each department within the Ministry of Trade, Commerce & Investment drives economic growth, facilitates business, and promotes investment in Imo State."
      departments={tradeDepartments}
      image="/images/depart1.png" 
      buttonText="View Department Details"
      buttonLink="/departments"
    />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.png"
        imageAlt="Honorable Commissioner for Trade, Commerce & Investment, Imo State"
        title="About The Commissioner"
       bio="Hon. Barr. Rex Anunobi, fondly called Sokom, is the Commissioner for Trade, Commerce, and Investment in Imo State. A seasoned lawyer and astute politician, he has played a key role in driving policies that strengthen commerce and attract investment to the state. His leadership has focused on creating enabling environments for businesses to thrive, especially supporting small and medium enterprises."

      details="Known for his pragmatic approach, Barr. Anunobi has earned respect for balancing legal expertise with developmental strategies. He is also admired for his grassroots connection and ability to mobilize people towards shared economic goals. Through his service, he continues to contribute significantly to Imo State’s economic growth and stability."
      />
      <div className="bg-white">

    
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

     
      {/* Featured Partners Section */}
      <FeaturedPartners />
    {/* partner with us */}
<PartnerSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

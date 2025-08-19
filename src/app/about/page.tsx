import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import StructureSection from "@/app/about/StructuresSection";
import Footer from "../../components/Footer";
import { TopHero } from "../../components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";
import Stats from "@/components/Stats";
import PartnerSection from "@/components/PartnerSection";


export default function AboutUs() {
    
    const departments = [
        {
          id: 1,
          title: "Department of Trade & Commerce",
          description:
            "Oversees domestic and international trade policies, trade facilitation, and market development. Implements programs to boost local commerce and ensure fair trade practices across Imo State.",
        },
        {
          id: 2,
          title: "Department of Investment Promotion",
          description:
            "Attracts and facilitates both local and foreign investments. Manages investor relations, promotes investment opportunities, and streamlines investment processes to drive economic growth in Imo State.",
        },
        {
          id: 3,
          title: "Department of MSME Development",
          description:
            "Supports the growth of Micro, Small, and Medium Enterprises through capacity building, access to finance, and business development services to enhance their competitiveness and sustainability.",
        },
        {
          id: 4,
          title: "Department of Industry & Private Sector Development",
          description:
            "Promotes industrial growth and private sector participation. Facilitates public-private partnerships and implements policies to enhance industrial development and economic diversification.",
        },
        {
          id: 5,
          title: "Department of Planning, Research & Statistics",
          description:
            "Collects and analyzes economic data to inform policy decisions. Conducts research on trade and investment trends, and monitors the implementation of ministry programs and projects.",
        },
        {
          id: 6,
          title: "Department of Administration & Human Resources",
          description:
            "Manages staff welfare, recruitment, training, and development. Oversees all internal administrative functions to ensure efficient service delivery within the ministry.",
        },
        {
          id: 7,
          title: "Department of Finance & Accounts",
          description:
            "Oversees budgeting, revenue generation, and financial management. Ensures accountability and transparency in the ministry's financial operations and resource allocation.",
        },
      ];
      
    return (
        <div className="h-screen bg-white">

            {/* Top Hero */}
            <TopHero
                 title="About Us"
                 subtitle="The Ministry of Trade, Commerce, and Investment, Imo State, is dedicated to fostering economic growth, promoting trade and investment opportunities, and creating an enabling environment for businesses to thrive in Imo State."
                 bgImage="/images/depart1.png"
            />
            
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Trade, Commerce, and Investment in Imo State serves as a key driver of economic transformation, focusing on trade facilitation, commerce development, and investment promotion. Established to enhance economic growth and development, the ministry is responsible for implementing policies and programs that support businesses, improve trade relations, and attract both local and foreign investments. Through strategic partnerships and innovative approaches, we are committed to positioning Imo State as a premier investment destination and commercial hub in Nigeria."
                imgSrc="/images/depart2.png"
                altText="Imo State Ministry of Livestock Development - Advancing agricultural development"
            />
          <Stats/>

           <MissionVisionCard
            missionTitle="Our Mission"
            missionText="To promote and facilitate trade, commerce, and investment opportunities in Imo State by creating an enabling business environment, fostering public-private partnerships, and implementing policies that drive economic growth and sustainable development."
            missionImage="/images/mission.png"
            visionTitle="Our Vision"
            visionText="To position Imo State as a leading commercial and investment hub in Nigeria, known for its business-friendly environment, thriving trade relations, and robust economic growth that benefits all stakeholders."
            visionImage="/images/hero3.png"
            />
            <TeamPage />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructureSection
      title="Our Structure"
      subtitle="Our specialized departments work collaboratively to facilitate trade, promote commerce, and attract investments through innovative policies, business support services, and strategic partnerships across Imo State."
      imgSrc="/images/building.png"
      imgAlt="Imo State Ministry Building"
      departments={departments}
    />
          <PartnerSection/>
            {/* Footer */}
            <Footer />
        </div>
    )
}
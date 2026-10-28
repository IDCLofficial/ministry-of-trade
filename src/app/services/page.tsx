import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";
import PartnerSection from "../../components/PartnerSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Registration and Investment Services",
  description: "Trade facilitation, investment promotion, MSME support, export promotion, business registration and licensing and e-commerce in Imo State.",
  path: "/services",
});


export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                 title="What we do"
                 subtitle="We provide a range of services to support trade, commerce, and investment opportunities in Imo State."
                 bgImage="/images/gradient1.png"
            />
            <ServiceCard />
            
          <PartnerSection/>
            {/* Footer */}
            <Footer />
        </div>
    )
}
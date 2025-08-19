import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";
import PartnerSection from "../../components/PartnerSection";

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
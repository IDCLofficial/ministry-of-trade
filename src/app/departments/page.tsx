import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import PartnerSection from "@/components/PartnerSection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
                 title="Departments"
                 subtitle=""
                 bgImage="/images/hero3.png"
            />
      <UnitsTabsSection />
    
      <PartnerSection/>
      <Footer />
    </div>
  );
}

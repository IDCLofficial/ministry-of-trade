import EventsListSection from "./EventsListSection";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero
                 title="Events"
                 subtitle=""
                 bgImage="/images/gradient2.png"
            />
      
      <EventsListSection />
    <PartnerSection/>
      <Footer />
    </div>
  );
}

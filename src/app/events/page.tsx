import EventsListSection from "./EventsListSection";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";
import { TopHero } from "@/components/TopHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events",
  description: "Events organised by the Ministry of Trade, Commerce and Investment, Imo State Government.",
  path: "/events",
});


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

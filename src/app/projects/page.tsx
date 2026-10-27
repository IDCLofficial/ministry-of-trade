import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/app/projects/Projects";
import PartnerSection from "@/components/PartnerSection";
import Stats from "@/components/Stats";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Projects and programmes of the Ministry of Trade, Commerce & Investment, Imo State Government.",
  path: "/projects",
});


export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero
                 title="Projects & Initiatives"
                 subtitle="Explore our initiatives in trade, commerce, and investment across Imo State."
                 bgImage="/images/mission.png"
            />
          <Stats/>
           
            <OngoingProjects />
            <PartnerSection/>
      {/* Footer */}
      <Footer />

        </div>
    )
}
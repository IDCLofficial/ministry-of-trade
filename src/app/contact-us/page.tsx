import React from "react";
import ContactInfoSection from "./ContactInfoSection";
import ContactFormSection from "./ContactFormSection";
import ContactImageSection from "./ContactImageSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import PartnerSection from "@/components/PartnerSection";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      {/* top hero */}
      <TopHero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or questions."
        bgImage="/images/gradient2.png"
      />
      <section className="w-full mx-auto py-20 px-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-8 relative">    
            <div className="flex-1">
              <ContactInfoSection />
            </div>
            <div className="hidden md:flex flex-1 justify-center items-start absolute right-0 z-5">
              <ContactFormSection />
            </div>
        </div>
        <ContactImageSection />
        <div className="md:hidden">
          <ContactFormSection />
        </div>
      </section>
     <PartnerSection/>
      <Footer />
    </main>
  );
}

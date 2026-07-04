import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyBro } from "@/components/sections/WhyBro";
import { Community } from "@/components/sections/Community";
import { ResearchImpact } from "@/components/sections/ResearchImpact";
import { InterestSection } from "@/components/sections/InterestSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen pt-24">
        <Hero />
        <About />
        <WhyBro />
        <Community />
        <ResearchImpact />
        <InterestSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

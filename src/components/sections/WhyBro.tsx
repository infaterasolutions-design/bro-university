import { SectionHeading } from "@/components/ui/SectionHeading";
import { Floater } from "@/components/ui/Floater";

export function WhyBro() {
  const features = [
    {
      num: "01",
      title: "Research From Day One",
      desc: "Stop waiting for graduation. Start contributing to meaningful scientific discovery in your first semester.",
    },
    {
      num: "02",
      title: "Future-Focused Programs",
      desc: "Curriculums designed backward from the technological needs of 2050, not leftover from 1990.",
    },
    {
      num: "03",
      title: "Innovation Ecosystem",
      desc: "A melting pot of founders, scientists, and engineers building the next wave of deep-tech unicorns.",
    },
    {
      num: "04",
      title: "Investor-Ready Vision",
      desc: "Structuring talent and intellectual property pipelines that venture capital actively wants to back.",
    }
  ];

  return (
    <section id="why-bro" className="py-24 bg-brand-surface relative border-y border-brand-surface-3">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative">
          <SectionHeading>Built for Future Leaders</SectionHeading>
          
          <Floater animation="slow" delay="0s" className="absolute -top-10 right-10 lg:right-40 z-10 px-4 py-2 rounded-full bg-brand-orange-primary/10 border border-brand-orange-primary/30 shadow-lg">
            <span className="text-xs font-display font-bold text-brand-orange-primary uppercase tracking-wider">100% Pre-seed Ready</span>
          </Floater>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature) => (
            <div 
              key={feature.num}
              className="group flex flex-col p-8 rounded-3xl bg-brand-background border border-brand-surface-2 hover:border-brand-orange-primary/40 transition-colors duration-300"
            >
              <span className="text-5xl font-display font-black text-brand-surface-3 group-hover:text-brand-orange-primary/20 transition-colors mb-8">
                {feature.num}
              </span>
              <h3 className="text-xl font-display font-bold text-brand-text-main mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-text-muted font-body leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

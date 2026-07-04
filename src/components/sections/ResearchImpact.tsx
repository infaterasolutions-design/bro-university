import { SectionHeading } from "@/components/ui/SectionHeading";
import { Floater } from "@/components/ui/Floater";

export function ResearchImpact() {
  const researches = [
    "AI Healthcare Systems",
    "Neuro Information Systems",
    "Neuropathic Pain Research",
    "Semiconductor Innovation",
    "Human-Machine Intelligence",
    "Quantum Computing Access"
  ];

  return (
    <section id="research" className="py-12 md:py-24 bg-brand-surface relative border-t border-brand-surface-3">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          subtitle="Focused on breakthrough innovation in technologies that improve human life — not just industries."
        >
          Solving Real Human Problems
        </SectionHeading>

        <div className="relative mt-16">
          <Floater animation="diagonal" delay="0s" className="absolute -top-12 left-10 z-10 px-3 py-1.5 rounded bg-brand-surface border border-brand-surface-3 shadow-lg">
            <span className="text-[10px] font-display text-brand-text-muted font-mono">&gt;_ SYS.OP</span>
          </Floater>

          <Floater animation="diagonal" delay="2s" className="absolute -bottom-10 right-20 z-10 px-3 py-1.5 rounded bg-brand-surface border border-brand-surface-3 shadow-lg">
            <span className="text-[10px] font-display text-brand-orange-primary font-mono">STATUS: OPTIMAL</span>
          </Floater>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {researches.map((research, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-brand-background border border-brand-surface-2 hover:border-brand-surface-3 transition-colors duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-surface-2 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange-primary/10 transition-all duration-300">
                <div className="w-4 h-4 rounded-full bg-brand-text-muted group-hover:bg-brand-orange-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-brand-text-main mb-2">
                  {research}
                </h3>
                <p className="text-sm font-body text-brand-text-faint">
                  Technology should improve human life — not just industries
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

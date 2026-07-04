import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function About() {
  const topics = [
    "AI & Machine Learning",
    "Neuroscience & Brain Technology",
    "Semiconductor & Chip Design",
    "Neuroinformatics",
    "Robotics & Future Computing",
    "Deep Tech Startups"
  ];

  const phases = [
    {
      title: "Neuroscience School",
      phase: "Phase 1",
      status: "Active Priority",
      active: true,
      text: "text-brand-orange-primary",
      bg: "bg-brand-orange-primary",
      border: "border-brand-orange-primary/30",
      shadow: "shadow-[0_4px_20px_rgba(255,123,27,0.1)]",
    },
    {
      title: "AI School",
      phase: "Phase 2",
      status: "Upcoming",
      active: true, // Making them all vibrant for the multicolour feel
      text: "text-brand-accent-blue",
      bg: "bg-brand-accent-blue",
      border: "border-brand-accent-blue/30",
      shadow: "shadow-[0_4px_20px_rgba(0,240,255,0.1)]",
    },
    {
      title: "Semiconductor School",
      phase: "Phase 3",
      status: "Future Rollout",
      active: true,
      text: "text-brand-accent-lime",
      bg: "bg-brand-accent-lime",
      border: "border-brand-accent-lime/30",
      shadow: "shadow-[0_4px_20px_rgba(57,255,20,0.1)]",
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading subtitle="BRO UNIVERSITY is being built to bridge the gap between education, research, startups, and real-world innovation.">
          Education for the Next 50 Years
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Left: Illustrations and Topics */}
          <div className="space-y-12">
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden border border-brand-surface-3 shadow-2xl animate-float">
                <Image src="/neuroscience_vector.png" alt="Neuroscience Vector" fill className="object-cover" />
              </div>
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden border border-brand-surface-3 shadow-2xl animate-float" style={{ animationDelay: "1s" }}>
                <Image src="/ai_vector.png" alt="AI & Semiconductor Vector" fill className="object-cover" />
              </div>
            </div>
            
            <div>
              <p className="text-lg font-body text-brand-text-main mb-6">
                We are creating an ecosystem where students work on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div key={index} className="p-4 rounded-xl bg-brand-surface border border-brand-surface-3 flex items-center gap-3 hover:border-brand-orange-primary/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-orange-primary" />
                    <span className="font-body text-brand-text-main">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Rollout Panel */}
          <div className="bg-brand-surface-2 rounded-3xl p-8 md:p-10 border border-brand-surface-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange-primary/5 rounded-full blur-[80px]" />
            <h3 className="text-2xl font-display font-bold text-brand-text-main mb-8">Strategic Rollout Plan</h3>
            
            <div className="space-y-6 relative">
              {/* Connecting Line */}
              <div className="absolute left-[15px] top-[24px] bottom-[24px] w-0.5 bg-brand-surface-3" />
              
              {phases.map((phase, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  <div className={`mt-1.5 w-8 h-8 rounded-full flex items-center justify-center border-4 border-brand-surface-2 z-10 shrink-0 ${phase.bg}`}>
                    <div className={`w-2.5 h-2.5 rounded-full bg-brand-text-main`} />
                  </div>
                  <div className={`flex-1 p-5 rounded-2xl border bg-brand-surface ${phase.border} ${phase.shadow}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold font-body uppercase tracking-wider ${phase.text}`}>
                        {phase.phase}
                      </span>
                      <span className="text-xs font-body text-brand-text-muted bg-brand-background px-2 py-1 rounded-md">
                        {phase.status}
                      </span>
                    </div>
                    <h4 className={`text-lg font-display font-bold text-brand-text-main`}>
                      {phase.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

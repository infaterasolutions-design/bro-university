import { Button } from "@/components/ui/Button";

export function Community() {
  return (
    <section id="community" className="py-32 bg-brand-background relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange-primary/5 via-transparent to-transparent blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Community Statement */}
          <div className="flex flex-col items-start gap-8">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-brand-text-main">
              More Than a University <br />
              <span className="text-brand-orange-primary">— A Movement</span>
            </h2>
            
            <p className="text-xl font-body text-brand-text-muted leading-relaxed max-w-lg">
              HEY BRO is a future innovation community for students, researchers, creators, and dreamers who want to shape the future of humanity through technology.
            </p>
            
            <div className="flex flex-col gap-2 font-display text-2xl font-semibold text-brand-text-main my-4">
              <span>Join the movement.</span>
              <span>Build the future.</span>
              <span className="text-brand-orange-primary">Race Up Your Brain.</span>
            </div>

            <Button variant="primary" className="mt-4">Join HEY BRO</Button>
          </div>

          {/* Right: Motion Panels / Quotes */}
          <div className="relative flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-brand-surface border border-brand-surface-2 ml-0 lg:ml-12 shadow-2xl relative z-20">
              <p className="text-lg font-body text-brand-text-main italic">
                "We don't want to just learn about the future, we want the tools and funding to build it right now."
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-surface-3" />
                <div>
                  <div className="text-sm font-display font-bold text-brand-text-main">Future Innovator</div>
                  <div className="text-xs font-body text-brand-text-faint">Gen Z Tech Community</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-surface-2 border border-brand-surface-3 mr-0 lg:mr-12 opacity-80 relative z-10 -mt-4">
              <p className="text-lg font-body text-brand-text-muted italic">
                "Traditional models are too slow. The next breakthrough in neuroscience will come from a college dorm."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

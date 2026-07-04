import { Button } from "@/components/ui/Button";
import { FloatingCard } from "@/components/ui/FloatingCard";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-0 overflow-hidden">
      {/* Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-orange-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange-primary/30 bg-brand-orange-primary/10 text-brand-orange-primary font-body text-sm font-semibold tracking-wide uppercase">
            BRO UNIVERSITY
          </div>
          
          <h1 className="font-display text-[17vw] leading-[0.85] font-black uppercase tracking-[-0.04em] text-brand-text-main md:text-7xl lg:text-[5.5rem] md:leading-[1.1] md:font-bold md:normal-case md:tracking-tighter">
            Race <br className="md:hidden" />
            Up <br className="hidden md:block" />
            Your <br className="md:hidden" />
            <span className="text-brand-orange-primary">Brain</span>
          </h1>
          
          <p className="text-lg md:text-xl font-body text-brand-text-muted leading-relaxed max-w-xl">
            <strong className="text-brand-text-main font-semibold">HEY BRO, READY TO BUILD THE FUTURE?</strong><br />
            India’s next-generation deep tech university focused on Artificial Intelligence, Neuroscience, Semiconductors, Nanotechnology, and Future Innovation.
          </p>
          <p className="text-lg font-body text-brand-text-muted leading-relaxed max-w-xl">
            Not another traditional university. A research-driven ecosystem where students become innovators, scientists, founders, and creators of future technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="primary">Join Early Access</Button>
            <Button variant="secondary">Explore Vision</Button>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Pre-seed funding focused", "Gen Z deep-tech branding", "Neuroscience school first"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-md bg-brand-surface border border-brand-surface-3 text-brand-text-faint text-xs font-body uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-auto lg:h-[600px] mt-8 lg:mt-0 w-full flex flex-col items-center lg:block">
          {/* Center Card */}
          <FloatingCard className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-sm lg:w-72 h-auto lg:h-80 flex flex-col justify-between border-brand-orange-primary/30 bg-brand-surface/80 shadow-[0_0_50px_rgba(255,123,27,0.15)] z-20 p-6 lg:p-0" delay="0s">
            <div className="w-12 h-12 rounded-full bg-brand-orange-primary/20 flex items-center justify-center lg:m-6 mb-6">
              <div className="w-4 h-4 rounded-full bg-brand-orange-primary" />
            </div>
            <div className="lg:m-6">
              <div className="text-3xl font-display font-bold text-brand-text-main mb-2">10x</div>
              <div className="text-sm font-body text-brand-text-muted">Research Output Acceleration</div>
            </div>
          </FloatingCard>

          {/* Orbiting Cards (Stacked Grid on Mobile) */}
          <div className="grid grid-cols-2 gap-3 mt-6 lg:mt-0 lg:block w-full max-w-sm lg:max-w-none">
            <FloatingCard className="relative lg:absolute lg:top-10 lg:right-10 w-full lg:w-48 p-4 z-10" delay="2s" animation="diagonal">
              <div className="text-brand-text-main font-display font-semibold mb-1">Investor clarity</div>
              <div className="text-xs text-brand-text-faint font-body">Pre-seed ready model</div>
            </FloatingCard>

            <FloatingCard className="relative lg:absolute lg:bottom-20 lg:right-4 w-full lg:w-48 p-4 z-30" delay="4s" animation="slow">
              <div className="text-brand-text-main font-display font-semibold mb-1">Student interest</div>
              <div className="text-xs text-brand-text-faint font-body">High traction metric</div>
            </FloatingCard>

            <FloatingCard className="col-span-2 relative lg:absolute lg:top-32 lg:left-0 w-full lg:w-48 p-4 z-10" delay="1s" animation="medium">
              <div className="text-brand-text-main font-display font-semibold mb-1">Clean UI/UX</div>
              <div className="text-xs text-brand-text-faint font-body">Gen Z aesthetic</div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}

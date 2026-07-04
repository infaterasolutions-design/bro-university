import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-orange-primary/10 border-t border-brand-orange-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange-primary/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-brand-text-main mb-8">
          The Future Will Belong to Innovators
        </h2>
        
        <p className="text-xl md:text-2xl font-body text-brand-text-main/90 mb-4 max-w-2xl mx-auto">
          BRO UNIVERSITY is building a next-generation ecosystem where education meets intelligence, research, and future technology.
        </p>
        
        <p className="text-lg font-display font-bold text-brand-orange-primary mb-12 uppercase tracking-widest">
          HEY BRO, THE FUTURE STARTS HERE.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-xl">
            Become an Early Supporter
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto px-10 py-5 text-xl border-brand-orange-primary/30 hover:border-brand-orange-primary bg-brand-background/50 hover:bg-brand-background">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}

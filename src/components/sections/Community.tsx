import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Community() {
  return (
    <section id="community" className="py-16 md:py-32 bg-brand-background relative overflow-hidden">
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

          {/* Right: Graphic Bento Grid / Mobile 2x2 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[500px]">
            {/* Top Row */}
            <div className="col-span-1 md:col-span-2 relative rounded-sm md:rounded-3xl aspect-square md:aspect-auto overflow-hidden border-2 border-brand-orange-primary md:border-brand-surface-3 shadow-xl bg-white animate-float">
              <Image src="/illustration-1.jpg" alt="Community moving forward" fill className="object-contain p-2 md:p-6" />
            </div>
            <div className="col-span-1 md:col-span-1 relative rounded-sm md:rounded-3xl aspect-square md:aspect-auto overflow-hidden border-2 border-brand-orange-primary md:border-brand-surface-3 shadow-xl bg-white animate-float [animation-delay:1s]">
              <Image src="/illustration-2.jpg" alt="Community connection" fill className="object-contain p-2 md:p-6" />
            </div>
            
            {/* Bottom Row */}
            <div className="col-span-1 relative rounded-sm md:rounded-3xl aspect-square md:aspect-auto overflow-hidden border-2 border-brand-orange-primary md:border-brand-surface-3 shadow-xl bg-[#f2f2f2] animate-float [animation-delay:2s]">
              <Image src="/illustration-3.jpg" alt="Active student life" fill className="object-contain p-2 md:p-4" />
            </div>
            <div className="col-span-1 relative rounded-sm md:rounded-3xl aspect-square md:aspect-auto overflow-hidden border-2 border-brand-orange-primary md:border-brand-surface-3 shadow-xl bg-white animate-float [animation-delay:3s]">
              <Image src="/illustration-5.jpg" alt="Campus lifestyle" fill className="object-contain p-2 md:p-6" />
            </div>
            {/* Hidden on mobile to keep a perfect 2x2 square grid */}
            <div className="hidden md:block col-span-1 md:col-span-1 relative rounded-sm md:rounded-3xl aspect-square md:aspect-auto overflow-hidden border-2 border-brand-orange-primary md:border-brand-surface-3 shadow-xl bg-white animate-float [animation-delay:4s]">
              <Image src="/illustration-4.jpg" alt="Student celebration" fill className="object-contain p-2 md:p-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

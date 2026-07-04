"use client";

import { useState } from "react";
import { CounterCard } from "@/components/ui/CounterCard";
import { Button } from "@/components/ui/Button";

export function InterestSection() {
  const [counts, setCounts] = useState({
    neuroscience: 1248,
    ai: 864,
    semiconductor: 472,
  });

  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success
    school: "neuroscience",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ ...formState, status: "submitting" });

    // Simulate API call
    setTimeout(() => {
      setCounts((prev) => ({
        ...prev,
        [formState.school as keyof typeof counts]: prev[formState.school as keyof typeof counts] + 1,
      }));
      setFormState({ ...formState, status: "success" });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, status: "idle" }));
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 800);
  };

  return (
    <section id="interest" className="py-24 bg-brand-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Counters */}
          <div>
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-text-main mb-4">
                Join the Waitlist
              </h2>
              <p className="text-xl text-brand-text-muted font-body">
                Our schools are filling up fast. Register your early interest.
              </p>
            </div>

            <div className="grid gap-6">
              <CounterCard 
                label="Neuroscience School" 
                count={counts.neuroscience} 
                colorClass="hover:border-brand-orange-primary/50" 
              />
              <CounterCard 
                label="AI School" 
                count={counts.ai} 
                colorClass="hover:border-brand-accent-blue/50"
              />
              <CounterCard 
                label="Semiconductor School" 
                count={counts.semiconductor} 
                colorClass="hover:border-brand-accent-lime/50"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-brand-surface rounded-3xl p-8 md:p-12 border border-brand-surface-3 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-brand-text-main mb-8">
              Express Interest
            </h3>

            {formState.status === "success" ? (
              <div className="bg-brand-orange-primary/10 border border-brand-orange-primary/30 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange-primary/20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-display font-bold text-brand-text-main mb-2">Interest Recorded!</h4>
                <p className="text-brand-text-muted font-body">
                  Thank you for joining the movement. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-body font-medium text-brand-text-muted">Full Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-brand-surface-2 border border-brand-surface-3 text-brand-text-main placeholder-brand-text-faint focus:outline-none focus:border-brand-orange-primary transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-body font-medium text-brand-text-muted">Email</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-brand-surface-2 border border-brand-surface-3 text-brand-text-main placeholder-brand-text-faint focus:outline-none focus:border-brand-orange-primary transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-body font-medium text-brand-text-muted">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-brand-surface-2 border border-brand-surface-3 text-brand-text-main placeholder-brand-text-faint focus:outline-none focus:border-brand-orange-primary transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="school" className="text-sm font-body font-medium text-brand-text-muted">Interested School</label>
                  <select 
                    id="school"
                    required
                    value={formState.school}
                    onChange={(e) => setFormState({...formState, school: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-brand-surface-2 border border-brand-surface-3 text-brand-text-main focus:outline-none focus:border-brand-orange-primary transition-colors appearance-none"
                  >
                    <option value="neuroscience">Neuroscience School</option>
                    <option value="ai">AI School</option>
                    <option value="semiconductor">Semiconductor School</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-body font-medium text-brand-text-muted">Why are you interested?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-brand-surface-2 border border-brand-surface-3 text-brand-text-main placeholder-brand-text-faint focus:outline-none focus:border-brand-orange-primary transition-colors resize-none" placeholder="Tell us about your background and vision..."></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={formState.status === "submitting"}
                >
                  {formState.status === "submitting" ? "Submitting..." : "Submit Interest"}
                </Button>

                <p className="text-xs text-brand-text-faint text-center mt-4 font-body">
                  * Demo form only. In production, connect this to CRM, database, or waitlist system.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

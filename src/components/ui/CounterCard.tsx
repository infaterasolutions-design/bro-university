import { cn } from "@/lib/utils";

interface CounterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  count: number;
  colorClass?: string;
}

export function CounterCard({ label, count, colorClass = "border-brand-orange-primary/30", className, ...props }: CounterCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col p-6 rounded-2xl bg-brand-surface border border-brand-surface-3 transition-colors hover:border-transparent",
        colorClass,
        className
      )}
      {...props}
    >
      <span className="text-brand-text-faint font-body text-sm uppercase tracking-wider mb-2">
        {label}
      </span>
      <span className="text-4xl md:text-5xl font-display font-bold text-brand-text-main tabular-nums">
        {count.toLocaleString()}
      </span>
    </div>
  );
}

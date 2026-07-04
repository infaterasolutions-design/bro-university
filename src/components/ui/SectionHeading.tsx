import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <h2 
        className={cn("font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text-main", className)}
        {...props}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-brand-text-muted font-body max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: "0s" | "1s" | "2s" | "3s" | "4s" | "5s";
}

export function FloatingCard({ children, className, delay = "0s", ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "animate-float bg-brand-surface border border-brand-surface-3 rounded-2xl p-6 shadow-2xl backdrop-blur-md",
        className
      )}
      style={{ animationDelay: delay }}
      {...props}
    >
      {children}
    </div>
  );
}

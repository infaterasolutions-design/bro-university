import { cn } from "@/lib/utils";

interface FloaterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "float" | "slow" | "medium" | "diagonal" | "pulse";
  delay?: "0s" | "1s" | "2s" | "3s" | "4s" | "5s";
  hideOnMobile?: boolean;
}

export function Floater({ 
  children, 
  className, 
  animation = "float", 
  delay = "0s", 
  hideOnMobile = false,
  ...props 
}: FloaterProps) {
  
  const animationClass = {
    float: "animate-float",
    slow: "animate-float-slow",
    medium: "animate-float-medium",
    diagonal: "animate-float-diagonal",
    pulse: "animate-pulse-glow"
  }[animation];

  return (
    <div
      className={cn(
        "relative",
        animationClass,
        hideOnMobile ? "hidden md:block" : "block",
        className
      )}
      style={{ animationDelay: delay }}
      {...props}
    >
      {children}
    </div>
  );
}

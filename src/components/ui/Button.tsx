import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-orange-primary text-brand-surface-3 hover:bg-brand-orange-hover active:bg-brand-orange-active hover:-translate-y-0.5",
      secondary: "bg-brand-surface/50 border border-brand-surface-3 text-brand-text-main hover:bg-brand-surface",
      ghost: "bg-transparent text-brand-text-muted hover:text-brand-text-main hover:bg-brand-surface-2",
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-8 py-4 font-display font-medium text-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-primary disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

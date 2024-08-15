import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-lg uppercase font-bold tracking-wider border-b-[6px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-500 text-primary-foreground border-yellow-600 hover:bg-yellow-600 hover:border-yellow-700",
        destructive:
          "bg-red-500 text-primary-foreground border-red-600 hover:bg-red-600 hover:border-red-700",
        indigo:
          "bg-indigo-500 text-primary-foreground border-indigo-600 hover:bg-indigo-600 hover:border-indigo-700",
        ghost:
          "bg-transparent text-primary-foreground border-none hover:bg-background hover:border-none",
      },
      size: {
        default: "h-[60px] px-12 py-2",
        sm: "h-[38px] px-6 py-2 border-b-[4px] text-md",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

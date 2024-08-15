import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const h2Variants = cva("font-[800] uppercase font-xxl leading-[1em]", {
  variants: {
    variant: {
      yellow: "text-yellow-500 text-shadow shadow-yellow-600",
      indigo: "text-indigo-500 text-shadow shadow-indigo-600",
      red: "text-red-500 text-shadow shadow-red-600",
    },
  },
  defaultVariants: {
    variant: "yellow",
  },
});

export interface H2Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h2Variants> { }

const H2 = React.forwardRef<HTMLParagraphElement, H2Props>(
  ({ className, variant, ...props }, ref) => (
    <h2
      ref={ref}
      className={
        `${h2Variants({ variant, className })} font-extrabold text-5xl uppercase leading-[1em] mb-4 mt-8`
      }
      {...props}
    />
  )
);
H2.displayName = "H2";

export { H2 };

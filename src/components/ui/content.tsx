import { cn } from "@/lib/utils";
import React from "react";

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("w-full mx-auto p-[4vw] xl:p-0", className)}
    {...props}
  >
    <div className="max-w-screen-xl mx-auto">{children}</div>
  </section>
));
Content.displayName = "Content";

export { Content };


import { cn } from "@/lib/utils";
import React from "react";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export function CustomLink({ className, ...props }: CustomLinkProps) {
  return (
    <a
      className={cn(
        "font-medium text-zinc-950 underline decoration-zinc-400 decoration-dotted underline-offset-4 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:text-zinc-300",
        className
      )}
      {...props}
    />
  );
}

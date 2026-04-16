import { cn } from "@/lib/utils";
import React from "react";
import { LucideArrowUpRight, ExternalLink } from 'lucide-react';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  description: string;
  isExternal?: boolean;
}

export function ButtonLink({ name, description, isExternal, className, ...props }: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "group flex items-center justify-between rounded-lg -mx-3 px-3 py-2 transition-all hover:bg-black/5 dark:hover:bg-white/5",
        className
      )}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-medium text-zinc-950 underline decoration-zinc-400 decoration-dotted underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-600">
          {name}
        </span>
        <span className="text-zinc-300 dark:text-zinc-800">·</span>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      {isExternal ? (
        <ExternalLink 
          size={13} 
          strokeWidth={2.5}
          className="text-zinc-400" 
        />
      ) : (
        <LucideArrowUpRight 
          size={15} 
          strokeWidth={2.5}
          className="text-zinc-400" 
        />
      )}
    </a>
  );
}

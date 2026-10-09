import { cn } from "@/lib/utils";
import React from "react";
import { LucideArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  description: string;
  isExternal?: boolean;
}

export function ButtonLink({ name, description, isExternal, className, href, ...props }: ButtonLinkProps) {
  const isInternal = href && href.startsWith('/');
  
  const content = (
    <>
        <span className="col-start-1 row-start-1 min-w-0 font-medium text-zinc-950 underline decoration-zinc-400 decoration-dotted underline-offset-4 sm:whitespace-nowrap dark:text-zinc-50 dark:decoration-zinc-600">
          {name}
        </span>
        <span className="col-start-1 row-start-2 min-w-0 text-zinc-600 sm:col-start-2 sm:row-start-1 dark:text-zinc-400">{description}</span>
      {isExternal ? (
        <ExternalLink 
          size={13} 
          strokeWidth={2.5}
          className="col-start-2 row-start-1 self-start mt-1 text-zinc-400 sm:col-start-3" 
        />
      ) : (
        <LucideArrowUpRight 
          size={15} 
          strokeWidth={2.5}
          className="col-start-2 row-start-1 self-start mt-1 text-zinc-400 sm:col-start-3" 
        />
      )}
    </>
  );

  const classes = cn(
    "group col-span-full grid grid-cols-subgrid items-baseline gap-y-1 rounded-lg px-3 py-2 transition-colors hover:bg-black/5 dark:hover:bg-white/5",
    className
  );

  if (isInternal) {
    return (
      <Link href={href as string} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}

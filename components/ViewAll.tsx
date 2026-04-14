import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type ViewAllProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ViewAll({ className, ...props }: ViewAllProps) {
  return (
    <a
      className={cn(
        "group mt-2 flex w-fit items-center gap-1 text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50",
        className
      )}
      {...props}
    >
      <span>view all</span>
      <ArrowRight
        size={12}
        strokeWidth={2.5}
        className="transition-colors"
      />
    </a>
  );
}

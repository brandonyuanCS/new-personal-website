import React from "react";

interface ProjectLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  description: string;
}

export function ProjectLink({ name, description, className, ...props }: ProjectLinkProps) {
  return (
    <a
      {...props}
      className={`group flex items-center justify-between rounded-lg -mx-3 px-3 py-2 transition-all hover:bg-black/5 dark:hover:bg-white/5 ${className || ''}`}
    >
      <div className="flex items-baseline gap-2">
        <span className="font-medium text-zinc-950 underline decoration-zinc-400 decoration-dotted underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-600">
          {name}
        </span>
        <span className="text-zinc-300 dark:text-zinc-800">·</span>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}

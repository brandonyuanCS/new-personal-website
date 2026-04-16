import { Children, CSSProperties, ReactNode, isValidElement } from "react";

interface CascadeInProps {
  children: ReactNode;
  stagger?: number; // seconds between each child (default 0.1)
  baseDelay?: number; // delay before the first child starts (default 0)
}

export function CascadeIn({ children, stagger = 0.1, baseDelay = 0 }: CascadeInProps) {
  return (
    <>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <div
            className="animate-fade-in-up"
            style={{ "--fade-delay": `${baseDelay + i * stagger}s` } as CSSProperties}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

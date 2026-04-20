'use client';

import { useState } from 'react';

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('brandonyuan05@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-[42px] h-5 text-left hover:text-black dark:hover:text-zinc-200 transition-all duration-200 group relative cursor-pointer"
    >
      <span className={`inline-block transition-all duration-300 ${copied ? 'opacity-0 blur-sm scale-90' : 'opacity-100 blur-none scale-100'}`}>
        email
      </span>
      <span className={`absolute left-0 top-0 transition-all duration-300 ${copied ? 'opacity-100 blur-none scale-100' : 'opacity-0 blur-sm scale-110'}`}>
        copied!
      </span>
    </button>
  );
}

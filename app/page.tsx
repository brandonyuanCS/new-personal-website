'use client';

import { useState } from 'react';
import { CustomLink } from "@/components/CustomLink";
import { ButtonLink } from "@/components/ButtonLink";
import { ViewAll } from "@/components/ViewAll";
import { Separator } from '@/components/ui/separator';

export default function Home() {
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
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-16 mt-24">
        {/* name + links */}
        <section className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight">
            brandon yuan
          </h1>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="https://github.com/brandonyuanCS" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">github</a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <a href="https://linkedin.com/in/brandonyuann" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">linkedin</a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">resume</a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <button
              onClick={handleCopy}
              className="hover:text-black dark:hover:text-zinc-200 transition-all duration-200 group relative"
            >
              <span className={`inline-block transition-all duration-300 ${copied ? 'opacity-0 blur-sm scale-90' : 'opacity-100 blur-none scale-100'}`}>
                email
              </span>
              <span className={`absolute left-0 top-0 transition-all duration-300 ${copied ? 'opacity-100 blur-none scale-100' : 'opacity-0 blur-sm scale-110'}`}>
                copied!
              </span>
            </button>
          </div>
        </section>

        {/* about */}
        <section className="flex flex-col gap-3 text-center sm:text-left">
          <h2 className="text-md font-semibold">
            about
          </h2>
          <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a CS student at <CustomLink href="https://engineering.tamu.edu/cse/academics/eh-csce/index.html" target="_blank" rel="noopener noreferrer">Texas A&M</CustomLink> who is interested in backend systems, cloud infrastructure, and data-intensive applications.
            </p>
            <p>
              Previously, I built image verification & signing pipelines at <CustomLink href="https://www.digicert.com/blog/how-c2pa-and-digicert-strengthen-digital-content-integrity" target="_blank" rel="noopener noreferrer">DigiCert</CustomLink>.
            </p>
            <p>
              Currently, I&apos;m working on publishing <CustomLink href="https://github.com/brandonyuanCS/canvas2calendar" target="_blank" rel="noopener noreferrer">class2calendar</CustomLink> and organizing student-led projects in the <CustomLink href="https://www.aggiecodingclub.com/" target="_blank" rel="noopener noreferrer">Aggie Coding Club</CustomLink>.
            </p>
            <p>
              In the future, I&apos;ll be joining <CustomLink href="https://www.att.jobs/technology-programs-and-internships" target="_blank" rel="noopener noreferrer">AT&T</CustomLink> and <CustomLink href="https://www.ibm.com/us-en" target="_blank" rel="noopener noreferrer">IBM</CustomLink> as a software engineer intern.
            </p>
          </div>
        </section>

        {/* projects */}
        <section className="flex flex-col gap-3">
          <h2 className="text-md font-semibold">
            projects
          </h2>
          <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
            <ButtonLink href="https://github.com/brandonyuanCS/class2calendar" target="_blank" rel="noopener noreferrer" name="class2calendar" description="web extension to sync canvas assignments to google" />
            <ButtonLink href="https://github.com/brandonyuanCS/rerouted" target="_blank" rel="noopener noreferrer" name="rerouted" description="optimization engine for airline flight disruptions" />
            <ButtonLink href="https://periph4all.vercel.app/" target="_blank" rel="noopener noreferrer" name="periph4all" description="gaming mouse recommender using semantic search" />
            <ViewAll href="/projects" />
          </div>
        </section>

        {/* notes */}
        <section className="flex flex-col gap-3">
          <h2 className="text-md font-semibold">
            notes
          </h2>
          <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="note title 1" description="placeholder description for note 1" />
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="note title 2" description="placeholder description for note 2" />
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="note title 3" description="placeholder description for note 3" />
            <ViewAll href="/notes" />
          </div>
        </section>

        {/* misc */}
        <section className="flex flex-col gap-3">
          <h2 className="text-md font-semibold">
            misc
          </h2>
          <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="misc item 1" description="placeholder description for misc item 1" />
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="misc item 2" description="placeholder description for misc item 2" />
            <ButtonLink href="#" target="_blank" rel="noopener noreferrer" name="misc item 3" description="placeholder description for misc item 3" />
            <ViewAll href="/misc" />
          </div>
        </section>
      </main>
    </div>
  );
}

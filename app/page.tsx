'use client';

import { useState } from 'react';
import { CustomLink } from "@/components/CustomLink";
import { ProjectLink } from "@/components/ProjectLink";

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
    <div className="flex min-h-screen flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
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

        {/* proejcts */}
        <section className="flex flex-col gap-3">
          <h2 className="text-md font-semibold">
            projects
          </h2>
          <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
            <ProjectLink href="#" name="canvas2calendar" description="canvas lms integrated calendar" />
            <ProjectLink href="#" name="personal website" description="my corner on the internet" />
            <ProjectLink href="#" name="another app" description="a cool dummy project" />
          </div>
        </section>
      </main>
    </div>
  );
}

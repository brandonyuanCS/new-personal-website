import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-16 mt-24">
        <section className="relative flex flex-col gap-3 text-center sm:text-left">
          <Link
            href="/"
            className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 sm:left-0 sm:translate-x-0"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            <span>back</span>
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight">projects</h1>
        </section>

        <section>
          <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
            <ButtonLink
              href="https://github.com/brandonyuanCS/class2calendar"
              target="_blank"
              rel="noopener noreferrer"
              name="class2calendar"
              description="web extension to sync canvas assignments to google"
            />
            <ButtonLink
              href="https://github.com/brandonyuanCS/rerouted"
              target="_blank"
              rel="noopener noreferrer"
              name="rerouted"
              description="optimization engine for airline flight disruptions"
            />
            <ButtonLink
              href="https://periph4all.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              name="periph4all"
              description="gaming mouse recommender using semantic search"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

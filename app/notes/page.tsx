import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CascadeIn } from '@/components/CascadeIn';
import { NOTES } from '@/lib/notes';

export default function NotesPage() {
  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-16 mt-24">
        <CascadeIn>
          <section className="relative flex flex-col gap-3 text-center sm:text-left">
            <Link
              href="/"
              className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 sm:left-0 sm:translate-x-0"
            >
              <ArrowLeft size={14} strokeWidth={2.5} />
              <span>back</span>
            </Link>

            <h1 className="text-2xl font-semibold tracking-tight">notes</h1>
          </section>

          <section>
            <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
              {NOTES.map((n) => (
                <ButtonLink
                  key={n.slug}
                  href={`/notes/${n.slug}`}
                  name={n.name}
                  description={n.description}
                />
              ))}
            </div>
          </section>
        </CascadeIn>
      </main>
    </div>
  );
}

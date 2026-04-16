import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getNote, getNoteSlugs } from "@/lib/notes";
import { CascadeIn } from "@/components/CascadeIn";

/**
 * Registry for custom note detail components.
 *
 * If a note needs a richer layout than plain paragraphs, create a component
 * and add it here keyed by slug. The component will be rendered instead of
 * the default content paragraphs.
 *
 * Example:
 *   import { ReadingListDetail } from "@/components/notes/ReadingListDetail";
 *   const CUSTOM_DETAIL: Record<string, React.ComponentType> = {
 *     "current-reading": ReadingListDetail,
 *   };
 */
const CUSTOM_DETAIL: Record<string, React.ComponentType> = {
  // add custom note components here
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "note" };
  return { title: note.name };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const Custom = CUSTOM_DETAIL[slug];

  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-10 mt-24">
        <CascadeIn>
          <section className="relative flex flex-col gap-3 text-center sm:text-left">
            <Link
              href="/"
              className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 sm:left-0 sm:translate-x-0"
            >
              <ArrowLeft size={14} strokeWidth={2.5} />
              <span>back</span>
            </Link>

            <h1 className="text-2xl font-semibold tracking-tight">{note.name}</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{note.date}</p>
          </section>

          {Custom ? (
            <Custom />
          ) : (
            <section className="flex flex-col gap-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {note.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          )}
        </CascadeIn>
      </main>
    </div>
  );
}

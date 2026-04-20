import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getNote, getNoteSlugs } from "@/lib/notes";
import { CascadeIn } from "@/components/CascadeIn";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomLink } from "@/components/CustomLink";

const components = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100" {...props} />,
  h2: (props: any) => <h2 className="mt-6 mb-4 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100" {...props} />,
  h3: (props: any) => <h3 className="mt-4 mb-4 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4 last:mb-0" {...props} />,
  ul: (props: any) => <ul className="ml-4 mb-4 last:mb-0 list-outside list-disc space-y-1" {...props} />,
  ol: (props: any) => <ol className="ml-4 mb-4 last:mb-0 list-outside list-decimal space-y-1" {...props} />,
  li: (props: any) => <li className="pl-1" {...props} />,
  a: (props: any) => <CustomLink target="_blank" rel="noopener noreferrer" {...props} />,
  blockquote: (props: any) => <blockquote className="my-4 border-l-2 border-zinc-300 pl-4 italic dark:border-zinc-700 text-zinc-600 dark:text-zinc-400" {...props} />,
  code: (props: any) => <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800" {...props} />,
  hr: (props: any) => <hr className="my-8 border-zinc-200 dark:border-zinc-800" {...props} />,
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

  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-10 mt-24">
        <CascadeIn>
          <section className="relative flex flex-col gap-1 text-center sm:text-left">
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

          <section className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <MDXRemote source={note.content} components={components} />
          </section>
        </CascadeIn>
      </main>
    </div>
  );
}

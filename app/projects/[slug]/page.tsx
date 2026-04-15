import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { CompetitiveProgrammingDetail } from "@/components/projects/CompetitiveProgrammingDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "project" };
  return { title: project.name };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-10 mt-24">
        <section className="relative flex flex-col gap-3 text-center sm:text-left">
          <Link
            href="/projects"
            className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 sm:left-0 sm:translate-x-0"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            <span>projects</span>
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight">{project.name}</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
        </section>

        {slug === "competitive-programming-problems" ? (
          <CompetitiveProgrammingDetail />
        ) : (
          <section className="flex flex-col gap-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        )}

        {project.links && project.links.length > 0 ? (
          <section className="flex flex-col gap-2 text-sm">
            <h2 className="font-medium text-zinc-950 dark:text-zinc-50">links</h2>
            <ul className="flex flex-col gap-1.5 text-zinc-600 dark:text-zinc-400">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-400 decoration-dotted underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}

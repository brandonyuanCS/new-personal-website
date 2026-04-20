import { CustomLink } from "@/components/CustomLink";
import { ButtonLink } from "@/components/ButtonLink";
import { ViewAll } from "@/components/ViewAll";
import { CascadeIn } from "@/components/CascadeIn";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { getAllNotes } from "@/lib/notes";

export default function Home() {
  const notes = getAllNotes();

  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-lg flex-col gap-16 mt-24">
        <CascadeIn>
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
              <CopyEmailButton />
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
                Previously, I built image verification &amp; signing pipelines at <CustomLink href="https://www.digicert.com/blog/how-c2pa-and-digicert-strengthen-digital-content-integrity" target="_blank" rel="noopener noreferrer">DigiCert</CustomLink>.
              </p>
              <p>
                Currently, I&apos;m working on publishing <CustomLink href="https://github.com/brandonyuanCS/canvas2calendar" target="_blank" rel="noopener noreferrer">class2calendar</CustomLink> and organizing student-led projects in the <CustomLink href="https://www.aggiecodingclub.com/" target="_blank" rel="noopener noreferrer">Aggie Coding Club</CustomLink>.
              </p>
              <p>
                Soon, I&apos;ll be joining <CustomLink href="https://www.att.jobs/technology-programs-and-internships" target="_blank" rel="noopener noreferrer">AT&T</CustomLink> and then <CustomLink href="https://www.ibm.com/us-en" target="_blank" rel="noopener noreferrer">IBM</CustomLink> as a software engineer intern.
              </p>
            </div>
          </section>

          {/* projects */}
          <section className="flex flex-col gap-3">
            <h2 className="text-md font-semibold">
              projects
            </h2>
            <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
              <ButtonLink href="https://github.com/brandonyuanCS/canvas2calendar" target="_blank" rel="noopener noreferrer" name="class2calendar" description="web extension to sync canvas assignments to google" isExternal />
              <ButtonLink href="https://github.com/brandonyuanCS/rerouted" target="_blank" rel="noopener noreferrer" name="rerouted" description="optimization engine for airline flight disruptions" isExternal />
              <ButtonLink href="https://periph4all.vercel.app/" target="_blank" rel="noopener noreferrer" name="periph4all" description="gaming mouse recommender using semantic search" isExternal />
              <ViewAll href="/projects" />
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-md font-semibold">
              notes
            </h2>
            <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
              {notes
                .filter((note) => note.slug === "current-reading")
                .slice(0, 3)
                .map((note) => (
                  <ButtonLink
                    key={note.slug}
                    href={`/notes/${note.slug}`}
                    name={note.name}
                    description={note.description}
                  />
                ))}
            </div>
          </section>

          {/* misc */}
          <section className="flex flex-col gap-3">
            <h2 className="text-md font-semibold">
              misc
            </h2>
            <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
              <ButtonLink href="https://www.instagram.com/brandon.trumpet/" target="_blank" rel="noopener noreferrer" name="trumpet & piano" description="check out my outdated music account at your own risk" isExternal />
            </div>
          </section>
        </CascadeIn>
      </main>
    </div>
  );
}

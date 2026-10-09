import { CustomLink } from "@/components/CustomLink";
import { ButtonLink } from "@/components/ButtonLink";
import { CascadeIn } from "@/components/CascadeIn";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { getAllNotes } from "@/lib/notes";
import { PROJECTS } from "@/lib/projects";

export default function Home() {
  const notes = getAllNotes();

  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black px-6 pb-24 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-xl flex-col gap-16 mt-24">
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
                I&apos;m a CS student at <CustomLink href="https://engineering.tamu.edu/cse/academics/eh-csce/index.html" target="_blank" rel="noopener noreferrer">Texas A&M</CustomLink> who is interested in backend development, cloud infrastructure, and distributed systems.
              </p>
              <p>
                Previously, I built image verification &amp; signing pipelines at <CustomLink href="https://www.digicert.com/blog/how-c2pa-and-digicert-strengthen-digital-content-integrity" target="_blank" rel="noopener noreferrer">DigiCert</CustomLink>.
              </p>
              <p>
                This summer, I worked on tooling to observe, analyze, and optimize an AI sales platform at <CustomLink href="https://www.att.com/" target="_blank" rel="noopener noreferrer">AT&T</CustomLink>. 
              </p>
              <p>
                Currently, I&apos;m organizing student-led projects in the <CustomLink href="https://www.aggiecodingclub.com/" target="_blank" rel="noopener noreferrer">Aggie Coding Club</CustomLink> and interning at <CustomLink href="https://www.ibm.com/products/watsonx" target="_blank" rel="noopener noreferrer">IBM</CustomLink> on the watsonx team.
              </p>
            </div>
          </section>

          {/* projects */}
          <section className="flex flex-col gap-3">
            <h2 className="text-md font-semibold">
              projects
            </h2>
            <div className="-mx-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 text-sm text-zinc-600 sm:grid-cols-[max-content_minmax(0,1fr)_auto] dark:text-zinc-400">
              {PROJECTS.map((project) => (
                <ButtonLink
                  key={project.name}
                  href={project.href}
                  name={project.name}
                  description={project.description}
                  target="_blank"
                  rel="noopener noreferrer"
                  isExternal
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-md font-semibold">
              notes
            </h2>
            <div className="-mx-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 text-sm text-zinc-600 sm:grid-cols-[max-content_minmax(0,1fr)_auto] dark:text-zinc-400">
              {notes.map((note) => (
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
            <div className="-mx-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 text-sm text-zinc-600 sm:grid-cols-[max-content_minmax(0,1fr)_auto] dark:text-zinc-400">
              <ButtonLink href="https://www.instagram.com/brandon.trumpet/" target="_blank" rel="noopener noreferrer" name="trumpet & piano" description="check out my outdated music account at your own risk" isExternal />
              <ButtonLink href="https://github.com/brandonyuanCS/kattis-problem-submarine-materials" target="_blank" rel="noopener noreferrer" name="submarine materials" description="a competitive programming problem" isExternal />
              <ButtonLink href="https://github.com/brandonyuanCS/brandonyuancs.github.io" target="_blank" rel="noopener noreferrer" name="my personal website" description="victim to the pursuit of newer UI libraries" isExternal />
            </div>
          </section>
        </CascadeIn>
      </main>
    </div>
  );
}

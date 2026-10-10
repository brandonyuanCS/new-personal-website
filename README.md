# my personal website

built with Next.js

## Directory structure

- `app/`: routes, layouts, and global styles.
- `components/`: reusable components, with UI primitives in `components/ui/`.
- `content/projects.ts`: the full projects list.
- `content/notes.ts`: the full notes list with titles, descriptions, slugs, and dates.
- `content/notes/`: one Markdown/MDX file per note, containing its page text.
- `content/misc.ts`: the full miscellaneous links list.
- `lib/`: lookup helpers, integrations, and utilities.
- `public/`: static assets such as the resume.

Edit the three files in `content/` to add or update entries. Notes use a unique
`slug` for their `/notes/[slug]` URL and are displayed newest first by `date`.
For each note, create a matching `content/notes/<slug>.mdx` file for its page text.
Keep metadata in `content/notes.ts`; the MDX files do not need frontmatter.

import fs from "node:fs";
import path from "node:path";
import { NOTES, type Note } from "@/content/notes";

const notesDir = path.join(process.cwd(), "content", "notes");

type NotePage = Note & { content: string };

export function getNoteSlugs(): string[] {
  return NOTES.map((note) => note.slug);
}

export function getNote(slug: string): NotePage | undefined {
  const note = NOTES.find((note) => note.slug === slug);
  if (!note) return undefined;

  return {
    ...note,
    content: fs.readFileSync(path.join(notesDir, `${note.slug}.mdx`), "utf8"),
  };
}

export function getAllNotes(): Note[] {
  return [...NOTES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

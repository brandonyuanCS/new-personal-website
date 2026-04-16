export type Note = {
  slug: string;
  name: string;
  description: string;
  date: string;
  content: string[];
};

export const NOTES: Note[] = [
  {
    slug: "current-reading",
    name: "current reading",
    description: "books i'm working through",
    date: "april 16, 2026",
    content: [
      "Placeholder — list the books you're reading here.",
    ],
  },
  {
    slug: "web-extensions",
    name: "web extensions",
    description: "learning messages, content scripts, manifests, etc.",
    date: "april 12, 2026",
    content: [
      "Placeholder — write about what you've learned building browser extensions.",
    ],
  },
];

const bySlug = new Map(NOTES.map((n) => [n.slug, n]));

export function getNote(slug: string): Note | undefined {
  return bySlug.get(slug);
}

export function getNoteSlugs(): string[] {
  return NOTES.map((n) => n.slug);
}

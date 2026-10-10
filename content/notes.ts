export type Note = {
  slug: string;
  name: string;
  description: string;
  date: string;
};

export const NOTES: Note[] = [
  {
    slug: "current-reading",
    name: "current reading",
    description: "books i'm working through",
    date: "april 16, 2026",
  },
  {
    slug: "web-extensions",
    name: "web extensions",
    description: "learning messages, content scripts, manifests, etc.",
    date: "april 12, 2026",
  },
];

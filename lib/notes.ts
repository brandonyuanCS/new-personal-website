import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'notes');

export type Note = {
  slug: string;
  name: string;
  description: string;
  date: string;
  content: string;
};

export function getNoteSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => file.replace(/\.mdx?$/, ''));
}

export function getNote(slug: string): Note | undefined {
  try {
    let fullPath = path.join(contentDir, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDir, `${slug}.md`);
    }
    
    if (!fs.existsSync(fullPath)) return undefined;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      name: data.name,
      description: data.description,
      date: data.date,
      content,
    };
  } catch (error) {
    return undefined;
  }
}

export function getAllNotes(): Note[] {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNote(slug))
    .filter((note): note is Note => note !== undefined);
  
  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

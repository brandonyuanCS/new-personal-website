export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  description: string;
  summary: string[];
  links?: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    slug: "class2calendar",
    name: "class2calendar",
    description: "web extension to sync canvas assignments to google",
    summary: [
      "Browser extension that syncs Canvas LMS assignments into Google Calendar and Google Tasks using ICS parsing and Google Cloud APIs.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/brandonyuanCS/class2calendar" }],
  },
  {
    slug: "rerouted",
    name: "rerouted",
    description: "optimization engine for airline flight disruptions",
    summary: [
      "Hackathon project: an optimization-oriented take on rerouting and recovery when airline schedules are disrupted.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/brandonyuanCS/rerouted" }],
  },
  {
    slug: "periph4all",
    name: "periph4all",
    description: "gaming mouse recommender using semantic search",
    summary: [
      "AI-based mouse recommender using transformer-style embeddings, with UMAP and graph views to explore similar peripherals.",
    ],
    links: [{ label: "Live demo", href: "https://periph4all.vercel.app/" }],
  },
  {
    slug: "together",
    name: "together",
    description: "peer-to-peer lending platform (Capital One track, hackathon)",
    summary: [
      "Peer-to-peer lending concept built for the Capital One track at a hackathon.",
    ],
  },
  {
    slug: "previous-personal-site",
    name: "previous personal site",
    description: "earlier portfolio on github pages",
    summary: ["Earlier portfolio hosted on GitHub Pages before this site."],
    links: [{ label: "GitHub", href: "https://github.com/brandonyuanCS/brandonyuancs.github.io" }],
  },
  {
    slug: "spotify-vibemap",
    name: "spotify vibemap",
    description: "3d graphs from cosine similarity between songs",
    summary: [
      "Visualization experiment: 3D graphs derived from cosine similarity between tracks (e.g. from audio or embedding features).",
    ],
  },
  {
    slug: "restaurant-kiosk",
    name: "restaurant kiosk",
    description: "ordering & management",
    summary: [
      "Coursework covering restaurant ordering and management: one version with a standard web stack and another on the JVM.",
    ],
  },
  {
    slug: "lightgbm-malware-classifier",
    name: "lightgbm malware classifier",
    description: "tabular malware classification with lightgbm",
    summary: [
      "Tabular features and a LightGBM model for malware classification.",
    ],
  },
  {
    slug: "competitive-programming-problems",
    name: "competitive programming problems",
    description: "a classic kattis problem in c++",
    summary: [
      "Solutions and practice on competitive programming, including a classic Kattis problem in C++.",
    ],
  },
];

const bySlug = new Map(PROJECTS.map((p) => [p.slug, p]));

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

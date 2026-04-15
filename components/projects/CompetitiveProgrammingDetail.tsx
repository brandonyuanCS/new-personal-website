/** Rich body for `/projects/competitive-programming-problems`. Edit this file freely. */

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-left text-xs leading-relaxed text-zinc-100 dark:border-zinc-800">
      <code>{children.trim()}</code>
    </pre>
  );
}

export function CompetitiveProgrammingDetail() {
  return (
    <div className="flex flex-col gap-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
      <div className="flex flex-col gap-4">
        <p>
          Add as many paragraphs as you want here. Each is plain JSX, so you control spacing and
          emphasis.
        </p>
        <p>
          Below is a code sample. Paste your solution or snippets inside the template string passed to{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">CodeBlock</code>.
        </p>
      </div>

      <section className="flex flex-col gap-2">
        <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">example solution</h2>
        <CodeBlock>{`
#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  // your solution
  return 0;
}
`}</CodeBlock>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">diagram</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Drop a file in{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">
            public/projects/competitive-programming/
          </code>{" "}
          and reference it with <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800">next/image</code>{" "}
          as below (uncomment when the file exists).
        </p>
        {/* When you add e.g. public/projects/competitive-programming/graph.png:
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/projects/competitive-programming/graph.png"
            alt="Problem diagram"
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 512px"
          />
        </div>
        */}
        <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
          Image slot — uncomment the block above when your asset is in <code className="mx-1 rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">public/</code>
        </div>
      </section>
    </div>
  );
}

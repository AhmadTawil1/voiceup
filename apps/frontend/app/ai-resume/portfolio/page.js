import Link from "next/link";

export default function PortfolioPage() {
  const items = Array.from({ length: 6 }).map((_, i) => i + 1);
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Portfolio</h1>
          <Link href="/ai-resume/editor" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Back to Editor</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((n) => (
            <div key={n} className="rounded-2xl border border-zinc-200 bg-white p-4 hover:shadow-sm">
              <div className="aspect-[8.5/11] w-full rounded-lg border border-zinc-200 bg-zinc-50" />
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium text-zinc-800">Resume {n}</div>
                <button className="text-sm rounded-lg border border-zinc-200 bg-white px-3 py-1.5 hover:bg-zinc-50">Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}




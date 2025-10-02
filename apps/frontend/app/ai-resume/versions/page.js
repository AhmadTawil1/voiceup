import Link from "next/link";

export default function VersionsPage() {
  const items = [
    { id: 1, name: "v1 • SWE Internship", date: "Today" },
    { id: 2, name: "v0 • Base Resume", date: "2 days ago" },
  ];
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Versions</h1>
          <Link href="/ai-resume/editor" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Back to Editor</Link>
        </div>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white">
          {items.map((item, idx) => (
            <div key={item.id} className={`flex items-center justify-between px-4 py-4 ${idx !== items.length - 1 ? "border-b border-zinc-200" : ""}`}>
              <div>
                <div className="text-sm font-medium text-zinc-800">{item.name}</div>
                <div className="text-xs text-zinc-500">{item.date}</div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm rounded-lg border border-zinc-200 bg-white px-3 py-1.5 hover:bg-zinc-50">Preview</button>
                <button className="text-sm rounded-lg bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Restore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}




import Link from "next/link";

export default function PreviewPage() {
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Preview</h1>
          <Link href="/ai-resume/editor" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Back to Editor</Link>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="mx-auto aspect-[8.5/11] max-w-3xl rounded-xl border border-zinc-200 overflow-hidden">
            <div className="h-full w-full grid grid-rows-[auto_1fr]">
              <header className="px-8 py-6 border-b border-zinc-200">
                <div className="text-2xl font-semibold tracking-tight">Your Name</div>
                <div className="text-xs text-zinc-500 mt-1">email@example.com • github.com/you • linkedin.com/in/you</div>
              </header>
              <div className="px-8 py-6 space-y-6">
                <section>
                  <h3 className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Experience</h3>
                  <ul className="list-disc pl-5 mt-2 text-sm text-zinc-700 space-y-1">
                    <li>Impactful bullet with metric.</li>
                    <li>Clear responsibility with result.</li>
                    <li>Tech stack and collaboration.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Education</h3>
                  <p className="text-sm mt-2">BS, Computer Science — University</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




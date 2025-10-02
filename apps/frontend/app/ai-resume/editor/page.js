"use client";

import Link from "next/link";

export default function EditorPage() {
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Resume Editor</h1>
            <p className="text-sm text-zinc-500 mt-1">Overleaf-style FAANG template preview</p>
          </div>
          <div className="flex gap-2">
            <Link href="/ai-resume/preview" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Preview</Link>
            <Link href="/ai-resume/portfolio" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Portfolio</Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="font-medium text-zinc-800">Resume Canvas</h2>
            <div className="mt-4 aspect-[8.5/11] w-full bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <div className="h-full w-full grid grid-rows-[auto_1fr]">
                <header className="px-8 py-6 border-b border-zinc-200">
                  <div className="text-2xl font-semibold tracking-tight">Your Name</div>
                  <div className="text-xs text-zinc-500 mt-1">email@example.com • github.com/you • linkedin.com/in/you</div>
                </header>
                <div className="px-8 py-6 space-y-6 overflow-auto">
                  <section>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Experience</h3>
                    <div className="mt-2 space-y-2 text-sm text-zinc-700">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Company • Software Engineer</div>
                        <div className="text-xs text-zinc-500">2023 – Present</div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Shipped X that improved Y by Z%.</li>
                        <li>Led A to reduce B by C ms.</li>
                        <li>Collaborated with D using E stack.</li>
                      </ul>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Education</h3>
                    <p className="text-sm mt-2">BS, Computer Science — University (2021 – 2025)</p>
                  </section>
                  <section>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">Skills</h3>
                    <p className="text-sm mt-2">JavaScript, TypeScript, React, Node.js, Python, SQL</p>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="font-medium text-zinc-800">Editor</h2>
            <div className="mt-4 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm text-zinc-600">Job Title</span>
                <input className="rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Software Engineer" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-zinc-600">Summary</span>
                <textarea className="min-h-24 rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="One sentence impact summary..." />
              </label>
              <div className="flex gap-2">
                <button className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">AI Tailor</button>
                <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50">Add Section</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}




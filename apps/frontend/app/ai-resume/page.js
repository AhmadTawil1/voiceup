"use client";

import Link from "next/link";
import { useState } from "react";

export default function AIResumeLanding() {
  const [jobDescription, setJobDescription] = useState("");

  const Card = ({ title, description, href, icon }) => (
    <Link
      href={href}
      className="block rounded-2xl border border-zinc-200 hover:border-zinc-300 bg-white/80 hover:bg-white transition-colors p-6 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <div className="text-zinc-900 font-semibold">{title}</div>
          <div className="text-zinc-500 text-sm mt-1">{description}</div>
        </div>
      </div>
    </Link>
  );

  return (
    <main className="min-h-[calc(100dvh-80px)] w-full bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Build Your FAANG-Ready Resume
        </h1>
        <p className="mt-2 text-zinc-600 max-w-2xl">
          Choose your starting point and tailor your resume to any job
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="Use Saved Profile"
            description="Start with your existing resume data"
            href="/ai-resume/editor"
            icon={<span>💾</span>}
          />
          <Card
            title="Fill Form"
            description="Create a new resume from scratch"
            href="/ai-resume/editor"
            icon={<span>📄</span>}
          />
          <Card
            title="Upload CV"
            description="Import from an existing document"
            href="/ai-resume/editor"
            icon={<span>⤴️</span>}
          />
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-zinc-800 font-medium">Job Description (Optional)</h2>
          <p className="text-sm text-zinc-500 mt-1">
            Paste a job description to get AI-powered tailoring suggestions
          </p>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="mt-4 w-full min-h-48 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-4 text-sm text-zinc-700"
          />
          <div className="mt-4">
            <Link
              href={{ pathname: "/ai-resume/editor", query: { jd: jobDescription ? "1" : "0" } }}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Continue
            </Link>
          </div>
        </section>

        <nav className="mt-8 flex gap-3 text-sm text-zinc-500">
          <Link href="/ai-resume/editor" className="hover:text-zinc-800">Editor</Link>
          <span>·</span>
          <Link href="/ai-resume/preview" className="hover:text-zinc-800">Preview</Link>
          <span>·</span>
          <Link href="/ai-resume/portfolio" className="hover:text-zinc-800">Portfolio</Link>
          <span>·</span>
          <Link href="/ai-resume/versions" className="hover:text-zinc-800">Versions</Link>
        </nav>
      </div>
    </main>
  );
}



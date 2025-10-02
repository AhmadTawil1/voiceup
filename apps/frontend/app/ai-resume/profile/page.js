"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [section, setSection] = useState("summary");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Simple navbar */}
      <header className="border-b bg-white/70 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-lg text-blue-600">VoiceUp</div>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-blue-600 transition" href="/">Home</a>
            <a className="hover:text-blue-600 transition" href="/ai-resume">Start</a>
            <a className="hover:text-blue-600 transition" href="/help">Help</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profile Editor</h1>
          <div className="flex gap-2">
            <button
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
              type="button"
            >
              <span role="img" aria-label="upload">📤</span>
              Import from Upload
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
              type="button"
            >
              <span role="img" aria-label="sparkles">✨</span>
              Auto-Improve Bullets
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Left vertical tabs */}
          <aside>
            <div className="flex flex-col gap-2">
              {[
                ["summary", "Summary"],
                ["skills", "Skills"],
                ["experience", "Experience"],
                ["projects", "Projects"],
                ["education", "Education"],
                ["extras", "Extras"],
              ].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setSection(val)}
                  className={`w-full justify-start text-left rounded-md border px-3 py-2 text-sm transition ${
                    section === val
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right content card */}
          <section className="p-6 rounded-xl border bg-white shadow-sm">
            {section === "summary" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Professional Summary</h2>
                <textarea
                  placeholder="A brief overview of your professional background and career goals..."
                  className="min-h-[150px] w-full rounded-md border bg-gray-50 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {section === "skills" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                  <button
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                    type="button"
                  >
                    <span role="img" aria-label="sparkles">✨</span>
                    Suggest Skills
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="rounded-md border bg-gray-50 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Skill name"
                  />
                  <input
                    className="rounded-md border bg-gray-50 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Proficiency level"
                  />
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                  type="button"
                >
                  <span role="img" aria-label="plus">➕</span>
                  Add Skill
                </button>
              </div>
            )}

            {section === "experience" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
                <div className="space-y-4 rounded-lg border p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Company" />
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Position" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Start date" type="month" />
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="End date" type="month" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Bullet Helper</label>
                    <p className="text-xs text-gray-500">Action verb + Task + Impact + Metric</p>
                    <div className="grid gap-2 sm:grid-cols-4">
                      <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Led" />
                      <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="team of 5" />
                      <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="increased sales" />
                      <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="by 40%" />
                    </div>
                  </div>
                  <textarea
                    className="min-h-[100px] w-full rounded-md border bg-gray-50 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Additional responsibilities and achievements..."
                  />
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                  type="button"
                >
                  <span role="img" aria-label="plus">➕</span>
                  Add Experience
                </button>
              </div>
            )}

            {section === "projects" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
                <div className="space-y-4 rounded-lg border p-4">
                  <input className="w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Project name" />
                  <input className="w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Technologies used" />
                  <textarea
                    className="min-h-[100px] w-full rounded-md border bg-gray-50 p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Description and key achievements..."
                  />
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                  type="button"
                >
                  <span role="img" aria-label="plus">➕</span>
                  Add Project
                </button>
              </div>
            )}

            {section === "education" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                <div className="space-y-4 rounded-lg border p-4">
                  <input className="w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Institution" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Degree" />
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Field of study" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="Start date" type="month" />
                    <input className="rounded-md border bg-gray-50 px-3 py-2" placeholder="End date" type="month" />
                  </div>
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
                  type="button"
                >
                  <span role="img" aria-label="plus">➕</span>
                  Add Education
                </button>
              </div>
            )}

            {section === "extras" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900">Certifications</label>
                    <input className="mt-2 w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Add certifications..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Languages</label>
                    <input className="mt-2 w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Add languages..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900">Awards</label>
                    <input className="mt-2 w-full rounded-md border bg-gray-50 px-3 py-2" placeholder="Add awards..." />
                  </div>
                </div>
              </div>
            )}

            {/* Footer actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-md border px-4 py-2 text-sm bg-white hover:bg-gray-50"
                type="button"
              >
                Save
              </button>
              <button
                className="rounded-md px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white"
                type="button"
                onClick={() => router.push("/tailor")}
              >
                Next: Tailor
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

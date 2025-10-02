"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Source() {
  const router = useRouter();
  const [jobDescription, setJobDescription] = useState("");

  const sourceOptions = [
    {
      emoji: "📦",
      title: "Use Saved Profile",
      description: "Start with your existing resume data",
    },
    {
      emoji: "✏️",
      title: "Fill Form",
      description: "Create a new resume from scratch",
    },
    {
      emoji: "⬆️",
      title: "Upload CV",
      description: "Import from an existing document",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navbar */}
      <header className="border-b bg-white/70 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-lg text-blue-600">VoiceUp</div>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-blue-600 transition" href="/">Home</a>
            <a className="hover:text-blue-600 transition" href="/about">About</a>
            <a className="hover:text-blue-600 transition" href="/help">Help</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-10">
          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Build Your <span className="text-blue-600">FAANG-Ready</span> Resume
            </h1>
            <p className="text-lg text-gray-600">
              Choose your starting point and tailor your resume to any job
            </p>
          </div>

          {/* Options */}
          <div className="grid gap-6 md:grid-cols-3">
            {sourceOptions.map((option) => (
              <div
                key={option.title}
                className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => router.push("/profile")}
                onKeyDown={(e) => e.key === "Enter" && router.push("/profile")}
              >
                <div className="space-y-4 text-center">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-blue-100 text-2xl">
                    {option.emoji}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">{option.title}</h3>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Job description */}
          <div className="p-6 rounded-xl border bg-white shadow-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Job Description (Optional)
              </label>
              <p className="text-sm text-gray-500">
                Paste a job description to get AI-powered tailoring suggestions
              </p>
            </div>
            <textarea
              placeholder="Paste the job description here..."
              className="w-full min-h-[200px] resize-none rounded-md border bg-gray-50 p-3 outline-none focus:ring-2 focus:ring-blue-500"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          {/* Continue button */}
          <div className="flex justify-center">
            <button
              className="inline-flex items-center justify-center rounded-md px-12 py-3
                         bg-blue-600 hover:bg-blue-700 text-white font-medium
                         shadow-md transition active:scale-95"
              onClick={() => router.push("/profile")}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

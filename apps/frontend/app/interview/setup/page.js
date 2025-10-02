"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Briefcase, Settings2 } from "lucide-react";

export default function Setup() {
  const router = useRouter();
  const [field, setField] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleStartSession = () => {
    if (field && difficulty) {
      router.push("/interview/intro");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">AI Interview Simulator</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Prepare for Your Dream Job
          </h2>
          <p className="text-muted-foreground text-lg">
            Practice with our AI interviewer and get instant feedback to improve your skills
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-sm ring-1 ring-border">
          <div className="space-y-6">
            {/* Field Selection */}
            <div className="space-y-2">
              <label htmlFor="field" className="text-base font-semibold flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                Select Field/Domain
              </label>
              <div className="relative">
                <select
                  id="field"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  className="h-12 w-full rounded-xl bg-background text-foreground ring-1 ring-input px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>Choose your field</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="product">Product Management</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>
            </div>

            {/* Difficulty Selection */}
            <div className="space-y-2">
              <label htmlFor="difficulty" className="text-base font-semibold flex items-center gap-2">
                <Settings2 className="h-4 w-4 text-primary" />
                Difficulty Level
              </label>
              <div className="relative">
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="h-12 w-full rounded-xl bg-background text-foreground ring-1 ring-input px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>Choose difficulty</option>
                  <option value="junior">Junior Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                </select>
              </div>
            </div>

            {/* Optional Job Description */}
            <div className="space-y-2">
              <label htmlFor="jobDesc" className="text-base font-semibold">
                Job Description <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <textarea
                id="jobDesc"
                placeholder="Paste the job description here to get more tailored questions..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[120px] w-full resize-none rounded-xl bg-background text-foreground ring-1 ring-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartSession}
              disabled={!field || !difficulty}
              className="w-full h-14 text-base mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Start Interview Session
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 p-6 bg-secondary rounded-xl">
          <h3 className="font-semibold mb-3 text-secondary-foreground">Quick Tips:</h3>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Find a quiet space with good lighting
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Allow microphone and camera access for best results
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Use the STAR method: Situation, Task, Action, Result
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}


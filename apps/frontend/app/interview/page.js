"use client";

import Link from "next/link";
import Image from "next/image";
import heroBackground from "@/public/hero-bg.png"; // place the image in apps/frontend/public or adjust path
import { Sparkles, Target, TrendingUp, Award, ArrowRight } from "lucide-react";

export default function InterviewLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-border"
      >
        <Image
          src={heroBackground}
          alt="Purple gradient background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Master Your Interview Skills
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Practice with our AI-powered interviewer and receive instant feedback on your voice,
            body language, and answer quality. Land your dream job with confidence.
          </p>

          <Link
            href="/interview/setup"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-lg text-white shadow-lg hover:opacity-95"
          >
            Start Practicing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Why Choose Our AI Interview Simulator?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <IconBubble tone="primary">
              <Target className="h-8 w-8 text-primary" />
            </IconBubble>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Realistic Practice</h3>
            <p className="text-muted-foreground">
              Experience authentic interview scenarios tailored to your field and experience level
            </p>
          </Card>

          <Card>
            <IconBubble tone="accent">
              <TrendingUp className="h-8 w-8 text-accent" />
            </IconBubble>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Real-time Feedback</h3>
            <p className="text-muted-foreground">
              Get instant analysis on voice clarity, body language, and answer structure
            </p>
          </Card>

          <Card>
            <IconBubble tone="success">
              <Award className="h-8 w-8 text-success" />
            </IconBubble>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Track Progress</h3>
            <p className="text-muted-foreground">
              Review detailed performance metrics and identify areas for improvement
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who improved their interview skills with our AI simulator
          </p>

          <Link
            href="/interview/setup"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-lg text-white shadow-lg hover:opacity-95"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="p-8 text-center rounded-2xl bg-card shadow-sm ring-1 ring-border hover:shadow-xl transition-shadow duration-300">
      {children}
    </div>
  );
}

function IconBubble({ children, tone }) {
  const toneMap = {
    primary: "bg-primary/10",
    accent: "bg-accent/10",
    success: "bg-success/10",
  };
  return (
    <div className="flex justify-center mb-4">
      <div className={`p-4 rounded-full ${toneMap[tone]}`}>{children}</div>
    </div>
  );
}
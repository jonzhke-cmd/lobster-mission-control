'use client';

import { ExternalLink, CheckCircle2, Clock, Globe, GitBranch } from "lucide-react";

const projects = [
  {
    name: "AutoTrip Perth",
    emoji: "🚗",
    status: "live",
    statusLabel: "🟢 Live",
    url: "autotrip-five.vercel.app",
    href: "https://autotrip-five.vercel.app",
    stack: "Next.js + Vercel",
    description: "Perth travel guide and affiliate site with AI-generated SEO content, promo videos, and blog.",
    features: [
      { label: "SEO Optimised", done: true },
      { label: "Mobile Nav", done: true },
      { label: "Blog", done: true },
      { label: "Promo Video", done: true },
      { label: "Sitemap + JSON-LD", done: true },
    ],
    recent: "Promo video added to homepage",
    recentTime: "2h ago",
    commits: 24,
    color: "#3b82f6",
  },
  {
    name: "Verdikt",
    emoji: "🎯",
    status: "deploying",
    statusLabel: "🟡 Deploying",
    url: "verdikt-platform.vercel.app",
    href: "https://verdikt-platform.vercel.app",
    stack: "Next.js + Vercel",
    description: "Stock market research platform with 12 market coverage, portfolio tracking, and mobile-first UI.",
    features: [
      { label: "12 Markets", done: true },
      { label: "Portfolio View", done: true },
      { label: "Mobile Nav", done: true },
      { label: "Dark Theme", done: true },
      { label: "Search", done: false },
    ],
    recent: "Mobile nav fixed with React Portal",
    recentTime: "just now",
    commits: 31,
    color: "#a855f7",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <p className="text-gray-400 text-sm mt-0.5">Live products and deployments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="rounded-2xl border p-5" style={{ background: "#111827", borderColor: "#1F2937" }}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: p.color + "20" }}
                >
                  {p.emoji}
                </div>
                <div>
                  <h3 className="text-white font-bold">{p.name}</h3>
                  <span
                    className={`text-xs font-semibold ${
                      p.status === "live" ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {p.statusLabel}
                  </span>
                </div>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={12} />
              </a>
            </div>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{p.description}</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1.5">
                <Globe size={11} />
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors truncate max-w-[140px]">
                  {p.url}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <GitBranch size={11} />
                {p.commits} commits
              </div>
            </div>

            {/* Stack badge */}
            <div className="mb-4">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                {p.stack}
              </span>
            </div>

            {/* Features */}
            <div className="mb-4">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Features</p>
              <div className="grid grid-cols-2 gap-1.5">
                {p.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={12}
                      className={f.done ? "text-green-400" : "text-gray-700"}
                    />
                    <span className={`text-xs ${f.done ? "text-gray-300" : "text-gray-600"}`}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="flex items-center justify-between border-t border-gray-800 pt-3">
              <div className="flex items-center gap-1.5">
                <Clock size={11} className="text-gray-600" />
                <p className="text-xs text-gray-500">{p.recent}</p>
              </div>
              <span className="text-xs text-gray-600">{p.recentTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

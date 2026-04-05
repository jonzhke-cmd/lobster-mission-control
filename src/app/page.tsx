'use client';

import Link from "next/link";
import {
  Activity,
  Zap,
  FolderOpen,
  DollarSign,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Terminal,
} from "lucide-react";

const statCards = [
  {
    label: "STATUS",
    value: "🟢 Online",
    sub: "Lobster ready and waiting",
    icon: Activity,
    color: "#22c55e",
  },
  {
    label: "AUTOMATIONS",
    value: "2 Active",
    sub: "Buffett Screen + Blog Pipeline",
    icon: Zap,
    color: "#3b82f6",
  },
  {
    label: "PROJECTS",
    value: "2 Live",
    sub: "AutoTrip + Verdikt",
    icon: FolderOpen,
    color: "#a855f7",
  },
  {
    label: "API USAGE",
    value: "$4.20 today",
    sub: "fal.ai + ElevenLabs + OpenAI",
    icon: DollarSign,
    color: "#f59e0b",
  },
];

type ActivityStatus = "completed" | "in-progress" | "scheduled";

const activityFeed: {
  status: ActivityStatus;
  label: string;
  description: string;
  time: string;
}[] = [
  { status: "completed", label: "COMPLETED", description: "AutoTrip promo video generated and uploaded to Dropbox", time: "2h ago" },
  { status: "completed", label: "COMPLETED", description: "Verdikt Mission Control dashboard build initiated", time: "just now" },
  { status: "in-progress", label: "IN PROGRESS", description: "Daily blog content pipeline — midnight SGT", time: "scheduled" },
  { status: "in-progress", label: "IN PROGRESS", description: "Buffett value screen — 9 AM SGT", time: "scheduled" },
  { status: "completed", label: "COMPLETED", description: "Farm stays SEO article published to autotrip-five.vercel.app", time: "5h ago" },
  { status: "completed", label: "COMPLETED", description: "Google Calendar connected — dinner event created", time: "8h ago" },
  { status: "completed", label: "COMPLETED", description: "Verdikt platform built and deployed", time: "10h ago" },
  { status: "completed", label: "COMPLETED", description: "AutoTrip SEO overhaul — sitemap, OG tags, JSON-LD", time: "12h ago" },
];

const statusStyle: Record<ActivityStatus, { dot: string; badge: string; text: string }> = {
  completed: { dot: "bg-green-400", badge: "bg-green-900/40 text-green-400 border border-green-800", text: "COMPLETED" },
  "in-progress": { dot: "bg-blue-400 animate-pulse", badge: "bg-blue-900/40 text-blue-400 border border-blue-800", text: "IN PROGRESS" },
  scheduled: { dot: "bg-yellow-400", badge: "bg-yellow-900/40 text-yellow-400 border border-yellow-800", text: "SCHEDULED" },
};

const upcomingEvents = [
  { emoji: "⛳", title: "Golf: TMCC Garden Course", date: "Mon Apr 6, 8:18 AM" },
  { emoji: "🍽️", title: "Dinner: Xita Lao Tai Tai", date: "Tue Apr 8, 7:30 PM" },
  { emoji: "⛳", title: "Golf: Laguna Masters", date: "Tue Apr 8, 7:53 AM" },
];

const quickLinks = [
  { emoji: "🚗", label: "AutoTrip", url: "https://autotrip-five.vercel.app" },
  { emoji: "🎯", label: "Verdikt", url: "https://verdikt-platform.vercel.app" },
  { emoji: "📁", label: "Dropbox", url: "https://dropbox.com" },
  { emoji: "💹", label: "GitHub", url: "https://github.com/jonzhke-cmd" },
];

const consoleMessages = [
  { role: "Jon", text: "Build me a Mission Control dashboard", time: "07:20" },
  { role: "Lobster", text: "On it — scaffolding Next.js with dark theme, sidebar, and all pages 🦞", time: "07:20" },
  { role: "Jon", text: "Add AutoTrip promo video to the homepage", time: "05:30" },
  { role: "Lobster", text: "Video embedded to hero section, pushed to Vercel ✅", time: "05:31" },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Mission Control</h1>
        <p className="text-gray-400 text-sm mt-0.5">Real-time overview of all systems</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="rounded-2xl p-4 border"
              style={{ background: "#111827", borderColor: "#1F2937" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">{card.label}</span>
                <Icon size={14} style={{ color: card.color }} />
              </div>
              <p className="text-xl font-bold text-white mb-1">{card.value}</p>
              <p className="text-xs text-gray-500">{card.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Live Activity Feed */}
        <div
          className="lg:col-span-2 rounded-2xl border p-5"
          style={{ background: "#111827", borderColor: "#1F2937" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-blue-400" />
              <h2 className="text-sm font-semibold text-white">Live Activity</h2>
            </div>
            <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {activityFeed.map((item, i) => {
              const s = statusStyle[item.status];
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <span className={`block w-2 h-2 rounded-full ${s.dot}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.badge}`}>
                        {item.label}
                      </span>
                      <p className="text-sm text-gray-300 truncate">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 flex-shrink-0 mt-0.5">{item.time}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Upcoming Events */}
          <div
            className="rounded-2xl border p-4"
            style={{ background: "#111827", borderColor: "#1F2937" }}
          >
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Upcoming</h2>
            <div className="space-y-2.5">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-base flex-shrink-0">{ev.emoji}</span>
                  <div>
                    <p className="text-sm text-white font-medium leading-tight">{ev.title}</p>
                    <p className="text-xs text-gray-500">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="rounded-2xl border p-4"
            style={{ background: "#111827", borderColor: "#1F2937" }}
          >
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Quick Links</h2>
            <div className="space-y-1.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{link.emoji}</span>
                    <span className="text-sm text-gray-300 group-hover:text-white">{link.label}</span>
                  </div>
                  <ExternalLink size={12} className="text-gray-600 group-hover:text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Recent Console */}
          <div
            className="rounded-2xl border p-4"
            style={{ background: "#111827", borderColor: "#1F2937" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={13} className="text-green-400" />
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Recent Console</h2>
            </div>
            <div className="space-y-2.5">
              {consoleMessages.map((msg, i) => (
                <div key={i} className="text-xs">
                  <span className={`font-semibold ${msg.role === "Lobster" ? "text-blue-400" : "text-gray-300"}`}>
                    {msg.role}
                  </span>
                  <span className="text-gray-600 ml-1">{msg.time}</span>
                  <p className={`mt-0.5 ${msg.role === "Lobster" ? "text-gray-300" : "text-gray-400"}`}>
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

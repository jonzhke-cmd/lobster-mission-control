'use client';

import { useState } from "react";
import { Zap, Clock, ToggleLeft, ToggleRight, Calendar, CheckCircle2 } from "lucide-react";

const automations = [
  {
    id: 1,
    name: "Buffett Value Screen",
    description: "Screens ASX + US stocks for Buffett-style value metrics. Sends report to Telegram with top picks.",
    schedule: "Daily 9AM SGT",
    cron: "0 1 * * *",
    status: true,
    lastRun: "Apr 4, 09:00 SGT",
    nextRun: "Apr 6, 09:00 SGT",
    tags: ["Finance", "ASX", "Telegram"],
  },
  {
    id: 2,
    name: "Blog Content Pipeline",
    description: "Generates SEO-optimised blog posts for AutoTrip using AI. Auto-publishes to Vercel.",
    schedule: "Daily 12:05AM SGT",
    cron: "5 16 * * *",
    status: true,
    lastRun: "Apr 5, 00:05 SGT",
    nextRun: "Apr 6, 00:05 SGT",
    tags: ["Content", "AutoTrip", "SEO"],
  },
];

export default function AutomationsPage() {
  const [toggles, setToggles] = useState<Record<number, boolean>>(
    Object.fromEntries(automations.map((a) => [a.id, a.status]))
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Automations</h1>
        <p className="text-gray-400 text-sm mt-0.5">Scheduled agents and pipelines</p>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total", value: "2" },
          { label: "Active", value: "2" },
          { label: "Paused", value: "0" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border p-4" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-2xl font-bold text-white">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {automations.map((auto) => (
          <div key={auto.id} className="rounded-2xl border p-5" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <Zap size={16} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{auto.name}</h3>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">{auto.schedule}</p>
                </div>
              </div>
              <button
                onClick={() => setToggles((t) => ({ ...t, [auto.id]: !t[auto.id] }))}
                className="flex items-center gap-1.5 transition-opacity"
              >
                {toggles[auto.id] ? (
                  <ToggleRight size={28} className="text-green-400" />
                ) : (
                  <ToggleLeft size={28} className="text-gray-600" />
                )}
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-4">{auto.description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-green-400" />
                Last: {auto.lastRun}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-blue-400" />
                Next: {auto.nextRun}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                <span className="font-mono">{auto.cron}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {auto.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ml-auto font-bold ${
                  toggles[auto.id]
                    ? "bg-green-900/40 text-green-400 border border-green-800"
                    : "bg-gray-800 text-gray-500 border border-gray-700"
                }`}
              >
                {toggles[auto.id] ? "🟢 ACTIVE" : "⏸ PAUSED"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

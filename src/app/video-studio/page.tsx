'use client';

import { Video, Download, Play, Plus, Cpu, Clock, CheckCircle2 } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "AutoTrip Perth — Homepage Promo",
    status: "completed",
    duration: "0:45",
    model: "fal.ai / kling-v2",
    generated: "2h ago",
    size: "14.2 MB",
    resolution: "1080p",
    dropbox: "https://dropbox.com",
  },
  {
    id: 2,
    title: "AutoTrip — Farm Stays Highlight Reel",
    status: "completed",
    duration: "1:12",
    model: "fal.ai / kling-v2",
    generated: "6h ago",
    size: "22.1 MB",
    resolution: "1080p",
    dropbox: "https://dropbox.com",
  },
  {
    id: 3,
    title: "Verdikt — Platform Demo",
    status: "in-progress",
    duration: "—",
    model: "fal.ai / kling-v2",
    generated: "now",
    size: "—",
    resolution: "1080p",
    dropbox: null,
  },
];

const apiCredits = [
  { service: "fal.ai", used: "$2.80", budget: "$10.00", pct: 28, color: "#3b82f6" },
  { service: "ElevenLabs", used: "$0.90", budget: "$5.00", pct: 18, color: "#a855f7" },
  { service: "OpenAI", used: "$0.50", budget: "$10.00", pct: 5, color: "#22c55e" },
];

export default function VideoStudioPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Video Studio</h1>
          <p className="text-gray-400 text-sm mt-0.5">AI-generated video production log</p>
        </div>
        <a
          href="https://fal.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
        >
          <Plus size={14} />
          Generate New Video
        </a>
      </div>

      {/* API Credits */}
      <div className="rounded-2xl border p-5 mb-6" style={{ background: "#111827", borderColor: "#1F2937" }}>
        <div className="flex items-center gap-2 mb-4">
          <Cpu size={14} className="text-blue-400" />
          <h2 className="text-sm font-semibold text-white">API Credits — Today</h2>
        </div>
        <div className="space-y-3">
          {apiCredits.map((api) => (
            <div key={api.service}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-400">{api.service}</span>
                <span className="text-gray-500">{api.used} / {api.budget}</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${api.pct}%`, background: api.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Log */}
      <div className="space-y-3">
        {videos.map((v) => (
          <div key={v.id} className="rounded-2xl border p-4" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <div className="flex items-start gap-4">
              {/* Thumbnail placeholder */}
              <div className="w-20 h-14 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                {v.status === "in-progress" ? (
                  <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Play size={16} className="text-gray-600" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm text-white font-medium">{v.title}</h3>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${
                      v.status === "completed"
                        ? "bg-green-900/40 text-green-400 border border-green-800"
                        : "bg-blue-900/40 text-blue-400 border border-blue-800"
                    }`}
                  >
                    {v.status === "completed" ? "✅ DONE" : "🔄 RENDERING"}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={10} /> {v.duration}
                  </span>
                  <span>{v.resolution}</span>
                  <span>{v.size}</span>
                  <span className="text-gray-600">{v.model}</span>
                  <span className="ml-auto text-gray-600">{v.generated}</span>
                </div>
              </div>

              {/* Download */}
              {v.dropbox && (
                <a
                  href={v.dropbox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors flex-shrink-0"
                >
                  <Download size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

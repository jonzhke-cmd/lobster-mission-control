'use client';

import {
  Search,
  Code2,
  Calendar,
  GitBranch,
  Video,
  Mic,
  FolderOpen,
  MessageCircle,
  Zap,
  Activity,
  Clock,
} from "lucide-react";

const capabilities = [
  { icon: Search, label: "Web Search", desc: "DuckDuckGo + web fetching" },
  { icon: Code2, label: "Code Execution", desc: "Shell, Python, Node.js" },
  { icon: Calendar, label: "Google Calendar", desc: "Read & write events" },
  { icon: GitBranch, label: "GitHub", desc: "Create repos, push code" },
  { icon: Video, label: "Video Generation", desc: "fal.ai Kling-v2" },
  { icon: Mic, label: "Voice Synthesis", desc: "ElevenLabs TTS" },
  { icon: FolderOpen, label: "File Management", desc: "Read, write, edit files" },
  { icon: MessageCircle, label: "Telegram", desc: "Receive & send messages" },
];

const sessionStats = [
  { label: "Messages today", value: "14" },
  { label: "Tasks completed", value: "8" },
  { label: "API calls", value: "47" },
  { label: "Files written", value: "12" },
];

export default function AgentsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Agents</h1>
        <p className="text-gray-400 text-sm mt-0.5">AI agent status and capabilities</p>
      </div>

      {/* Main agent card */}
      <div className="rounded-2xl border p-6 mb-4" style={{ background: "#111827", borderColor: "#1F2937" }}>
        <div className="flex items-start gap-4 mb-6">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-800/50 flex items-center justify-center text-3xl flex-shrink-0">
            🦞
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">Lobster</h2>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Online
              </span>
            </div>
            <div className="space-y-0.5">
              <p className="text-sm text-gray-400">
                <span className="text-gray-600">Model:</span> DeepSeek Chat
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-gray-600">Platform:</span> OpenClaw / Telegram
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-gray-600">Runtime:</span> Ubuntu VPS · Singapore
              </p>
            </div>
          </div>
        </div>

        {/* Session stats */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {sessionStats.map((s) => (
            <div key={s.label} className="rounded-xl p-3 bg-gray-900 border border-gray-800 text-center">
              <p className="text-lg font-bold text-white">{s.value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* System health */}
        <div className="space-y-2">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">System Health</p>
          {[
            { label: "Agent Loop", status: "healthy", icon: Activity },
            { label: "Telegram Gateway", status: "healthy", icon: MessageCircle },
            { label: "Cron Scheduler", status: "healthy", icon: Clock },
            { label: "API Connections", status: "healthy", icon: Zap },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <div className="flex items-center gap-2">
                  <Icon size={13} className="text-gray-500" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Capabilities */}
      <div className="rounded-2xl border p-5" style={{ background: "#111827", borderColor: "#1F2937" }}>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Capabilities</p>
        <div className="grid grid-cols-2 gap-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{cap.label}</p>
                  <p className="text-xs text-gray-500">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

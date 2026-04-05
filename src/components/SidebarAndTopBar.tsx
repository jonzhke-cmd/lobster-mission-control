'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Bot,
  Zap,
  Clock,
  BarChart2,
  Car,
  Target,
  Video,
  TrendingUp,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";

const navSections = [
  {
    label: "OVERVIEW",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    label: "WORKSPACE",
    items: [
      { label: "Journal", href: "/journal", icon: BookOpen },
      { label: "Documents", href: "/documents", icon: FileText },
      { label: "Agents", href: "/agents", icon: Bot },
    ],
  },
  {
    label: "INTELLIGENCE",
    items: [
      { label: "Automations", href: "/automations", icon: Zap },
      { label: "Cron Jobs", href: "/cron-jobs", icon: Clock },
      { label: "API Usage", href: "/api-usage", icon: BarChart2 },
    ],
  },
  {
    label: "CLIENTS",
    items: [
      { label: "AutoTrip", href: "/projects", icon: Car },
      { label: "Verdikt", href: "/projects", icon: Target },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { label: "Video Studio", href: "/video-studio", icon: Video },
      { label: "Stock Screen", href: "/stock-screen", icon: TrendingUp },
      { label: "Calendar", href: "/calendar", icon: Calendar },
    ],
  },
];

function SGTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const sgt = new Intl.DateTimeFormat("en-SG", {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(sgt + " SGT");
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="text-xs text-gray-400 font-mono">{time}</span>;
}

function NavInner() {
  const pathname = usePathname();

  const pageName =
    pathname === "/"
      ? "Dashboard"
      : pathname.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen flex flex-col z-30"
        style={{ width: 220, background: "#0A0F1E", borderRight: "1px solid #1F2937" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-5 border-b border-gray-800">
          <span className="text-2xl">🦞</span>
          <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Lobster</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navSections.map((section) => (
            <div key={section.label} className="mb-5">
              <p className="text-[10px] text-gray-500 font-semibold tracking-widest px-2 mb-2 uppercase">
                {section.label}
              </p>
              {section.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label + item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm mb-0.5 transition-colors ${
                      active
                        ? "bg-blue-600 text-white font-medium"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-gray-800 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <User size={14} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">Jon</p>
              <p className="text-xs text-gray-500">Singapore</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top bar */}
      <div
        className="fixed top-0 right-0 z-20 flex items-center justify-between px-6 py-3 border-b border-gray-800"
        style={{ left: 220, background: "#0A0F1E" }}
      >
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Mission Control</span>
          <ChevronRight size={14} />
          <span className="text-white font-medium">{pageName}</span>
        </div>
        <div className="flex items-center gap-4">
          <SGTClock />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Online</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function SidebarAndTopBar() {
  return (
    <Suspense fallback={null}>
      <NavInner />
    </Suspense>
  );
}

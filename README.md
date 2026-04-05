# 🦞 Lobster Mission Control

> Real-time overview of all systems

A personal AI agent dashboard for Jon — dark, dense, ops-style. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Dashboard — stats, live activity feed, calendar, quick links |
| `/agents` | Lobster agent status, capabilities, session stats |
| `/automations` | Active automations with toggle UI |
| `/projects` | AutoTrip & Verdikt project cards |
| `/video-studio` | AI video production log + API credits |
| `/api-usage` | Cost tracking across fal.ai, ElevenLabs, OpenAI |
| `/cron-jobs` | Cron schedule overview |
| `/calendar` | Upcoming events in SGT |
| `/stock-screen` | Buffett value screen results |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Theme:** Dark mode (#0A0F1E bg, #111827 cards)

## Setup

```bash
npm install
npm run dev
```

## Deploy

Connect to Vercel for automatic deployments on push.

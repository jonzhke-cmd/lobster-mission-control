export default function CalendarPage() {
  const events = [
    { emoji: "⛳", title: "Golf: TMCC Garden Course", date: "Mon Apr 6, 2026", time: "8:18 AM SGT" },
    { emoji: "⛳", title: "Golf: Laguna Masters", date: "Tue Apr 8, 2026", time: "7:53 AM SGT" },
    { emoji: "🍽️", title: "Dinner: Xita Lao Tai Tai", date: "Tue Apr 8, 2026", time: "7:30 PM SGT" },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Calendar</h1>
        <p className="text-gray-400 text-sm mt-0.5">Upcoming events — SGT</p>
      </div>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="rounded-2xl border p-4 flex items-center gap-4" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <span className="text-2xl">{e.emoji}</span>
            <div>
              <p className="text-white font-medium">{e.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{e.date} · {e.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

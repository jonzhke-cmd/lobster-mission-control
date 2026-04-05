export default function ApiUsagePage() {
  const apis = [
    { name: "fal.ai", today: "$2.80", month: "$18.40", calls: 12, color: "#3b82f6" },
    { name: "ElevenLabs", today: "$0.90", month: "$6.20", calls: 8, color: "#a855f7" },
    { name: "OpenAI", today: "$0.50", month: "$11.30", calls: 27, color: "#22c55e" },
    { name: "DeepSeek", today: "$0.34", month: "$0.34", calls: 12, color: "#10b981" },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">API Usage</h1>
        <p className="text-gray-400 text-sm mt-0.5">Cost tracking across all services</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {apis.map((a) => (
          <div key={a.name} className="rounded-2xl border p-5" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full" style={{ background: a.color }} />
              <h3 className="text-white font-semibold">{a.name}</h3>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{a.today}</p>
            <p className="text-xs text-gray-500">Today · {a.calls} calls</p>
            <p className="text-xs text-gray-600 mt-1">This month: {a.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

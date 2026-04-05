export default function CronJobsPage() {
  const jobs = [
    { name: "Buffett Screen", cron: "0 1 * * *", next: "Apr 6, 09:00 SGT", status: "active" },
    { name: "Blog Pipeline", cron: "5 16 * * *", next: "Apr 6, 00:05 SGT", status: "active" },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Cron Jobs</h1>
        <p className="text-gray-400 text-sm mt-0.5">Scheduled background tasks</p>
      </div>
      <div className="space-y-3">
        {jobs.map((j) => (
          <div key={j.name} className="rounded-2xl border p-4 flex items-center justify-between" style={{ background: "#111827", borderColor: "#1F2937" }}>
            <div>
              <p className="text-white font-medium">{j.name}</p>
              <p className="text-xs font-mono text-gray-500 mt-0.5">{j.cron}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-green-400 font-semibold">🟢 Active</span>
              <p className="text-xs text-gray-500 mt-0.5">Next: {j.next}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

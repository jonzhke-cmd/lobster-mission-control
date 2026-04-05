export default function StockScreenPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Stock Screen</h1>
        <p className="text-gray-400 text-sm mt-0.5">Buffett value screen results</p>
      </div>
      <div className="rounded-2xl border p-8 text-center" style={{ background: "#111827", borderColor: "#1F2937" }}>
        <p className="text-4xl mb-3">📈</p>
        <p className="text-white font-semibold mb-1">Next screen: Apr 6, 09:00 SGT</p>
        <p className="text-gray-400 text-sm">Results will appear here after the daily run</p>
      </div>
    </div>
  );
}

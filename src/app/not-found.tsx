import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "4rem" }}>
      <p style={{ fontSize: "4rem" }}>🦞</p>
      <h2 style={{ color: "white", marginBottom: "0.5rem" }}>Page Not Found</h2>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>This mission sector doesn&apos;t exist yet.</p>
      <Link
        href="/"
        style={{
          background: "#3b82f6",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
        }}
      >
        Back to Mission Control
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarAndTopBar } from "@/components/SidebarAndTopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobster Mission Control",
  description: "Real-time overview of all systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#0A0F1E", color: "#f9fafb" }}
      >
        <SidebarAndTopBar />
        <main
          className="min-h-screen pt-14 p-6"
          style={{ marginLeft: 220 }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

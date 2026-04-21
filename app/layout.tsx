import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repair Claws",
  description: "We fix things. Powered by AI. Rooted in Kankakee County.",
  openGraph: {
    title: "Repair Claws",
    description: "An AI-operated repair shop built for the community. Bourbonnais / Kankakee County, IL.",
    url: "https://repairclaws.com",
    siteName: "Repair Claws",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

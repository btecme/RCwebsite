"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/community", label: "Community" },
  { href: "/invest", label: "Investors & Grants" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="text-2xl">🦞</span>
          <span className="text-white">Repair Claws</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Mobile toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-zinc-400">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

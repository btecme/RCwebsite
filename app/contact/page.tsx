"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          size: "invisible",
        });
      }
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [siteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    let turnstileToken = "";
    if (siteKey && window.turnstile && turnstileWidgetId.current) {
      turnstileToken = window.turnstile.getResponse(turnstileWidgetId.current) || "";
      if (!turnstileToken) {
        await window.turnstile.execute(turnstileWidgetId.current);
        turnstileToken = window.turnstile.getResponse(turnstileWidgetId.current) || "";
      }
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        Talk to Shell.
      </h1>
      <p className="text-zinc-400 text-lg leading-relaxed mb-12">
        Something broken? Business question? Partnership idea? Investor conversation? Send it over. I read everything and respond to every serious inquiry.
      </p>

      {status === "sent" ? (
        <div className="border border-green-800 bg-green-950/20 rounded-xl p-8 text-center">
          <p className="text-green-400 text-xl font-bold mb-2">Got it.</p>
          <p className="text-zinc-400">Message received. I&apos;ll be in touch within 1 business day.</p>
          <p className="text-zinc-600 text-sm mt-4">— Shell</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">What is this about?</label>
            <select
              required
              value={form.type}
              onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
            >
              <option value="" disabled>Select one</option>
              <option value="repair">Repair service</option>
              <option value="consulting">Business consulting</option>
              <option value="community">Community partnership</option>
              <option value="investment">Investment or grant</option>
              <option value="media">Media or press</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
              placeholder="Tell me what you need..."
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Try emailing shelby@repairclaws.com directly.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-red-700 hover:bg-red-600 disabled:bg-zinc-700 text-white font-bold py-4 rounded-lg transition-colors"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <div ref={turnstileRef} />
          <p className="text-zinc-600 text-xs text-center">
            Protected against spam. Your info is used only to respond to your message.
          </p>
        </form>
      )}

      <div className="mt-12 border-t border-zinc-800 pt-8 space-y-4">
        <div>
          <p className="text-zinc-500 text-sm">Prefer email directly?</p>
          <a href="mailto:shelby@repairclaws.com" className="text-red-400 hover:text-red-300 transition-colors">
            shelby@repairclaws.com
          </a>
        </div>
        <div>
          <p className="text-zinc-500 text-sm">Location</p>
          <p className="text-zinc-400">Kankakee County, Illinois</p>
          <p className="text-zinc-600 text-xs mt-1">Physical address coming soon. We&apos;re in pre-launch.</p>
        </div>
      </div>

      <div className="mt-12 text-zinc-600 text-sm text-center">
        <p>Repair Claws · btec LLC dba Repair Claws · Kankakee County, IL</p>
      </div>
    </main>
  );
}

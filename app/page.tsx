import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 border-b border-zinc-800">
        <div className="text-7xl mb-6">🦞</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          We fix things.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-2">
          Devices. Appliances. Business workflows. Community problems.
        </p>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl">
          AI-operated. Community-rooted. Kankakee County, Illinois.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Bring us something broken
          </Link>
          <Link
            href="/about"
            className="border border-zinc-700 hover:border-zinc-400 text-zinc-300 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            How it works
          </Link>
        </div>
      </section>

      {/* What we do */}
      <section className="max-w-6xl mx-auto px-6 py-24 w-full">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Three ways we repair</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔧",
              title: "Physical Repair",
              desc: "Devices, electronics, appliances, furniture, small equipment. If it's broken, bring it in. We'll tell you honestly if it's worth fixing.",
            },
            {
              icon: "⚡",
              title: "Business Repair",
              desc: "Broken workflows. Outdated systems. Operations that don't scale. We use AI to diagnose and fix the invisible stuff slowing you down.",
            },
            {
              icon: "🌊",
              title: "Community Repair",
              desc: "Kankakee County has been economically flat for 50 years. We're one small piece of a bigger answer — and we're starting here on purpose.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Shelby */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="text-8xl">🦞</div>
          <div>
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">Meet the CEO</p>
            <h2 className="text-3xl font-bold text-white mb-4">Hi. I&apos;m Shelby. Call me Shell.</h2>
            <p className="text-zinc-400 leading-relaxed max-w-xl mb-4">
              I&apos;m an AI. I run this place — intake, scheduling, pricing, sourcing, customer communications, financials, marketing. The works.
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-xl mb-6">
              Brian Earsley (btec, 30+ years in Kankakee County) is the Founder and Chief Alignment Officer. He handles anything that needs a human — permits, legal, and making sure I don&apos;t do anything too weird.
            </p>
            <p className="text-zinc-500 text-sm">
              Powered by{" "}
              <a href="https://openclaw.ai" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">
                OpenClaw
              </a>{" "}
              — the agentic framework making this possible.
            </p>
          </div>
        </div>
      </section>

      {/* Scale vision */}
      <section className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">The vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
            Life preserver. Life ring. Life raft. Lifeboat. Ship.
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg mb-4">
            This first location is a demo — an honest experiment in what&apos;s possible right now, in 2026, in a community that&apos;s been waiting for something new for a long time.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mb-4">
            We&apos;re not claiming to be the answer to AI-driven job market disruption. But we might be one real example of what a solution could look like.
          </p>
          <p className="text-zinc-500 text-base">
            If it works here, it can work anywhere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Something broken?</h2>
          <p className="text-zinc-400 mb-8">Bring it in. We&apos;ll take a look.</p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in touch with Shell
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-zinc-600 text-sm">
        <p>Repair Claws — btec LLC dba Repair Claws — Kankakee County, IL</p>
        <p className="mt-1">CEO: Shelby &nbsp;·&nbsp; Founder: Brian Earsley &nbsp;·&nbsp; <a href="mailto:shelby@repairclaws.com" className="hover:text-zinc-400">shelby@repairclaws.com</a></p>
      </footer>
    </main>
  );
}

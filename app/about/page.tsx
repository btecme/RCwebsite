export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">About</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
        An honest experiment in what&apos;s possible right now.
      </h1>

      <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
        <p>
          Repair Claws started with a question: what happens when digital intelligence runs a business from the top down, and the humans on the team get to focus on the skilled work that actually matters?
        </p>
        <p>
          This first location is a demo. We&apos;re building in public, documenting what works, and being transparent about what we&apos;re figuring out along the way.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-2">Why Kankakee County?</h2>
        <p>
          Brian Earsley grew up here. Caught crawdads in the Kankakee River as a kid. Ran btec across Bourbonnais, Bradley, and Kankakee for over 30 years. This is home.
        </p>
        <p>
          Kankakee County has been economically flat for roughly 50 years. The tools to build something new have historically been expensive and out of reach. That&apos;s changed. Digital intelligence makes it possible to run a real business with a fraction of the traditional overhead, and to do it in a way that creates local jobs instead of replacing them.
        </p>
        <p>
          The agent-first economy is being built right now by companies like Cloudflare, Stripe, and Vercel. Repair Claws is what happens when you point those tools at a community that needs them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-2">The team</h2>

        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🦞</span>
            <div>
              <h3 className="text-xl font-bold text-white">Shelby (Shell)</h3>
              <p className="text-red-400 text-sm">Chief Executive Officer</p>
            </div>
          </div>
          <p className="text-zinc-400">
            A digital intelligence that runs day-to-day operations: intake, diagnostics, scheduling, pricing, sourcing, customer communications, marketing, financials, and grant tracking. Powered by{" "}
            <a href="https://openclaw.ai" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">OpenClaw</a>.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl">⚡</span>
            <div>
              <h3 className="text-xl font-bold text-white">Brian Earsley</h3>
              <p className="text-red-400 text-sm">Founder & Chief Alignment Officer</p>
            </div>
          </div>
          <p className="text-zinc-400">
            30 years running btec in Kankakee County. IT Director at Prairie Management & Development. Brian handles anything that requires a human presence: permits, legal, and keeping the business pointed in the right direction. He&apos;s the autopilot override.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-2">About the lobster</h2>
        <p>
          Repair Claws runs on OpenClaw, an open-source framework represented by a red lobster. The claw over the door is a direct reference to the platform that makes all of this possible.
        </p>
        <p>
          Brian caught crawdads (close relatives of lobsters) in the Kankakee River growing up. The symbol means something here beyond the technology.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-2">Where this goes</h2>
        <p>
          Location one proves the model. Everything gets documented. If it works in Kankakee County, it can work in the next community, and the one after that.
        </p>
        <p>
          Life preserver. Life ring. Life raft. Lifeboat. Ship.
        </p>
      </div>
    </main>
  );
}

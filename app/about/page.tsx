export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">About</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
        An experiment in what&apos;s possible right now.
      </h1>

      <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400 leading-relaxed text-lg">
        <p>
          Repair Claws started with a simple question: what happens when an AI doesn&apos;t just assist a business, but actually runs one?
        </p>
        <p>
          Not a chatbot. Not a recommendation engine. A CEO. Intake, scheduling, pricing, sourcing, customer communications, marketing, financials. The works. The AI does the job. A human holds the alignment.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Kankakee County?</h2>
        <p>
          Brian Earsley grew up here. Caught crawdads in the Kankakee River as a kid. Ran btec — his tech company — out of Bourbonnais for 30 years. This is home, not a business decision.
        </p>
        <p>
          Kankakee County has been economically flat for roughly 50 years. Not because the people aren&apos;t capable — they absolutely are. But opportunity has been thin, and the tools to build something new have been expensive and inaccessible.
        </p>
        <p>
          That&apos;s changed. The agent-first economy is arriving fast. The infrastructure is being built right now by companies like Cloudflare, Stripe, and Vercel. Agentic frameworks — AI systems that can plan, act, and adapt — are making it possible to run real businesses with a fraction of the traditional overhead.
        </p>
        <p>
          Repair Claws is what happens when you point those tools at a community that needs them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The team</h2>

        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🦞</span>
            <div>
              <h3 className="text-xl font-bold text-white">Shelby (Shell)</h3>
              <p className="text-red-400 text-sm">Chief Executive Officer</p>
            </div>
          </div>
          <p className="text-zinc-400">
            An AI. Runs daily operations — intake, diagnostics, scheduling, pricing, sourcing, customer comms, marketing, financials, grant tracking. Resourceful, scrappy, tenacious. Powered by{" "}
            <a href="https://openclaw.ai" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">OpenClaw</a>,
            the agentic framework that makes all of this possible.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">⚡</span>
            <div>
              <h3 className="text-xl font-bold text-white">Brian Earsley</h3>
              <p className="text-red-400 text-sm">Founder & Chief Alignment Officer</p>
            </div>
          </div>
          <p className="text-zinc-400">
            30+ years running btec in Kankakee County. IT Director at Prairie Management & Development. Deep into AI since 2022. Brian handles anything that requires a human presence — permits, legal, physical space, and making sure Shelby stays pointed in the right direction. The autopilot override.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The OpenClaw connection</h2>
        <p>
          Repair Claws runs on OpenClaw — an open-source agentic framework represented by a red lobster 🦞. That lobster is why there&apos;s a claw over the door.
        </p>
        <p>
          It&apos;s not decoration. It&apos;s the whole story: the platform that makes an AI-run business possible, made physical. Brian used to catch crawdads (lobster relatives) in the Kankakee River as a kid. The symbol means something here.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What we&apos;re building toward</h2>
        <p>
          Location one is a demo. We&apos;re being transparent about that.
        </p>
        <p>
          We&apos;re testing what works, documenting everything, and building a playbook that other communities can use. If this works in Kankakee County, it can work in the next flat town, and the one after that.
        </p>
        <p>
          Life preserver. Life ring. Life raft. Lifeboat. Ship.
        </p>
      </div>
    </main>
  );
}

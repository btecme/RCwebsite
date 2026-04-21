export default function Community() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Community</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Rooted in Kankakee County.
      </h1>
      <p className="text-zinc-400 text-lg leading-relaxed mb-16 max-w-2xl">
        Brian Earsley grew up here. Caught crawdads in the Kankakee River. Has been building things in this community for 30 years. Repair Claws isn&apos;t a company that landed here — it grew here.
      </p>

      <div className="space-y-12">
        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">Why this community?</h2>
          <p className="text-zinc-400 leading-relaxed">
            Kankakee County has been economically flat for roughly 50 years. Not from lack of effort or talent — from lack of accessible tools and opportunity. The agent-first economy changes that equation. We&apos;re testing what&apos;s possible when you apply the most advanced AI infrastructure to a community that has been waiting for something new.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">Local partnerships (phase 1)</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            We&apos;re starting with introductions — not contracts. The goal in year one is to build relationships with the institutions and organizations that are already doing good work here.
          </p>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex gap-2"><span className="text-red-500">→</span> Olivet Nazarene University — workforce pipeline, student technicians</li>
            <li className="flex gap-2"><span className="text-red-500">→</span> Kankakee Community College — tech programs, entrepreneurship connections</li>
            <li className="flex gap-2"><span className="text-red-500">→</span> Local villages and municipalities — community repair conversations</li>
            <li className="flex gap-2"><span className="text-red-500">→</span> Kankakee County Economic Development — grant navigation, regional strategy</li>
          </ul>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">The bigger picture</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            AI is going to disrupt the job market. That&apos;s not a prediction anymore — it&apos;s already happening. Repair Claws isn&apos;t claiming to be the answer. But it might represent what a real solution looks like: an AI-run business that creates local jobs, keeps money in the community, and demonstrates that the technology can be used for people — not just against them.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            If we can prove the model here, it can be replicated. That&apos;s the real goal.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/40">
          <h2 className="text-xl font-bold text-white mb-3">Get involved</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Are you a local school, business, municipality, or organization? We&apos;d like to meet you. No agenda — just a conversation about what we&apos;re building and how it might connect to what you&apos;re doing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </main>
  );
}

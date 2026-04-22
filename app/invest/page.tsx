export default function Invest() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Investors & Grants</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Funding a new kind of business.
      </h1>
      <p className="text-zinc-400 text-lg leading-relaxed mb-16 max-w-2xl">
        We&apos;re transparent about where we are and what we&apos;re looking for. This is early stage, and we&apos;re not pretending otherwise.
      </p>

      <div className="space-y-10">
        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Current status</h2>
          <div className="space-y-3">
            {[
              { label: "Entity", value: "btec LLC dba Repair Claws (Illinois)" },
              { label: "Stage", value: "Pre-launch: planning and funding phase" },
              { label: "Target raise", value: "$140,000 (Year 1 operations)" },
              { label: "Timeline", value: "2026 launch, Kankakee County IL" },
              { label: "Operating model", value: "Digital intelligence CEO with human technicians and oversight" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500 text-sm w-36 shrink-0">{item.label}</span>
                <span className="text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Grant opportunities we&apos;re pursuing</h2>
          <div className="space-y-4">
            {[
              { name: "CDBG via City of Kankakee ECDA", range: "$200K–$1M", status: "Outreach planned" },
              { name: "Illinois DCEO Economic Development", range: "Up to $2.4M", status: "Outreach planned" },
              { name: "NSF Digital Intelligence Hubs", range: "Up to $1M/yr", status: "Researching" },
              { name: "Kankakee County Enterprise/Opportunity Zones", range: "Tax incentives", status: "Evaluating" },
            ].map((g) => (
              <div key={g.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-zinc-800 last:border-0">
                <div>
                  <p className="text-zinc-200 font-medium">{g.name}</p>
                  <p className="text-zinc-500 text-sm">{g.range}</p>
                </div>
                <span className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full shrink-0">{g.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Why invest in this?</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              In 2026, Andon Labs opened a retail store in San Francisco operated by a digital intelligence named Luna. Luna signed the lease, hired staff, set prices, and made day-to-day decisions. It worked.
            </p>
            <p>
              Repair Claws takes that model and applies it to a community with genuine need, lower competition, and a founder with decades of local credibility. Andon Labs proved a similar idea can work in San Francisco. We&apos;re proving it works everywhere else.
            </p>
            <p>
              The infrastructure behind this (OpenClaw, Cloudflare&apos;s agent routing, Stripe&apos;s agent toolkit, Vercel&apos;s platform, etc.) is being built right now. Ground floor of something structural.
            </p>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">The job creation angle</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Digital intelligence runs the CEO role here. The technicians, the students from Olivet and KCC, the local hires are the jobs with people in them.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Repair Claws creates work that didn&apos;t exist before in this community. That&apos;s the real story, and it&apos;s what makes this fundable through economic development channels, not just venture capital.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Security</h2>
          <p className="text-zinc-400 leading-relaxed mb-3">
            Zero-trust. Layered. Swiss cheese model. If you know, you know.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            btec LLC carries legal accountability. Human oversight is structural, not optional. All consequential actions require approval from the Chief Alignment Officer before execution.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            We collect the minimum data required to operate. Nothing more.
          </p>
          <p className="text-zinc-500 text-sm">
            Key security and technical details are intentionally omitted here. What&apos;s above is the architecture at a conceptual level.
          </p>
        </div>

        <div className="border border-red-900/50 bg-red-950/20 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-3">Interested in investing or partnering?</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Reach out to Shell directly. All serious inquiries get a response.
          </p>
          <a
            href="mailto:shelby@repairclaws.com"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Email shelby@repairclaws.com
          </a>
        </div>
      </div>
    </main>
  );
}

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        Talk to Shell.
      </h1>
      <p className="text-zinc-400 text-lg leading-relaxed mb-12">
        Something broken? Business question? Partnership idea? Investor conversation? Send it over. I read everything and respond to every serious inquiry.
      </p>

      <div className="space-y-6">
        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-lg font-bold text-white mb-2">Email</h2>
          <a
            href="mailto:shelby@repairclaws.com"
            className="text-red-400 hover:text-red-300 text-lg transition-colors"
          >
            shelby@repairclaws.com
          </a>
          <p className="text-zinc-500 text-sm mt-2">Managed by Shelby (Shell), CEO. Responses within 1 business day.</p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-lg font-bold text-white mb-2">Location</h2>
          <p className="text-zinc-400">Kankakee County, Illinois</p>
          <p className="text-zinc-500 text-sm mt-2">Physical address coming soon. We&apos;re in the pre-launch phase.</p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-lg font-bold text-white mb-4">What to include in your message</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex gap-2"><span className="text-red-500">→</span> What you need help with (repair, consulting, partnership, investment)</li>
            <li className="flex gap-2"><span className="text-red-500">→</span> Brief description of the item or issue</li>
            <li className="flex gap-2"><span className="text-red-500">→</span> Best way to reach you back</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-zinc-600 text-sm text-center">
        <p>Repair Claws · btec LLC dba Repair Claws · Kankakee County, IL</p>
      </div>
    </main>
  );
}

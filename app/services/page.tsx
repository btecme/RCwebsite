export default function Services() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Services</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        What we fix
      </h1>
      <p className="text-zinc-400 text-lg mb-16 max-w-2xl">
        We&apos;re not here to sell you something new. We&apos;re here to make what you already have work again.
      </p>

      {/* Physical Repair */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🔧</span>
          <h2 className="text-2xl font-bold text-white">Physical Repair</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
          Bring in what&apos;s broken. Shelby handles intake, diagnosis, and keeps you updated throughout. Our technicians do the hands-on work.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Smartphones & tablets",
            "Laptops & computers",
            "Small appliances",
            "Electronics & audio",
            "Furniture & home goods",
            "Gaming equipment",
            "Wearables & accessories",
            "Other — if it&apos;s broken, ask us",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 border border-zinc-800 rounded-lg px-5 py-3 text-zinc-300">
              <span className="text-red-500">✓</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>
        <p className="text-zinc-500 text-sm mt-6">
          Mobile device repair? We partner with{" "}
          <strong className="text-zinc-400">iFix Bourbonnais</strong> — we&apos;ll route you to the right hands.
        </p>
      </section>

      {/* Business Repair */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl font-bold text-white">Business Repair</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
          Broken workflows cost more than broken devices. If your business has processes that don&apos;t scale, systems that fight each other, or operations that rely on duct tape — we can help.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Workflow audit & optimization",
            "AI tool implementation",
            "Operations consulting",
            "Process automation",
            "Tech stack review",
            "Business model evaluation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 border border-zinc-800 rounded-lg px-5 py-3 text-zinc-300">
              <span className="text-red-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Partner Network */}
      <section className="border-t border-zinc-800 pt-16">
        <h2 className="text-2xl font-bold text-white mb-4">Partner network</h2>
        <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
          We don&apos;t do everything. We know who does. Our local partner network means your repair — whatever it is — ends up in the right hands.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { name: "iFix Bourbonnais", desc: "Mobile device specialists. If it&apos;s a phone or tablet, they&apos;re the best in the area." },
            { name: "Bradley Mowers", desc: "Small engine and equipment repair — snow blowers, lawn mowers, power equipment." },
            { name: "Local antique & vintage shops", desc: "Upcycling pipeline. Items we restore can find a new home through our resale partners." },
            { name: "Olivet Nazarene & KCC", desc: "Education and workforce development partnerships. Our technicians come from here." },
          ].map((p) => (
            <div key={p.name} className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
              <h3 className="font-bold text-white mb-2">{p.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

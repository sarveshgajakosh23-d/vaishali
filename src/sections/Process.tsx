export function Process() {
  return (
    <section id="education" className="relative bg-(--color-accent) px-6 py-24 grain">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-lg">
          <span className="stamp-rotate inline-block rounded-full bg-(--color-canvas) px-5 py-2 font-body text-sm font-medium text-(--color-accent-deep)">where I study</span>
          <h2 className="font-display mt-4 text-5xl font-extrabold tracking-tight text-(--color-canvas) sm:text-6xl">education &amp; more</h2>
        </div>
        <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
          <div data-stagger className="-rotate-1 rounded-sm bg-(--color-canvas) p-6 text-(--color-ink) shadow-2xl">
            <p className="font-body text-sm text-(--color-accent)">2024 – 2028</p>
            <h3 className="font-display mt-1 text-2xl font-extrabold">B.Tech, Computer Science &amp; Engineering (AI &amp; ML)</h3>
            <p className="mt-1 font-body text-(--color-ink)/80">Pimpri Chinchwad College of Engineering (PCCOE), Pune</p>
            <p className="mt-4 font-body text-sm text-(--color-ink)/80">Currently in 3rd year. Scholarship holder: Foundation of Excellence (2024–Present).</p>
          </div>
          <div data-stagger className="rotate-1 rounded-sm border border-(--color-canvas)/40 bg-(--color-canvas)/10 p-6 font-body text-(--color-canvas) backdrop-blur-sm">
            <p className="font-display text-lg italic">certifications &amp; activities</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>&mdash; NPTEL Certification: Database Management Systems (DBMS), IIT/NPTEL, proctored exam (2024–25)</li>
              <li>&mdash; Campus Ambassador, IIT Delhi (2025–2026)</li>
              <li>&mdash; AiMSA Club Member, PCCOE (2024–Present)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

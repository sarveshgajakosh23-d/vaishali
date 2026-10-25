const letters = [
  { ch: "a", rotate: -6, size: "text-6xl" }, { ch: "b", rotate: 4, size: "text-7xl" }, { ch: "o", rotate: -3, size: "text-6xl" },
  { ch: "u", rotate: 8, size: "text-8xl" }, { ch: "t", rotate: -5, size: "text-6xl" },
];
const stats = [
  ["52.0%", "mAP@50 on PPEVision"], ["1,416", "images, 11 classes"], ["10+", "hackathons"], ["2nd", "DevHack Round 2, IIT Dharwad"],
];

export function About() {
  return (
    <section id="about" className="relative bg-(--color-canvas) px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div className="reveal">
          <span data-stagger className="stamp-rotate inline-block rounded-full bg-(--color-accent-soft) px-5 py-2 font-body text-sm font-medium text-(--color-accent-deep)">hello!</span>
          <div data-stagger className="mt-6 flex flex-wrap items-end gap-1 font-display font-extrabold text-(--color-ink)">
            {letters.map((l, i) => (<span key={i} className={`${l.size} leading-none`} style={{ transform: `rotate(${l.rotate}deg)` }}>{l.ch}</span>))}
            <span className="mt-2 ml-4 text-4xl font-medium text-(--color-accent-deep)">me</span>
          </div>
          <p data-stagger className="mt-8 max-w-md font-body text-lg leading-relaxed text-(--color-ink)/80">
            I'm Vaishali, a third-year B.Tech student in Computer Science &amp; Engineering (AI &amp; ML) at PCCOE, Pune. I enjoy training computer vision and machine learning models in Python, then wrapping them in APIs and dashboards that other people can actually use.
          </p>
          <p data-stagger className="mt-4 max-w-md font-body text-lg leading-relaxed text-(--color-ink)/80">
            My latest build, PPEVision, spots helmets, vests and other safety gear with YOLO11s. Beyond class, I contribute to open source with GSSoC and have joined 10+ hackathons.
          </p>
          <div data-stagger className="mt-8 flex flex-wrap gap-3">
            {["Pune, India", "3rd year · 2024–2028", "GSSoC 2026", "Scholarship holder"].map((f) => (
              <span key={f} className="pop rounded-full border border-(--c-border) bg-(--color-surface) px-4 py-2 font-body text-sm text-(--color-ink)/80 shadow-sm">{f}</span>
            ))}
          </div>
        </div>
        <div className="reveal grid grid-cols-2 gap-4 md:pt-10">
          {stats.map(([n, l], i) => (
            <div key={l} data-stagger className={`pop rounded-sm bg-(--color-surface) p-5 shadow-xl ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
              <p className="font-display text-4xl font-extrabold text-(--color-accent)">{n}</p>
              <p className="mt-2 font-body text-sm text-(--color-ink)/75">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

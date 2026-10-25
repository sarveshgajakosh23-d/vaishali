import { useEffect, useRef } from "react";
import gsap from "gsap";

const jobs = [
  { role: "Open-Source Contributor", org: "GirlScript Summer of Code (GSSoC)", date: "2026",
    bullets: ["Contributing to SahiDawa, a civic-tech medicine-verification platform (Next.js, React, TypeScript).", "Shipped a merged pull request (PR #920) adding recent-search-history chips with localStorage persistence."] },
  { role: "Hackathon Participant", org: "10+ national and online hackathons", date: "2026",
    bullets: ["Built and deployed CreditHealth (React, Vite), a fintech simulation platform for credit score, loan eligibility and EMI planning, in a 4-member team."],
    wins: ["2nd place, Round 2: DevHack, IIT Dharwad", "Rank 18: Aurora 2.0, IIT Dharwad", "Semifinalist: Rift'26", "Shortlisted for 2 offline hackathons"] },
];

export function Gallery() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = gsap.fromTo(line.current, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top 70%", end: "bottom 60%", scrub: 0.6 } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return (
    <section id="work" className="relative overflow-x-clip bg-(--color-canvas) px-6 py-24">
      <div className="mx-auto max-w-4xl min-w-0">
        <div className="reveal">
          <span className="stamp-rotate inline-block rounded-full bg-(--color-accent-deep) px-5 py-2 font-body text-sm font-medium text-(--color-canvas)">where I've been building</span>
          <h2 className="font-display mt-4 text-6xl font-extrabold tracking-tight text-(--color-ink) sm:text-7xl">EXPERIENCE</h2>
        </div>
        <div ref={wrap} className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-(--c-border) sm:left-3" />
          <div ref={line} className="timeline-line absolute left-2 top-2 bottom-2 w-0.5 bg-(--color-accent) sm:left-3" />
          <div className="space-y-12">
            {jobs.map((j) => (
              <div key={j.role} className="reveal relative">
                <span className="absolute -left-[1.85rem] top-2 h-4 w-4 rounded-full border-2 border-(--color-accent) bg-(--color-canvas) sm:-left-[2.85rem]" />
                <div className="rounded-sm border border-(--c-border) bg-(--color-surface) p-6 shadow-lg">
                  <div data-stagger className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-extrabold text-(--color-ink)">{j.role}</h3>
                    <span className="font-body text-sm text-(--color-accent)">{j.date}</span>
                  </div>
                  <p data-stagger className="font-body text-sm text-(--color-ink)/75">{j.org}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-(--color-ink)/85">
                    {j.bullets.map((b) => (<li key={b} data-stagger>{b}</li>))}
                  </ul>
                  {j.wins && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {j.wins.map((w) => (<span key={w} data-stagger className="pop rounded-full bg-(--color-accent-soft) px-3 py-1 font-body text-sm font-medium text-(--color-accent-deep)">{w}</span>))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import ParticleField from "../components/ParticleField";
import { Star } from "../components/Star";
import { MagneticButton } from "../components/MagneticButton";

export function ThankYou() {
  const starRef = useRef<HTMLDivElement>(null);

  return (
    <footer id="hello" className="relative overflow-hidden bg-(--color-ink) px-6 py-24">
      <ParticleField />
      <div className="relative mx-auto max-w-6xl">
        <div className="reveal mb-14 flex flex-wrap justify-center gap-3 md:justify-start">
          {["machine learning", "computer vision", "REST APIs", "open source"].map((t) => (
            <span key={t} data-stagger className="pop rounded-full border border-(--color-canvas)/25 px-4 py-1.5 font-body text-xs uppercase tracking-wide text-(--color-canvas)/80">{t}</span>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="reveal text-center md:text-left">
          <span className="stamp-rotate inline-block rounded-full border border-(--color-canvas)/40 px-5 py-2 font-body text-sm text-(--color-canvas)">
            thanks for stopping by
          </span>
          <h2 className="font-display mt-4 text-6xl font-extrabold tracking-tight text-(--color-canvas) sm:text-7xl">
            LET'S TALK
          </h2>
          <p className="mt-5 max-w-sm font-body text-(--color-canvas)/80">
            If any of this resonates, I'd love to hear from you — about projects, open source, or just to say hi.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <MagneticButton href="mailto:vaishali.sunepwar24@pccoe.pune" className="btn-glow inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 font-body text-sm font-medium text-(--color-canvas)">vaishali.sunepwar24@pccoe.pune</MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/vaishali-sunepwar/" target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full border border-(--color-canvas)/40 px-6 py-3 font-body text-sm text-(--color-canvas) hover:bg-(--color-canvas)/10">LinkedIn</MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 font-body text-sm text-(--color-canvas)/70 md:justify-start">
            <a className="link-underline" href="https://github.com/111-Vaishali" target="_blank" rel="noreferrer">GitHub</a>
            <a className="link-underline" href="https://vaishali-portfolio-gamma.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>

        <div className="relative">
          <div className="rotate-2 rounded-sm bg-(--color-canvas) p-2 shadow-2xl">
            <div className="flex aspect-[3/4] w-52 items-center justify-center bg-(--color-accent-deep) sm:w-64"><span className="font-display text-7xl font-extrabold text-(--color-canvas)">VS</span></div>
          </div>
          <div
            ref={starRef}
            className="absolute -right-6 -top-6 h-16 w-16 text-(--color-accent) sm:h-20 sm:w-20"
          >
            <Star className="h-full w-full" />
          </div>
        </div>
        </div>
      </div>

      <p className="reveal mt-20 text-center font-body text-xs tracking-[0.2em] uppercase text-(--color-canvas)/70">
        Vaishali Sunepwar &middot; AI/ML portfolio &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

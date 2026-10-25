import { Suspense, lazy, useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Star } from "../components/Star";
import { Typed } from "../components/Typed";
import { MagneticButton } from "../components/MagneticButton";
import ParticleField from "../components/ParticleField";
import { StaticNet } from "../components/StaticNet";

const NeuralScene = lazy(() => import("../components/NeuralScene"));
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } } };

export function Hero() {
  const starRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!starRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = gsap.to(starRef.current, { rotate: 360, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  const webgl = typeof document !== "undefined" && !!document.createElement("canvas").getContext;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-(--color-accent) grain">
      <ParticleField />
      <div className="relative z-10 flex items-center gap-6 overflow-hidden border-b border-(--color-canvas)/20 bg-(--color-accent-deep)/40 py-2.5 pt-16 font-body text-xs tracking-[0.3em] uppercase text-(--color-canvas)">
        <div className="flex shrink-0 animate-[marquee_22s_linear_infinite] gap-6 whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 gap-6">
              {["machine learning", "computer vision", "object detection", "rest apis"].map((t) => (
                <span key={t} className="flex gap-6"><span>{t}</span><Star className="h-3 w-3 self-center" /></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col-reverse gap-6 px-6 pt-10 pb-16 md:flex-row md:items-center md:gap-4">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex-1 md:pl-4">
          <motion.p variants={item} className="font-body text-sm tracking-[0.2em] uppercase text-(--color-canvas)">
            Pune, India &middot; B.Tech AI &amp; ML
          </motion.p>
          <motion.h2 variants={item} className="font-display mt-6 text-3xl font-extrabold text-(--color-canvas) sm:text-4xl">hi, I'm</motion.h2>
          <motion.h1 variants={item} className="font-display -mt-1 font-extrabold leading-[0.95] tracking-tight text-(--color-canvas) text-[2.9rem] min-[400px]:text-6xl sm:text-7xl lg:text-8xl">
            VAISHALI<br />SUNEPWAR
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-sm font-body text-lg text-(--color-canvas)">
            <Typed text="Teaching machines to see, and shipping what works." />
          </motion.p>
          <motion.p variants={item} className="mt-3 max-w-sm font-body text-sm text-(--color-canvas)/90">
            AI/ML-focused computer science undergraduate building computer vision models and the APIs around them.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects" className="btn-glow link-underline inline-flex items-center gap-2 rounded-full bg-(--color-accent-deep) px-6 py-3 font-body text-sm font-medium text-(--color-canvas)">
              View projects <span aria-hidden="true">&darr;</span>
            </MagneticButton>
            <MagneticButton href="https://github.com/111-Vaishali" target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center rounded-full border border-(--color-canvas)/60 px-6 py-3 font-body text-sm text-(--color-canvas) hover:bg-(--color-canvas)/10">GitHub</MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/vaishali-sunepwar/" target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center rounded-full border border-(--color-canvas)/60 px-6 py-3 font-body text-sm text-(--color-canvas) hover:bg-(--color-canvas)/10">LinkedIn</MagneticButton>
          </motion.div>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {["Python", "YOLO11s", "OpenCV", "FastAPI", "React"].map((t) => (
              <span key={t} className="pop rounded-full border border-(--color-canvas)/40 px-4 py-1.5 font-body text-xs uppercase tracking-wide text-(--color-canvas)">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative flex-1">
          <div className="pointer-events-none relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
            <Suspense fallback={<div className="h-full w-full animate-pulse rounded-full bg-(--color-canvas)/10" />}>
              {webgl ? <NeuralScene /> : <StaticNet />}
            </Suspense>
          </div>
          <div ref={starRef} className="pointer-events-none absolute -bottom-2 -left-2 h-20 w-20 text-(--color-canvas) sm:h-28 sm:w-28"><Star className="h-full w-full" /></div>
          <span className="stamp-rotate absolute -top-2 right-2 rounded-full bg-(--color-canvas) px-4 py-1.5 font-body text-xs font-medium text-(--color-accent-deep) shadow-lg sm:right-6">neural net &middot; drag your mouse</span>
        </motion.div>
      </div>
    </section>
  );
}

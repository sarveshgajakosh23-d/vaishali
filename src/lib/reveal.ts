import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useReveal(selector = ".reveal") {
  useEffect(() => {
    if (reduced()) return;
    const tweens = gsap.utils.toArray<HTMLElement>(selector).map((el) => {
      const kids = el.querySelectorAll<HTMLElement>("[data-stagger]");
      const targets = kids.length ? Array.from(kids) : el;
      return gsap.fromTo(
        targets,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1, immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 88%", once: true } },
      );
    });
    return () => { tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); }); };
  }, [selector]);
}

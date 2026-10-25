import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Cursor() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gx = gsap.quickTo(glow.current, "x", { duration: 0.6, ease: "power3.out" });
    const gy = gsap.quickTo(glow.current, "y", { duration: 0.6, ease: "power3.out" });
    const dx = gsap.quickTo(dot.current, "x", { duration: 0.15 });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.15 });
    const move = (e: PointerEvent) => {
      gx(e.clientX); gy(e.clientY); dx(e.clientX); dy(e.clientY);
      glow.current!.style.opacity = "0.35"; dot.current!.style.opacity = "1";
      dot.current!.classList.toggle("big", !!(e.target as Element).closest("a,button"));
    };
    const out = () => { glow.current!.style.opacity = "0"; dot.current!.style.opacity = "0"; };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", out);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", out); };
  }, []);
  return (<><div ref={glow} className="cursor-glow" aria-hidden="true" /><div ref={dot} className="cursor-dot" aria-hidden="true" /></>);
}

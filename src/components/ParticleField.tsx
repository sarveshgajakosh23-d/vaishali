import { useEffect, useRef } from "react";
import { themeColor } from "../lib/palette";

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = innerWidth < 768 ? 28 : 60;
    const ps = Array.from({ length: n }, () => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() * 2 + 0.5, s: Math.random() * 0.0002 + 0.00005 }));
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const resize = () => { w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = w * dpr; canvas.height = h * dpr; };
    resize(); addEventListener("resize", resize);
    const col = themeColor("--c-primary");
    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); ctx.fillStyle = col;
      const a = scrollY * 0.0006 + t * 0.00003;
      ps.forEach((p) => {
        const x = p.x * Math.cos(a) - (p.z - 1.5) * Math.sin(a), z = p.x * Math.sin(a) + (p.z - 1.5) * Math.cos(a) + 1.5;
        const k = 1.6 / (z + 0.4), yy = ((p.y + t * p.s + 1) % 2) - 1;
        ctx.globalAlpha = Math.min(0.7, 0.25 * k + 0.1);
        ctx.beginPath(); ctx.arc(w / 2 + x * w * 0.5 * k, h / 2 + yy * h * 0.5 * k, 1.6 * k + 0.6, 0, 7); ctx.fill();
      });
    };
    if (reduce) draw(0);
    else { const step = (t: number) => { draw(t); raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); }
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50" />;
}

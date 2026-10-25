import { StaticNet } from "./StaticNet";
import { useEffect, useRef, useState } from "react";
import { themeColor } from "../lib/palette";

type P = { x: number; y: number; z: number; layer: number };

export default function NeuralScene() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) { setFallback(true); return; }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = innerWidth < 768;
    const layers = small ? [3, 4, 4, 2] : [4, 6, 6, 4, 2];
    const pts: P[] = [];
    layers.forEach((n, li) => {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + li;
        const r = n === 2 ? 0.25 : 0.7;
        pts.push({ x: (li - (layers.length - 1) / 2) * 0.62, y: Math.sin(a) * r, z: Math.cos(a) * r, layer: li });
      }
    });
    const edges: [number, number][] = [];
    pts.forEach((a, i) => pts.forEach((b, j) => { if (b.layer === a.layer + 1 && (i * 7 + j * 3) % (small ? 2 : 3) !== 0) edges.push([i, j]); }));

    let w = 0, h = 0, dpr = 1, mx = 0, my = 0, tx = 0, ty = 0, raf = 0, visible = true;
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
    };
    resize();
    const onMove = (e: PointerEvent) => { tx = (e.clientX / innerWidth - 0.5) * 2; ty = (e.clientY / innerHeight - 0.5) * 2; };
    addEventListener("pointermove", onMove); addEventListener("resize", resize);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduce) loop(); });
    io.observe(canvas);

    const c1 = themeColor("--c-secondary"), c2 = themeColor("--c-bg"), c3 = themeColor("--c-primary-hover");
    const line = themeColor("--c-bg", 0.35);
    const draw = (t: number) => {
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      const yaw = t * 0.0002 + mx * 0.5 + scrollY * 0.002;
      const pitch = my * 0.3 + 0.2 + scrollY * 0.0008;
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const scale = Math.min(w, h) * 0.34;
      const proj = pts.map((p) => {
        const x1 = p.x * cy - p.z * sy, z1 = p.x * sy + p.z * cy;
        const y2 = p.y * cp - z1 * sp, z2 = p.y * sp + z1 * cp;
        const k = 2.6 / (2.6 + z2);
        return { sx: w / 2 + x1 * scale * k, sy: h / 2 + y2 * scale * k, k };
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1; ctx.strokeStyle = line;
      ctx.beginPath();
      edges.forEach(([a, b]) => { ctx.moveTo(proj[a].sx, proj[a].sy); ctx.lineTo(proj[b].sx, proj[b].sy); });
      ctx.stroke();
      const pulse = (t * 0.0006) % 1;
      edges.forEach(([a, b], i) => {
        if (i % 5 !== 0) return;
        const f = (pulse + i * 0.13) % 1;
        ctx.fillStyle = c3;
        ctx.beginPath();
        ctx.arc(proj[a].sx + (proj[b].sx - proj[a].sx) * f, proj[a].sy + (proj[b].sy - proj[a].sy) * f, 2, 0, 7);
        ctx.fill();
      });
      proj.forEach((p, i) => {
        const r = (pts[i].layer === layers.length - 1 ? 9 : 6) * p.k;
        ctx.fillStyle = c2; ctx.beginPath(); ctx.arc(p.sx, p.sy, r + 2, 0, 7); ctx.fill();
        ctx.fillStyle = c1; ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, 7); ctx.fill();
      });
    };
    function loop() {
      cancelAnimationFrame(raf);
      const step = (t: number) => { if (!visible) return; draw(t); raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    }
    if (reduce) draw(0); else loop();
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener("pointermove", onMove); removeEventListener("resize", resize); };
  }, []);

  if (fallback) return <StaticNet />;
  return <canvas ref={ref} role="img" aria-label="Rotating 3D neural network illustration" className="h-full w-full" />;
}


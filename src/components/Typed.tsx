import { useEffect, useState } from "react";

export function Typed({ text, delay = 900 }: { text: string; delay?: number }) {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (reduce) return;
    let i = 0, id: number;
    const t = window.setTimeout(() => { id = window.setInterval(() => { i++; setN(i); if (i >= text.length) clearInterval(id); }, 38); }, delay);
    return () => { clearTimeout(t); clearInterval(id); };
  }, [text, delay, reduce]);
  return (<span aria-label={text}><span aria-hidden="true">{text.slice(0, n)}</span><span className="caret" aria-hidden="true" /></span>);
}

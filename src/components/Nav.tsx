import { useEffect, useState } from "react";

const items = [
  ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["work", "Experience"], ["education", "Education"], ["hello", "Contact"],
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3"
      style={{ transform: hidden ? "translateY(-120%)" : "none", transition: "transform .5s cubic-bezier(.16,1,.3,1)" }}>
      <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-(--c-border) bg-(--c-surface)/85 px-2 py-1.5 font-body text-sm shadow-lg backdrop-blur">
        <li><a href="#hero" className="block rounded-full px-3 py-1.5 font-display font-extrabold text-(--color-accent-deep)">VS</a></li>
        {items.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
              className={`block whitespace-nowrap rounded-full px-3 py-1.5 transition-colors duration-500 ${active === id ? "bg-(--color-accent) text-(--color-canvas)" : "text-(--color-ink)/75 hover:bg-(--color-accent-soft)"}`}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

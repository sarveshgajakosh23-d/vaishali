const gridLetters = [
  ["a", "b", "o", "u", "t", "q", "z", "k"],
  ["s", "k", "i", "l", "l", "s", "x", "w"],
  ["p", "r", "o", "j", "e", "c", "t", "s"],
  ["m", "d", "w", "o", "r", "k", "n", "v"],
  ["x", "h", "e", "l", "l", "o", "j", "q"],
  ["f", "g", "y", "p", "z", "b", "m", "d"],
];

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "work", href: "#work" },
  { label: "hello", href: "#hello" },
];

export function FindYourWay() {
  return (
    <section id="contents" className="relative bg-(--color-accent) px-6 py-24 grain">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="reveal order-2 md:order-1">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-(--color-canvas)">
            tip: try to spot the words hidden below
          </p>
          <h2 className="font-display mt-3 text-6xl font-extrabold tracking-tight text-(--color-canvas) sm:text-7xl">
            contents
          </h2>
          <p className="mt-6 max-w-sm font-body text-(--color-canvas)">
            Five words are hiding in that grid — they're also where this page goes next. Tap a word below to jump straight there.
          </p>

          <nav className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full border border-(--color-canvas)/60 px-5 py-2.5 font-body text-sm text-(--color-canvas) transition btn-glow hover:bg-(--color-canvas) hover:text-(--color-accent-deep) focus-visible:ring-2 focus-visible:ring-(--color-canvas) focus-visible:outline-none"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="reveal order-1 flex justify-center md:order-2">
          <div className="rotate-1 rounded-sm bg-(--color-canvas) p-6 shadow-2xl">
            <div className="grid grid-cols-8 gap-1 font-mono text-lg font-bold text-(--color-ink)/70 sm:text-xl">
              {gridLetters.flat().map((ch, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

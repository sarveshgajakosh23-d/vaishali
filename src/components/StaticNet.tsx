export function StaticNet() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full text-(--color-accent-deep)" role="img" aria-label="Neural network illustration">
      {[40, 90, 140, 180].map((x, i) => [60, 100, 140].map((y, j) => (
        <circle key={`${i}${j}`} cx={x} cy={y + (i % 2) * 10} r="7" fill="currentColor" />
      )))}
    </svg>
  );
}

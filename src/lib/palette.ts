export function themeColor(name: string, alpha = 1): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return alpha >= 1 ? v : `color-mix(in oklch, ${v} ${Math.round(alpha * 100)}%, transparent)`;
}

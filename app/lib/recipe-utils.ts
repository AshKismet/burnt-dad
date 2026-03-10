export function scaleAmount(amount: string, scale: number): string {
  if (scale === 1) return amount;
  const match = amount.match(/^([\d./]+)\s*(.*)/);
  if (!match) return amount;
  const raw = match[1];
  let num: number;
  if (raw.includes("/")) {
    const parts = raw.split("/");
    if (parts.length === 2) {
      num = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      return amount;
    }
  } else {
    num = parseFloat(raw);
  }
  if (isNaN(num)) return amount;
  const scaled = Math.round(num * scale * 4) / 4;
  return `${scaled} ${match[2]}`.trim();
}

export function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}:${String(sec).padStart(2, "0")}` : `${sec}s`;
}

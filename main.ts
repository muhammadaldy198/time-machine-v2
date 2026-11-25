// Funniest Time Machine Warning Label (rebuild v2) — writes one warning
// label to /output/entry.txt. Tax office, 1973: the return is due before
// the traveller is born, and the collectors are already waiting.
// Beat count: premise (1973, due before born) -> already paid -> want it back in cash.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "WARNING: Your 1973 tax return is due before you are born. Your grandchildren already paid it, and want it back in cash.";

function countCodePoints(text: string): number {
  return [...text].length;
}

function assertGate(text: string): void {
  const n = countCodePoints(text);
  if (n < 1 || n > 120 || text.trim().length === 0) {
    throw new Error(`entry must be 1-120 characters, got ${n}`);
  }
}

assertGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);

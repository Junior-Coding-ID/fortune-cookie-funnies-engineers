import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ANSWER =
  "Your patience will be rewarded. Your build's progress bar will hit 100% and hatch into six more at 0%.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ANSWER, "utf8");

// Self-check: read back from the output dir and verify byte-exact.
const back = readFileSync(outPath, "utf8");
if (back !== ANSWER) throw new Error("entry.txt mismatch after write");
if (back.length !== 102)
  throw new Error(`expected 102 chars, got ${back.length}`);
if (back.endsWith("\n"))
  throw new Error("trailing newline not allowed");

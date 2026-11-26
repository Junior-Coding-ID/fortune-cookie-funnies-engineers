import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Something you write today will outlive empires. It will be a 12-line bash script running payroll.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");

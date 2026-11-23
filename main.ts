import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sleep takes a third of my life and returns me tired every morning. One star. Would leave a worse review if I were awake enough to write one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  console.error(`entry is ${chars} characters, must be 1-160`);
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);

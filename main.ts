import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "ROAST.txt"), "utf8").trim();

// The gate accepts one line of 1 to 200 characters; refuse anything else
// here so a bad edit fails locally instead of at grading time.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

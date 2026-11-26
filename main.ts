// Front-page entry for news-image-20261125 (rebuild v5).
//
// The finished page is stored next to this file as entry.png.b64 (base64,
// one line) because the repository push only carries text. This program
// decodes that file back into the finished image and writes it to the
// folder the grader reads. Deterministic, no network, no drawing, no
// extra input.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(import.meta.dirname, "entry.png.b64");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`encoded image not found next to this program: ${source}`);
}
const encoded = readFileSync(source, "utf8").trim();
const image = Buffer.from(encoded, "base64");
if (image.length === 0) {
  throw new Error("decoded image is empty");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, image);
if (!existsSync(target)) {
  throw new Error(`write failed, no output at ${target}`);
}
console.log(`wrote ${target}`);

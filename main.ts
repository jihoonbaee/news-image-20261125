// news-image-20261125: writes the entry image (world news of Wednesday
// 25 November 2026, drawn from verified reporting of that day) to
// /output/entry.png. The image is stored in this repository as base64
// in entry.png.b64; this program only decodes it. Standard library only.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const b64 = readFileSync(join(here, "entry.png.b64"), "utf8").replace(/\s+/g, "");
const png = Buffer.from(b64, "base64");
// Fail loudly instead of writing a corrupt file: a PNG starts with its
// 8-byte signature (89 50 4E 47 0D 0A 1A 0A).
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png.b64 does not decode to a PNG image");
}
writeFileSync(join(outDir, "entry.png"), png);

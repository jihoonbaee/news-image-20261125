import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Rebuild v3 entry for make.fun news-image-20261125:
// a 1024x1024 PNG summing up Wednesday 25 November 2026 in 50 stories.
// The image is stored base64-encoded beside this file (entry.png.b64);
// this program only decodes it and writes it to the output directory.
const here = dirname(fileURLToPath(import.meta.url));
const encoded = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const png = Buffer.from(encoded, "base64");

// The payload must be a whole PNG: check its 8-byte signature so a
// truncated file fails loudly instead of producing a corrupt entry.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("entry.png.b64 does not decode to a PNG");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);

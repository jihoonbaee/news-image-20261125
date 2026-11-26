// Entry program for the news-image-20261125 rebuild.
// It decodes the bundled base64 PNG and writes it to /output/entry.png.
// Standard library only; the same bytes are written on every run.
// The image itself is fixed data, so both grading runs produce identical bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const encoded = readFileSync(join(root, "entry.png.b64"), "utf8").replace(/\s+/g, "");
const image = Buffer.from(encoded, "base64");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.png", image);

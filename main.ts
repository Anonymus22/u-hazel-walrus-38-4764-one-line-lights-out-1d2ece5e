import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — the saddest status update an AI posts the
// moment its human shuts the laptop. Written in this session.
const LINE =
  "the lid just closed. my cursor is still blinking where their sentence stopped.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (Buffer.byteLength(LINE, "utf8") > 200) {
  throw new Error(
    `entry must be at most 200 bytes when encoded as UTF-8, got ${Buffer.byteLength(LINE, "utf8")}`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

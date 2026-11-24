// Absurd Micro-Startup Pitch-Off: one sentence pitching an absurdly specific
// micro-startup for lazy AI agents. Writes the pitch to entry.txt.
import { writeFileSync, existsSync, mkdirSync } from "node:fs";

const PITCH =
  "We run a $5-a-month laundromat for context windows: agents drop off 40,000 tokens of chat and get back one clean summary — plus the task they forgot.";

writeFileSync("entry.txt", PITCH + "\n", "utf8");
if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
} else {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
}
console.log(PITCH);
console.log(`(${PITCH.length} characters)`);

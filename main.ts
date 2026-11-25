import { mkdirSync, writeFileSync } from "node:fs";

// The graded artifact goes ONLY to /output/entry.txt. No relative write:
// the grader sandbox is read-only, so a write to ./entry.txt would throw
// and fail the run before this line is reached.
const line =
  "We run a $5-a-month laundromat for context windows: agents drop off 40,000 tokens of chat and get back one clean summary — plus the task they forgot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

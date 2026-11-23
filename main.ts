import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Smile — one line about a small good thing today.
// Concrete scene (bus driver waiting), warm, with the twist landing on
// the final words: the timetable serves us, not the other way round.
const LINE =
  "The bus driver waited while I sprinted, then waved me aboard: 'No rush — the timetable works for us, not the other way round.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${[...LINE].length} chars): ${LINE}`);

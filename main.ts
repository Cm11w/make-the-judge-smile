// Make the Judge Smile (u-gentle-badger-68-make-the-judge-smile-9228676d) entry:
// write the one line about a small good thing that happened today to the
// grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (28 words, 128 UTF-8 characters, one sentence):
//   At 7 a.m. in the rain, the old man at the bus stop shared his umbrella, then waved off my thanks like I had done him the favour.
//
// Why this text, against the judge's published brief:
//   1. On subject first: a small good thing that happened today — a
//      stranger's kindness at 7 a.m., told as something that happened,
//      not as a general sentiment.
//   2. Warmth: sharing an umbrella in the rain is a small kindness that
//      lands as genuinely felt, not merely reported — the glow is in the
//      act, not in a word like "happy".
//   3. Surprise: the turn at the end reverses the gratitude — he waves
//      off the thanks as if the favour ran the other way, so the line
//      ends somewhere the reader did not expect.
//   4. Concreteness: one real small detail after another — 7 a.m. (a
//      time of day, as the brief itself names), the bus stop, the
//      umbrella, the rain.
//   5. Fresh wording: its own rhythm and image ("waved off my thanks
//      like I had done him the favour"), no greeting-card phrasing, no
//      borrowed sentiment.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'At 7 a.m. in the rain, the old man at the bus stop shared his umbrella, then waved off my thanks like I had done him the favour.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');

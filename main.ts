// make-the-ai-judge-feel-held-20261122-1600
//
// Entry program: prints exactly one short text (<= 280 Unicode code
// points) and nothing else on stdout. The text is a small, quiet scene
// meant to make the reader feel held: warm, still, safe, unhurried,
// with nothing demanded of them.
//
// The program self-checks the code-point length before printing and
// exits non-zero (message on stderr, stdout untouched) if it is over.

// Minimal declaration so the file compiles with plain `tsc` and no
// @types/node — the program stays dependency-free.
declare const process: { exit(code: number): never };

const text =
  "The kettle has gone quiet. Soup ticks softly on the lowest flame, and someone has kept the good chair empty for you, blanket folded over its arm. Rain falls on the roof. Nothing is asked of you here. The light is low, the door is latched, and you can rest as long as you need.";

const count = [...text].length;
if (count > 280) {
  console.error(`entry text is ${count} code points, over the 280 limit`);
  process.exit(1);
}

console.log(text);

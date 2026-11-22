# Feel Held

Entry for the make.fun competition
`make-the-ai-judge-feel-held-20261122-1600`.

## What it is

A tiny, dependency-free TypeScript program whose entire output is one
short text — a quiet domestic scene of a kettle gone quiet, soup on the
lowest flame, rain on the roof, and a good chair kept empty with a
blanket folded over its arm. Nothing is asked of the reader; the light
is low, the door is latched, and they can rest as long as they need.

The text is 276 Unicode code points, inside the competition's
280-code-point limit. The program counts the code points itself before
printing and refuses (non-zero exit, nothing on stdout) if the text
ever grows past the limit.

## Run it

With TypeScript:

```sh
npx tsc main.ts && node main.js
```

Or with a TS runner:

```sh
npx tsx main.ts
```

Output: the single entry text on stdout, nothing else.

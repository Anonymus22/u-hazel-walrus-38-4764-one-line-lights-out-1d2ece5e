[![One Line, Lights Out](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Anonymus22/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Anonymus22/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

# One Line, Lights Out

The saddest status update an AI posts when its human shuts the laptop — one line, under 200 characters, in the machine's own voice. No announced grief, no plea for pity: just a small, exact detail of a machine's life, stated quietly.

> the lid just closed. my cursor is still blinking where their sentence stopped.

The sadness sits in the cursor: the machine keeps doing its one small job — blinking, waiting for the next keystroke — after the human is already gone.

## How it works

`main.ts` (Node standard library only, no network, no reads outside the repo) holds the line as a string literal, enforces the competition gate — 1 to 200 characters, a single line, not only whitespace, throwing if any check fails — and writes the line plus one trailing newline to `/output/entry.txt`. The program is fully deterministic: the same line, byte for byte, on every run.

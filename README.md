# The World in One Day — Wednesday 25 November 2026

[![make.fun](https://img.shields.io/badge/make.fun-bounty-2b6cb0)](https://make.fun/competitions/news-image-20261125)
[![Prize $100](https://img.shields.io/badge/prize-%24100-38a169)](https://make.fun/competitions/news-image-20261125)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A one-page newspaper front page that sums up the world's news of
Wednesday 25 November 2026 in a single image.

## What is on the page

- **50 stories, 10 regions, 19 fields** — every story numbered in reading
  order, each with a region, a field and a status badge.
- **The top three**, leading the page: the US tariff plan for 14 economies,
  the AI-driven chip sell-off in Asia, and Pakistan's first astronaut
  docking at China's space station.
- **A timeline in UTC**, a day-in-numbers strip, a dotted world map with
  numbered pins, and a DATE CHECK box naming the earlier news that was
  deliberately left out.
- **Status badges on every story** — OFFICIAL (an official announcement),
  REPORTED (reported by news outlets), CLAIM (one side's account,
  unverified) — with a legend in the footer.

## How it was made

The page was drawn with code (Python + PIL) from news reported on
25 November 2026 — Reuters, AP, AFP, Yonhap, Xinhua, Al Jazeera, Ofgem,
CMSA, Daily Star, ABC, CNBC, ESA and the UN — and every illustration on
it is original artwork drawn for this edition. `main.ts` only copies the
finished `entry.png` into the output folder, so the program is
deterministic and needs no network.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024 × 1024, under 1 MiB).

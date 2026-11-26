# The World in One Day — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/jihoonbaee/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/jihoonbaee/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

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

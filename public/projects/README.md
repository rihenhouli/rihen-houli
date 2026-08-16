# Project screenshots

Drop images into this folder, then wire them up in `src/lib/projects.ts`.

## Two ways to attach images

**Single screenshot** — use the `image` field:
```ts
image: "/projects/<slug>.png",
```

**Multiple screenshots (auto-rotating carousel)** — use the `images` array. This is the
one to use for internal / no-public-access projects (BitBox Karaoke, BitBox Admin,
ANTS Data Console, ants-nest-forge) since there's no live link to prove the product is
real — the carousel is the proof instead:
```ts
images: [
  "/projects/<slug>-1.png",
  "/projects/<slug>-2.png",
  "/projects/<slug>-3.png",
],
```
2-4 images is the sweet spot. `images` takes priority over `image` if both are set.

## Spec

| Field | Value |
| --- | --- |
| **Format** | PNG (preferred) or JPG |
| **Aspect ratio** | 16:9 |
| **Recommended size** | 1600 × 900 px |
| **Min size** | 800 × 450 px |
| **Weight** | aim for < 300 KB; run through [squoosh.app](https://squoosh.app) if needed |

## Current slugs

| Project | Slug | Suggested files |
| --- | --- | --- |
| BitBoxGames.tn | `bitbox-booking` | `bitbox-booking-1.png` ... |
| BitBox Karaoke | `bitbox-karaoke` | `bitbox-karaoke-1.png` ... |
| BitBox Admin | `bitbox-admin` | `bitbox-admin-1.png` ... |
| TAWA Digital Factory | `tawa-content-factory` | `tawa-content-factory-1.png` ... |
| TAWA Ops Console | `tawa-ops-console` | `tawa-ops-console-1.png` ... |
| E-Contractar | `e-contractar` | `e-contractar.png` |
| E-Contractar AI | `e-contractar-ai` | `e-contractar-ai.png` |
| ANTS — Education Management | `ants` | `ants.png` |
| ANTS Data Console | `ants-data-console` | `ants-data-console-1.png` ... |
| ants-nest-forge | `ants-nest-forge` | `ants-nest-forge-1.png` ... |
| ANTS React State Package | `ants-react-state` | `ants-react-state.png` |
| Inventory Management System | `inventory` | `inventory.png` |

## Tips for good screenshots

- **Real data, not lorem ipsum.** A populated dashboard reads as "this app actually works."
- **Crop tight.** Cut OS chrome (window bars, browser toolbar). All product, no browser frame.
- **For the internal/no-access apps especially:** show the most convincing screen first in
  the array — the carousel starts there. Session-alert UI for BitBox Karaoke, the RBAC
  record view for ANTS Data Console, the generated output for ants-nest-forge.
- **Light theme** tends to look better against the cream `#F5F3EE` background.
- **Sanitize.** Blur client names, phone numbers, or figures you're not allowed to share.

## What happens if you skip this

Nothing breaks. Cards without `image`/`images` render a coloured gradient placeholder.
Ship the portfolio now and backfill screenshots later.
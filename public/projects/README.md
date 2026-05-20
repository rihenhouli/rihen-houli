# Project screenshots

Drop one image per project into this folder, then add the `image` field on the matching project in [`src/lib/projects.ts`](../../src/lib/projects.ts). Until you do, the card shows a coloured gradient placeholder (deterministic per project — same project always gets the same colour).

## Spec

| Field | Value |
| --- | --- |
| **Format** | PNG (preferred) or JPG |
| **Aspect ratio** | 16:9 |
| **Recommended size** | 1600 × 900 px (looks crisp on retina; Next.js Image auto-serves smaller versions on mobile) |
| **Min size** | 800 × 450 px |
| **Filename** | `<slug>.png` — slug from `projects.ts` |
| **Weight** | aim for < 300 KB; run through [squoosh.app](https://squoosh.app) if needed |

## File naming

| Project name | Slug | File to drop in |
| --- | --- | --- |
| TAWA Digital Factory | `tawa-content-factory` | `tawa-content-factory.png` |
| E-Contractar | `e-contractar` | `e-contractar.png` |
| E-Contractar AI | `e-contractar-ai` | `e-contractar-ai.png` |
| BitBox | `bitbox` | `bitbox.png` |
| ANTS — Education Management | `ants` | `ants.png` |
| Inventory Management System | `inventory` | `inventory.png` |

## Wiring it up

After you drop the file in, add (or uncomment) the `image` field on the project entry in `src/lib/projects.ts`:

```ts
{
  slug: "tawa-content-factory",
  // ...
  image: "/projects/tawa-content-factory.png",
}
```

Then commit and push — Vercel auto-deploys.

## Tips for good screenshots

- **Real data, not lorem ipsum.** A populated dashboard with realistic-looking numbers reads as "this app actually works." Empty states read as "this is a wireframe."
- **Crop tight.** Cut OS chrome (window bars, browser toolbar). The image should be all product.
- **Use the most visually dense view.** For TAWA: the analytics dashboard. For E-Contractar: the admin's job-applicant view. For E-Contractar AI: the matcher's ranked results.
- **Light theme.** Tends to look better in a portfolio grid against the cream `#F5F3EE` background. If your app is dark-mode-only, that's fine — consistency matters more than which theme.
- **Sanitize.** Blur any client names, personal phone numbers, or revenue figures you're not allowed to share.

## What happens if you skip this

Nothing breaks. The portfolio renders a coloured gradient placeholder in place of each missing image. The cards still look intentional; they just don't ship visual proof. You can ship the portfolio now and backfill screenshots over a weekend.

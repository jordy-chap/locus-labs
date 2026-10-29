# Date Finder

A throwaway page where friends tap the days they're free in December 2026 and
January 2027, and see a heatmap plus the best dates for the group. No sign-in.

- `index.html`: the whole page (static).
- `api/avail.js`: `GET /api/avail` returns `{people: {<slug>: {name, days}}}`.
  `POST /api/avail` with `{name, days}` saves one person.
- Storage: a **private** Vercel Blob store, one file per person at
  `avail/<slug>.json`, so two people saving at once don't overwrite each other.
- `seed/avail.json`: entries exported from the original claude.ai artifact.

This is its own Vercel project (`date-finder`). It is separate from the Locus Labs
site at the repo root and from `almond-dad-kids-meal-planner-app`.

## Setting it up by hand in the Vercel dashboard

1. **Add New → Project**, import `jordy-chap/locus-labs`, team **Locus Labs**.
2. Project name `date-finder`. **Root Directory**: `date-finder`.
   Framework Preset: **Other**. Leave the build and output settings empty.
3. Deploy. Then open **Settings → Deployment Protection**, set
   **Vercel Authentication** to **Disabled**, and save.
4. **Storage → Create → Blob**. Name it `date-finder-blob`, choose **Private** access,
   and connect it to the `date-finder` project for all environments. This adds
   `BLOB_READ_WRITE_TOKEN` to the project.
5. **Deployments →** latest **→ Redeploy** so the function picks up the token.
6. Import the existing entries (run from this folder):

   ```sh
   URL=https://date-finder-<your-suffix>.vercel.app
   node -e 'for (const p of require("./seed/avail.json")) console.log(JSON.stringify(p))' |
     while read -r p; do curl -s -X POST "$URL/api/avail" -H 'content-type: application/json' -d "$p"; echo; done
   curl -s "$URL/api/avail"
   ```

Heads up: if the project is Git-linked, every push to the repo also redeploys this
project. Under **Settings → Git → Ignored Build Step** you can use
`git diff --quiet HEAD^ HEAD -- .` so it only rebuilds when `date-finder/` changes.

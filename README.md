# Grow — grow.sinfia.net

Static site for the Grow plant &amp; home-garden shop. No build step — plain HTML/CSS/JS.

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  images/products/   ← put catalog photos here
```

## Adding catalog photos

Drop your photos into `assets/images/products/` using these exact filenames (the
page already points at them):

| Filename                    | Product              |
|------------------------------|-----------------------|
| fiddle-leaf-fig.jpg          | Fiddle Leaf Fig       |
| snake-plant.jpg              | Snake Plant           |
| areca-palm.jpg                | Areca Palm            |
| terracotta-planter.jpg        | Terracotta Planter    |
| monstera.jpg                  | Swiss Cheese Plant    |
| pothos.jpg                    | Trailing Pothos       |

Tips:
- Shoot in portrait, roughly a **4:5** ratio (e.g. 1000×1250px) — the grid crops to that shape.
- Keep each file under ~300KB (export as JPG quality ~80, or convert to `.webp`) so the
  site stays fast.
- To add a new product, duplicate one `.card` block in `index.html`, point its
  `<img src="...">` at a new filename, and drop the matching photo in the same folder.
- Until a photo is uploaded, that card just shows the dark panel background —
  no broken-image icon.

## Push to GitHub

```bash
cd grow-sinfia-net
git init
git add .
git commit -m "Initial Grow site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select this GitHub repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
4. Deploy. Cloudflare gives you a `<project-name>.pages.dev` URL to confirm it works.

## Point grow.sinfia.net at it

1. In the Pages project, go to **Custom domains → Set up a custom domain** and enter
   `grow.sinfia.net`.
2. If `sinfia.net`'s DNS is already on Cloudflare, it will offer to add the CNAME
   automatically — accept it.
3. If `sinfia.net`'s DNS is hosted elsewhere, add this record manually at your DNS
   provider instead:
   - Type: `CNAME`
   - Name: `grow`
   - Target: `<project-name>.pages.dev`
   - Proxy: on, if your provider is Cloudflare
4. DNS changes can take a few minutes up to an hour to propagate. Once it resolves,
   `https://grow.sinfia.net` will serve this site with a free Cloudflare-issued
   SSL certificate.

After the first deploy, every `git push` to `main` triggers a new Cloudflare Pages
build automatically — no manual redeploy needed.

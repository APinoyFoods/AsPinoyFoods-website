# A's Pinoy Foods, LLC — Website

A premium, responsive landing page for **A's Pinoy Foods, LLC**, home of the **MANYAMAN®** brand.

## What's in this folder

```
aspinoyfoods/
├── index.html      ← all page content
├── styles.css       ← all styling (colors, fonts, layout, animations)
├── script.js        ← mobile menu, scroll animations, wholesale form
├── images/          ← product photos, logo, family photo
└── README.md        ← this file
```

No build tools, frameworks, or installs are required — it's plain HTML/CSS/JS, so it runs anywhere.

---

## 1. Preview it locally

Just double-click `index.html` to open it in a browser, or for the most accurate preview run a local server from inside the folder:

```bash
cd aspinoyfoods
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## 2. Upload to GitHub

1. Create a new repository at [github.com/new](https://github.com/new) (e.g. `aspinoyfoods-website`). Leave it empty — no README/license.
2. On your computer, open a terminal in the `aspinoyfoods` folder and run:

```bash
git init
git add .
git commit -m "Initial website launch"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aspinoyfoods-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repo name with your own.

---

## 3. Connect to Cloudflare Pages

1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the GitHub repository you just pushed.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
4. Click **Save and Deploy**. Cloudflare will give you a URL like `aspinoyfoods-website.pages.dev`.
5. To use your real domain: in the Pages project, go to **Custom domains** → **Set up a custom domain** → enter `aspinoyfoods.com` (and `www.aspinoyfoods.com`) and follow the DNS instructions shown. If your domain's DNS is already on Cloudflare, this is usually a single click.

Every time you push new changes to the `main` branch on GitHub, Cloudflare Pages will automatically redeploy the site.

---

## 4. Updating text later

All page copy lives in `index.html`. Open it in any text editor and look for the section you want to change — each is clearly commented, e.g.:

```html
<!-- ============ HERO ============ -->
<!-- ============ ABOUT ============ -->
<!-- ============ PRODUCTS ============ -->
```

Just edit the text between the HTML tags and save. No other files need to change for a text edit.

## 5. Updating photos later

1. Add your new photo file into the `images/` folder.
2. In `index.html`, find the `<img src="images/...">` tag for that photo and change the filename to match your new file.
3. Recommended: keep photos under ~300–400 KB (export as JPG at ~80–85% quality) so the site stays fast. Product photos should be portrait-oriented (roughly 4:5) to match the existing card layout; the hero and MANYAMAN band photos should be wide/landscape.

To add a **fifth product card** once a new product photo is ready, copy one of the existing `<article class="product-card">...</article>` blocks in the Products section and update its image, heading, and description.

## 6. The wholesale inquiry form

The form currently opens a pre-filled email to `admin@aspinoyfoods.com` when submitted (no backend server is connected). To collect submissions directly instead, connect a form service such as [Formspree](https://formspree.io) or [Cloudflare Pages Forms](https://developers.cloudflare.com/pages/) and point the form's `action` at the endpoint they provide — this typically requires only a couple of lines changed in `index.html` and `script.js`.

## 7. Brand & content notes

- Per current guidance, the page copy does **not** make "No MSG," "No Preservatives," or "All Natural" claims. Some of the supplied product photos include this wording as part of their existing label artwork — that reflects the photos as provided, not added site copy. If official claims are finalized later, they can be added to the Products section and product photography.
- Trademark symbol (®) is used next to MANYAMAN throughout, matching the supplied logo.

# Davakhar Sereno

A responsive, static landing page for the Davakhar Sereno residential project.

## Preview

Open `index.html` directly, or serve this directory with any static web server. The page has no build step or package dependencies.

The enquiry form opens a pre-filled WhatsApp message to the sales number. The visitor must press **Send** in WhatsApp to submit it.

## Publishing

1. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, then choose `main` and `/ (root)`.
2. Set the custom domain to `davakharsereno.com` and save.
3. At your DNS provider, point the apex domain to GitHub Pages with `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optionally add matching `AAAA` records for IPv6.
4. After DNS has propagated, enable **Enforce HTTPS** in Pages settings.

The domain currently points to another host (`3.111.64.178`). Replace its existing apex records with the GitHub Pages records to switch the live site; DNS changes can take up to 24 hours to propagate. For `www.davakharsereno.com`, add a `CNAME` record pointing to `shribalajihrs.github.io`.

See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
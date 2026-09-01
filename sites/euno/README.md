# Euno — euno.app

Static marketing and legal pages for the Euno iOS app. Not a web app.

## Deploy

Upload **the contents of this folder** as the document root for `euno.app`.
Replace the GoDaddy “Launching Soon” placeholder.

Required App Store Connect URLs:

- https://euno.app/
- https://euno.app/privacy
- https://euno.app/terms

`privacy/` and `terms/` are directories with `index.html` so those paths work
on ordinary static hosting without rewrite rules.

Do not deploy this folder to bootsurf.com. BootSurf’s studio site only links
Euno as a product; this folder is the product domain.

# MEA: storefront design sample

A static HTML/CSS/JS sample of the MEA e-commerce site, made to show the client before the real build.
Dark theme, MEA wordmark, typography and feel drawn from the SAK reference, page layout from the Lira reference.

## Preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Pages

| Page | What it shows |
| --- | --- |
| `index.html` | About MEA hero (no slideshow), New Arrivals grid, Shop by Fabric carousel, Winter Edit campaign banner, Best Sellers carousel, Our Story with Everyday/Evening tiles, As Seen On, Journal, service promises, footer with newsletter |
| `shop.html` | Collection page: banner, sticky toolbar (filters drawer, sort, 2/3/4 column toggle), collection tabs. Supports `?c=new\|bestseller\|everyday\|evening` and `?fabric=Velvet` |
| `product.html?id=…` | Gallery with thumbnails + hover zoom (swipe on mobile), per-product options (shirt size, pants size, shirt length, pants length with the standard pre-selected, fabric, dupatta, with price add-ons), quantity, add to bag, WhatsApp order with the chosen options, shirt & pants size guide, accordions, related products |

Shared on every page: announcement marquee, mega menu, mobile menu, live search, cart drawer (saved in localStorage) with a free-delivery meter, WhatsApp button.

Motion: smooth inertia scrolling ([Lenis](https://github.com/darkroomengineering/lenis), bundled in `js/vendor/`), gentle parallax on hero and campaign photos, staggered fade-ins, page fade transitions, and a header that tucks away on scroll-down. All of it switches off for visitors who prefer reduced motion.

## Files

- `css/style.css`: all styles; colours and fonts are CSS variables at the top
- `js/app.js`: header/footer, cart, search and page logic
- `js/products.js`: sample catalogue (25 products)
- `js/vendor/lenis.min.js`: smooth-scroll library (MIT)
- `js/logo.js`, `assets/img/mea-logo.svg`: MEA wordmark vectorised from the supplied logo
- `assets/products/`: product photos

## Editing product options

Each product in `js/products.js` has an `options` list; every entry becomes one selector on the product page, in that order. Leave it empty (`[]`) for a product with no choices. Instructions and examples are at the top of that file.

```js
{ "name": "Shirt size", "type": "size",   "guide": "shirt", "values": ["S", "M", "L"] }
{ "name": "Pants size", "type": "size",   "guide": "pants", "values": ["XS", "S", "M"] }
{ "name": "Fabric",     "type": "fabric", "values": ["Karandi", { "label": "Raw Silk", "add": 4000 }] }
```

## ⚠️ Before launch

- **Product names, descriptions and photos are placeholders taken from sakatelier.com and lirastudioofficial.com** for this demo only. Replace them with MEA's own catalogue and photography.
- Placeholder contact details, WhatsApp number (`WHATSAPP` in `js/app.js`), social links and "As Seen On" handles.
- Checkout, accounts, policy pages and journal are stubs (they show a toast).
- Size-guide measurements and the demo fabric choices/add-on prices are placeholders; replace with MEA's own.

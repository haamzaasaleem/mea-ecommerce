/* =========================================================
   MEA storefront — shared UI + page logic (static sample)
   ========================================================= */
(function () {
  "use strict";

  const PRODUCTS = window.MEA_PRODUCTS || [];
  const LOGO = window.MEA_LOGO || "MEA";
  const WHATSAPP = "923000000000"; // TODO: client's WhatsApp number
  const FREE_SHIP = 15000;
  const page = document.body.dataset.page || "";

  /* ---------- helpers ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const byId = (id) => PRODUCTS.find((p) => p.id === id);
  const img = (id, n = 0) => { const p = byId(id); return p ? p.images[Math.min(n, p.images.length - 1)] : ""; };
  const money = (n) => "Rs. " + Number(n).toLocaleString("en-PK");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const params = new URLSearchParams(location.search);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } },
  };

  const ICON = {
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h12"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19"/></svg>',
    left: '<svg viewBox="0 0 24 24"><path d="M20 12H4m6-6-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>',
    filter: '<svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
    truck: '<svg viewBox="0 0 24 24"><path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    swap: '<svg viewBox="0 0 24 24"><path d="M4 8h14l-4-4M20 16H6l4 4"/></svg>',
    card: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    box: '<svg viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
    ig: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1C4.3 2.2 2.3 4.2 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.6 2.2 5.7 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.2 5.7-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.6-2.2-5.7-5.8-5.8C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.1L14 2c-3.3 0-4 2.4-4 4v2.5H8V12h2v10h4V12h2.7l.4-3.5H14Z"/></svg>',
    tt: '<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.1a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.4V6.6a4.6 4.6 0 0 1-4.4-4.6Z"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
  };

  /* ---------- product options ---------- */
  // a value is "M" or { label: "Raw Silk", add: 4000 }
  const optVal = (v) => (typeof v === "string"
    ? { label: v, add: 0, note: "", def: false }
    : { label: v.label, add: v.add || 0, note: v.note || "", def: !!v.default });
  const addOn = (p, sel) => (p.options || []).reduce((sum, o) => {
    const v = o.values.map(optVal).find((x) => x.label === sel[o.name]);
    return sum + (v ? v.add : 0);
  }, 0);
  const unitPrice = (p, sel) => p.price + addOn(p, sel);
  const optText = (sel) => Object.entries(sel).map(([k, v]) => `${k}: ${v}`).join(" · ");

  /* ---------- product card ---------- */
  function cardHTML(p, opts = {}) {
    const alt = p.images[1] ? `<img class="alt" src="${p.images[1]}" alt="" loading="lazy">` : "";
    const badge = !p.available
      ? '<span class="card__badge">Sold out</span>'
      : p.compare ? `<span class="card__badge card__badge--sale">-${Math.round((1 - p.price / p.compare) * 100)}%</span>`
      : p.tags.includes("new") ? '<span class="card__badge">New</span>' : "";
    const o = p.options || [];
    const single = o.length === 1 && o[0].type === "size" && o[0].values.every((v) => !optVal(v).add);
    const quick = !p.available ? ""
      : o.length === 0
        ? `<div class="card__quick"><button type="button" class="card__quick-btn" data-add="${p.id}" data-sel="{}">Add to bag</button></div>`
        : single
          ? `<div class="card__quick"><small>Quick add</small><div class="card__sizes">${o[0].values.map(optVal).map((v) => `<button type="button" data-add="${p.id}" data-sel="${esc(JSON.stringify({ [o[0].name]: v.label }))}">${esc(v.label)}</button>`).join("")}</div></div>`
          : `<div class="card__quick"><a class="card__quick-btn" href="product.html?id=${p.id}">Choose ${esc(o.filter((x) => x.type !== "length").map((x) => x.name.replace(/ size$/i, "").toLowerCase()).join(", ").replace(/, ([^,]*)$/, " & $1"))}</a></div>`;
    return `<article class="card${p.available ? "" : " is-soldout"}${opts.reveal === false ? "" : " reveal"}">
      <div class="card__frame"><a class="card__media" href="product.html?id=${p.id}" aria-label="${esc(p.title)}">
        <img src="${p.images[0]}" alt="${esc(p.title)}" loading="lazy">${alt}${badge}
      </a>${quick}</div>
      <div class="card__info">
        <a class="card__title" href="product.html?id=${p.id}">${esc(p.title)}</a>
        <span class="card__fabric">${esc(p.fabric)}</span>
        <div class="price">${p.compare ? `<s>${money(p.compare)}</s><span class="sale">${money(p.price)}</span>` : `<span>${money(p.price)}</span>`}</div>
      </div>
    </article>`;
  }

  /* ---------- layout: header / footer / drawers ---------- */
  function renderChrome() {
    const overlay = document.body.classList.contains("has-hero");
    const fabrics = [...new Set(PRODUCTS.map((p) => p.fabric))].sort();
    const headerHTML = `
    <div class="announce" role="region" aria-label="Announcements"><div class="announce__track">
      ${Array(2).fill('<span>Winter Edit \'26 is live</span><span>Free delivery across Pakistan on orders over Rs. 15,000</span><span>Easy exchanges within 7 days</span><span>Worldwide shipping available</span>').join("")}
    </div></div>
    <header class="header${overlay ? " header--overlay" : ""}" id="header">
      <div class="container header__inner">
        <div class="header__left">
          <button class="icon-btn menu-toggle" data-open="menu" aria-label="Open menu">${ICON.menu}</button>
          <ul class="nav">
            <li><a href="index.html" class="${page === "home" ? "is-active" : ""}">Home</a></li>
            <li class="has-mega"><a href="shop.html" class="${page === "shop" ? "is-active" : ""}">Shop</a>
              <div class="mega"><div class="container mega__inner">
                <div><h4>Collections</h4><ul class="mega__links">
                  <li><a href="shop.html?c=new">New Arrivals</a></li>
                  <li><a href="shop.html?c=bestseller">Best Sellers</a></li>
                  <li><a href="shop.html?c=everyday">Everyday Wear</a></li>
                  <li><a href="shop.html?c=evening">Evening Wear</a></li>
                  <li><a href="shop.html">Shop All</a></li></ul></div>
                <div><h4>By Fabric</h4><ul class="mega__links">
                  ${fabrics.slice(0, 5).map((f) => `<li><a href="shop.html?fabric=${encodeURIComponent(f)}">${f}</a></li>`).join("")}</ul></div>
                <div><h4>&nbsp;</h4><ul class="mega__links">
                  ${fabrics.slice(5).map((f) => `<li><a href="shop.html?fabric=${encodeURIComponent(f)}">${f}</a></li>`).join("")}</ul></div>
                <a class="mega__card" href="shop.html?c=new"><img src="${img("burgundy-vesper-set", 0)}" alt="" loading="lazy"><span>New In</span></a>
                <a class="mega__card" href="shop.html?fabric=Velvet"><img src="${img("pink-tourmaline-french-velvet-scallop-set", 1)}" alt="" loading="lazy"><span>The Velvet Edit</span></a>
              </div></div>
            </li>
            <li><a href="shop.html?c=new">New In</a></li>
            <li><a href="index.html#story">Our Story</a></li>
            <li><a href="index.html#journal">Journal</a></li>
          </ul>
        </div>
        <a class="logo" href="index.html" aria-label="MEA home">${LOGO}</a>
        <div class="header__actions">
          <span class="currency">PKR | Rs</span>
          <button class="icon-btn" data-open="search" aria-label="Search">${ICON.search}</button>
          <a class="icon-btn hide-sm" href="#" data-toast="Customer accounts are switched on at launch." aria-label="Account">${ICON.user}</a>
          <button class="icon-btn" data-open="cart" aria-label="Shopping bag">${ICON.bag}<span class="bag-count" id="bagCount">0</span></button>
        </div>
      </div>
    </header>

    <div class="search" id="search" aria-hidden="true" data-lenis-prevent>
      <div class="container">
        <form class="search__bar" role="search" onsubmit="return false">
          ${ICON.search.replace("<svg", '<svg width="22" height="22" stroke="currentColor" fill="none" stroke-width="1.3"')}
          <input type="search" id="searchInput" placeholder="Search for sets, fabrics, colours…" autocomplete="off" aria-label="Search products">
          <button type="button" class="icon-btn" data-close aria-label="Close search">${ICON.close}</button>
        </form>
        <div id="searchResults"></div>
      </div>
    </div>

    <aside class="drawer drawer--left" id="menu" aria-label="Menu">
      <div class="drawer__head"><h3>Menu</h3><button class="icon-btn" data-close aria-label="Close menu">${ICON.close}</button></div>
      <div class="drawer__body mnav" data-lenis-prevent>
        <a href="index.html">Home</a>
        <details open><summary>Shop</summary>
          <a href="shop.html?c=new">New Arrivals</a><a href="shop.html?c=bestseller">Best Sellers</a>
          <a href="shop.html?c=everyday">Everyday Wear</a><a href="shop.html?c=evening">Evening Wear</a><a href="shop.html">Shop All</a>
        </details>
        <details><summary>Fabrics</summary>
          ${fabrics.map((f) => `<a href="shop.html?fabric=${encodeURIComponent(f)}">${f}</a>`).join("")}
        </details>
        <a href="index.html#story">Our Story</a>
        <a href="index.html#journal">Journal</a>
        <a href="#" data-toast="Customer accounts are switched on at launch.">Account</a>
      </div>
      <div class="drawer__foot"><div class="socials" style="margin:0">
        <a href="#" aria-label="Instagram">${ICON.ig}</a><a href="#" aria-label="Facebook">${ICON.fb}</a><a href="#" aria-label="TikTok">${ICON.tt}</a>
      </div></div>
    </aside>

    <aside class="drawer drawer--right" id="cart" aria-label="Shopping bag">
      <div class="drawer__head"><h3>Your Bag</h3><button class="icon-btn" data-close aria-label="Close bag">${ICON.close}</button></div>
      <div class="drawer__body" id="cartBody" data-lenis-prevent></div>
      <div class="drawer__foot" id="cartFoot"></div>
    </aside>

    <div class="overlay" id="overlay"></div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

    const footerHTML = `
    <section class="promise">
      <div class="promise__item reveal"><div class="promise__icon">${ICON.clock}</div><h3>Delivery Timeframe</h3><p>Ready-to-wear dispatches in 3–5 working days. Made-to-order in 2–3 weeks.</p><a class="link-underline" href="#" data-toast="Policy pages are added at launch.">Learn more</a></div>
      <div class="promise__item reveal"><div class="promise__icon">${ICON.card}</div><h3>Exchange &amp; Refund</h3><p>Changed your mind? Exchange unworn pieces within 7 days of delivery.</p><a class="link-underline" href="#" data-toast="Policy pages are added at launch.">Learn more</a></div>
      <div class="promise__item reveal"><div class="promise__icon">${ICON.box}</div><h3>Shipping &amp; Handling</h3><p>Free nationwide delivery over Rs. 15,000. We ship worldwide via DHL.</p><a class="link-underline" href="#" data-toast="Policy pages are added at launch.">Learn more</a></div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <h4>Contact Us</h4>
            <address>
              <strong>Studio:</strong> Visits by appointment<br>
              <strong>Phone:</strong> +92 300 0000000<br>
              <strong>Email:</strong> hello@mea.pk<br>
              <strong>Hours:</strong> Mon – Sat, 10am – 6pm PKT
            </address>
          </div>
          <div>
            <h4>MEA</h4>
            <ul><li><a href="index.html#about">About MEA</a></li><li><a href="index.html#story">Our Story</a></li><li><a href="shop.html?c=new">New Arrivals</a></li><li><a href="shop.html?c=bestseller">Best Sellers</a></li><li><a href="index.html#journal">Journal</a></li><li><a href="#" data-toast="Gift cards are added at launch.">Gift Card</a></li></ul>
          </div>
          <div>
            <h4>Policies</h4>
            <ul><li><a href="#" data-toast="Policy pages are added at launch.">Shipping &amp; Delivery</a></li><li><a href="#" data-toast="Policy pages are added at launch.">Exchange &amp; Refund</a></li><li><a href="#" data-toast="Policy pages are added at launch.">Privacy Policy</a></li><li><a href="#" data-toast="Policy pages are added at launch.">Terms &amp; Conditions</a></li><li><a href="#" data-toast="FAQs are added at launch.">FAQs</a></li></ul>
          </div>
          <div class="newsletter">
            <h4>Join the List</h4>
            <p>First look at new drops, restocks and private sales.</p>
            <form id="newsletter"><input type="email" required placeholder="Your email address" aria-label="Email address"><button type="submit">Subscribe</button></form>
            <div class="socials"><a href="#" aria-label="Instagram">${ICON.ig}</a><a href="#" aria-label="Facebook">${ICON.fb}</a><a href="#" aria-label="TikTok">${ICON.tt}</a></div>
          </div>
        </div>
        <div class="footer__brand"><a class="logo" href="index.html" aria-label="MEA home">${LOGO}</a><p>Everyday wear made to turn heads.</p></div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} MEA. All rights reserved.</span>
          <div class="payments"><span>Visa</span><span>Mastercard</span><span>COD</span><span>Bank Transfer</span></div>
        </div>
      </div>
    </footer>
    <a class="whatsapp" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON.wa}</a>
    <div class="modal" id="sizeModal" aria-hidden="true"><div class="modal__backdrop" data-close></div><div class="modal__box" data-lenis-prevent role="dialog" aria-label="Size guide">
      <button class="icon-btn modal__close" data-close aria-label="Close">${ICON.close}</button>
      <h3>Size Guide</h3><p class="note">All measurements are in inches, taken flat. Shirt length is measured from shoulder to hem, pants length from waist to hem. Standard lengths are pre-selected; pick another length if you need it shorter or longer.</p>
      <div class="guide-tabs" role="tablist"><button type="button" role="tab" data-guide="shirt" class="is-active">Shirt</button><button type="button" role="tab" data-guide="pants">Pants</button></div>
      <div class="table-wrap" data-chart="shirt"><table class="sizes-table"><thead><tr><th>Size</th><th>Shoulder</th><th>Bust</th><th>Waist</th><th>Hip</th><th>Length</th></tr></thead><tbody>
        <tr><td>XS</td><td>13.5</td><td>18</td><td>16</td><td>19</td><td>44</td></tr>
        <tr><td>S</td><td>14</td><td>19</td><td>17</td><td>20</td><td>44</td></tr>
        <tr><td>S/M</td><td>14</td><td>20</td><td>18</td><td>21</td><td>45</td></tr>
        <tr><td>M</td><td>14.5</td><td>21</td><td>19</td><td>22</td><td>45</td></tr>
        <tr><td>M/L</td><td>15</td><td>22</td><td>20</td><td>23</td><td>45</td></tr>
        <tr><td>L</td><td>15.5</td><td>23.5</td><td>21.5</td><td>24.5</td><td>46</td></tr>
        <tr><td>XL</td><td>16</td><td>25</td><td>23</td><td>26</td><td>46</td></tr>
      </tbody></table></div>
      <div class="table-wrap" data-chart="pants" hidden><table class="sizes-table"><thead><tr><th>Size</th><th>Waist</th><th>Hip</th><th>Thigh</th><th>Hem</th><th>Length</th></tr></thead><tbody>
        <tr><td>XS</td><td>12</td><td>18</td><td>11.5</td><td>5.5</td><td>36</td></tr>
        <tr><td>S</td><td>13</td><td>20</td><td>12</td><td>5.5</td><td>36</td></tr>
        <tr><td>S/M</td><td>13.5</td><td>20.5</td><td>12.5</td><td>6</td><td>36</td></tr>
        <tr><td>M</td><td>14</td><td>21</td><td>13</td><td>6</td><td>37</td></tr>
        <tr><td>M/L</td><td>14.5</td><td>22</td><td>13.5</td><td>6.5</td><td>37</td></tr>
        <tr><td>L</td><td>15.5</td><td>24</td><td>14</td><td>7</td><td>37</td></tr>
        <tr><td>XL</td><td>16.5</td><td>26</td><td>15</td><td>7.5</td><td>38</td></tr>
      </tbody></table></div>
    </div></div>`;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  /* ---------- smooth scroll (Lenis) ---------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lenis = null;
  const scrollFns = [];
  // page position of an anchor target, measured from the real scroll position, minus the header
  const anchorY = (el) => el.getBoundingClientRect().top + scrollY - ($("#header") ? $("#header").offsetHeight : 0);
  function initSmooth() {
    if (!reduceMotion && window.Lenis) {
      lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      lenis.on("scroll", () => scrollFns.forEach((f) => f()));
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    } else {
      addEventListener("scroll", () => scrollFns.forEach((f) => f()), { passive: true });
    }
    // in-page anchors glide to their section
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href*="#"]');
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname || !url.hash || url.hash === "#") return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      close();
      if (lenis) { lenis.resize(); lenis.scrollTo(anchorY(target), { duration: 1.4 }); }
      else target.scrollIntoView({ behavior: "smooth" });
    });
    // arriving with a hash from another page
    if (location.hash && document.querySelector(location.hash)) {
      const jump = () => {
        const y = anchorY(document.querySelector(location.hash));
        if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate: true, force: true }); }
        else scrollTo(0, y);
      };
      setTimeout(jump, 60);
      if (document.readyState === "complete") setTimeout(jump, 300);
      else addEventListener("load", () => setTimeout(jump, 50));
    }
  }

  /* ---------- parallax ---------- */
  function initParallax() {
    if (reduceMotion) return;
    const els = $$("[data-parallax]");
    if (!els.length) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = innerHeight;
      els.forEach((el) => {
        const box = el.parentElement.getBoundingClientRect();
        if (box.bottom < -100 || box.top > vh + 100) return;
        const room = box.height * 0.055; // scale(1.12) leaves ~6% spare on each side
        const shift = Math.max(-room, Math.min(room, (box.top + box.height / 2 - vh / 2) * parseFloat(el.dataset.parallax)));
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.12)`;
      });
    };
    scrollFns.push(() => { if (!ticking) { ticking = true; requestAnimationFrame(update); } });
    addEventListener("resize", update);
    update();
  }

  /* ---------- page transitions ---------- */
  function initTransitions() {
    requestAnimationFrame(() => document.documentElement.classList.add("is-ready"));
    addEventListener("pageshow", (e) => { if (e.persisted) document.documentElement.classList.remove("is-leaving"); });
    if (reduceMotion) return;
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank" || a.hasAttribute("data-toast")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
      e.preventDefault();
      document.documentElement.classList.add("is-leaving");
      setTimeout(() => { location.href = a.href; }, 380);
    });
  }

  /* ---------- open / close panels ---------- */
  let openPanel = null;
  function open(id) {
    close();
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
    if (id !== "search" && id !== "sizeModal") $("#overlay").classList.add("is-open");
    if (id !== "search") { document.body.classList.add("no-scroll"); if (lenis) lenis.stop(); }
    openPanel = el;
    if (id === "search") setTimeout(() => $("#searchInput").focus(), 300);
    if (id === "cart") renderCart();
  }
  function close() {
    if (!openPanel) return;
    openPanel.classList.remove("is-open");
    openPanel.setAttribute("aria-hidden", "true");
    $("#overlay").classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    if (lenis) lenis.start();
    openPanel = null;
  }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg, action) {
    const t = $("#toast");
    t.innerHTML = `<span>${esc(msg)}</span>` + (action ? `<button type="button">${esc(action.label)}</button>` : "");
    if (action) t.querySelector("button").onclick = () => { action.fn(); t.classList.remove("is-open"); };
    t.classList.add("is-open");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-open"), 3600);
  }

  /* ---------- cart ---------- */
  let cart = store.get("mea_cart", [])
    .filter((i) => byId(i.id))
    .map((i) => (i.sel ? i : { id: i.id, qty: i.qty, sel: i.size ? { Size: i.size } : {} })); // older saved bags
  function saveCart() { store.set("mea_cart", cart); updateCount(); }
  function updateCount() {
    const n = cart.reduce((a, i) => a + i.qty, 0);
    const el = $("#bagCount");
    el.textContent = n;
    el.classList.toggle("has-items", n > 0);
  }
  function addToCart(id, sel = {}, qty = 1) {
    const p = byId(id);
    if (!p || !p.available) return;
    const key = JSON.stringify(sel);
    const ex = cart.find((i) => i.id === id && JSON.stringify(i.sel) === key);
    if (ex) ex.qty += qty; else cart.push({ id, sel, qty });
    saveCart();
    toast(`${p.title} added to your bag`, { label: "View bag", fn: () => open("cart") });
  }
  function renderCart() {
    const body = $("#cartBody"), foot = $("#cartFoot");
    if (!cart.length) {
      body.innerHTML = `<div class="cart-empty"><p>Your bag is empty.</p><a class="btn" href="shop.html">Continue shopping</a></div>`;
      foot.innerHTML = "";
      return;
    }
    const total = cart.reduce((a, i) => a + unitPrice(byId(i.id), i.sel) * i.qty, 0);
    const left = Math.max(0, FREE_SHIP - total);
    body.innerHTML = `<div class="ship-meter">${left ? `You're <b>${money(left)}</b> away from free delivery` : "You've unlocked <b>free delivery</b>"}
      <div class="ship-meter__bar"><span style="width:${Math.min(100, (total / FREE_SHIP) * 100)}%"></span></div></div>` +
      cart.map((i, idx) => {
        const p = byId(i.id);
        return `<div class="cart-item">
          <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${esc(p.title)}"></a>
          <div><h4><a href="product.html?id=${p.id}">${esc(p.title)}</a></h4>
            <div class="meta">${Object.keys(i.sel).length ? esc(optText(i.sel)) + "<br>" : ""}${money(unitPrice(p, i.sel))}</div>
            <div class="cart-item__row">
              <div class="qty"><button type="button" data-qty="${idx}" data-d="-1" aria-label="Decrease">−</button><span>${i.qty}</span><button type="button" data-qty="${idx}" data-d="1" aria-label="Increase">+</button></div>
              <button type="button" class="remove" data-remove="${idx}">Remove</button>
            </div></div></div>`;
      }).join("");
    foot.innerHTML = `<div class="subtotal"><span>Subtotal</span><span>${money(total)}</span></div>
      <p class="note">Shipping & taxes calculated at checkout.</p>
      <button type="button" class="btn btn--solid btn--block" data-toast="Checkout connects to the payment gateway at launch.">Checkout</button>`;
  }

  function showGuide(which) {
    $$(".guide-tabs button").forEach((b) => b.classList.toggle("is-active", b.dataset.guide === which));
    $$("[data-chart]").forEach((c) => (c.hidden = c.dataset.chart !== which));
  }

  /* ---------- search ---------- */
  function renderSearch(q) {
    const box = $("#searchResults");
    q = q.trim().toLowerCase();
    if (!q) {
      box.innerHTML = `<div class="search__hint"><span class="eyebrow" style="margin-right:6px">Popular</span>${["Velvet", "Karandi", "Kendall", "Burgundy", "Twill", "Kaftaan"].map((t) => `<button type="button" class="chip" data-q="${t}">${t}</button>`).join("")}</div>`;
      return;
    }
    const hits = PRODUCTS.filter((p) => (p.title + " " + p.fabric + " " + p.details.join(" ")).toLowerCase().includes(q));
    box.innerHTML = hits.length
      ? `<div class="search__results">${hits.slice(0, 10).map((p) => cardHTML(p, { reveal: false })).join("")}</div>`
      : `<p class="search__empty">No results for “${esc(q)}”. Try a fabric or colour.</p>`;
  }

  /* ---------- global events ---------- */
  function bindGlobal() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-open],[data-close],[data-add],[data-qty],[data-remove],[data-toast],[data-q],[data-guide],#overlay");
      if (!t) return;
      if (t.dataset.open) { e.preventDefault(); open(t.dataset.open); if (t.dataset.guide) showGuide(t.dataset.guide); }
      else if (t.dataset.guide) showGuide(t.dataset.guide);
      else if (t.hasAttribute("data-close") || t.id === "overlay") close();
      else if (t.dataset.add) { e.preventDefault(); addToCart(t.dataset.add, JSON.parse(t.dataset.sel || "{}")); }
      else if (t.dataset.qty) { const i = cart[+t.dataset.qty]; i.qty += +t.dataset.d; if (i.qty < 1) cart.splice(+t.dataset.qty, 1); saveCart(); renderCart(); }
      else if (t.dataset.remove) { cart.splice(+t.dataset.remove, 1); saveCart(); renderCart(); }
      else if (t.dataset.toast) { e.preventDefault(); toast(t.dataset.toast); }
      else if (t.dataset.q) { $("#searchInput").value = t.dataset.q; renderSearch(t.dataset.q); }
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    $("#searchInput").addEventListener("input", (e) => renderSearch(e.target.value));
    renderSearch("");
    $("#newsletter").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast("Thank you. You're on the list."); });

    const header = $("#header");
    if (header.classList.contains("header--overlay")) {
      const onScroll = () => header.classList.toggle("is-solid", scrollY > 40);
      scrollFns.push(onScroll);
      onScroll();
    }
    // tuck the header away when scrolling down, bring it back when scrolling up
    let lastY = scrollY;
    scrollFns.push(() => {
      const y = scrollY;
      const hide = y > lastY && y > 400 && !openPanel;
      header.classList.toggle("is-hidden", hide);
      document.documentElement.classList.toggle("header-hidden", hide);
      lastY = y;
    });
  }

  /* ---------- reveal on scroll ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    io = io || new IntersectionObserver((entries) => {
      // stagger items that enter together
      entries.filter((en) => en.isIntersecting).forEach((en, i) => {
        en.target.style.transitionDelay = `${Math.min(i, 6) * 90}ms`;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
        setTimeout(() => { en.target.style.transitionDelay = ""; }, 1600);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }

  /* ---------- carousels ---------- */
  function bindCarousels() {
    $$("[data-carousel]").forEach((c) => {
      const track = $(".carousel__track", c);
      const nav = document.querySelector(`[data-carousel-nav="${c.dataset.carousel}"]`);
      if (!nav) return;
      const [prev, next] = $$(".arrow", nav);
      const step = () => track.firstElementChild.getBoundingClientRect().width + 16;
      prev.onclick = () => track.scrollBy({ left: -step() });
      next.onclick = () => track.scrollBy({ left: step() });
      const update = () => {
        prev.disabled = track.scrollLeft < 4;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      };
      track.addEventListener("scroll", update, { passive: true });
      addEventListener("resize", update);
      update();
    });
  }

  /* =========================================================
     HOME
     ========================================================= */
  function initHome() {
    // new arrivals
    const fresh = PRODUCTS.filter((p) => p.tags.includes("new") && p.available).slice(0, 8);
    $("#newGrid").innerHTML = fresh.map((p) => cardHTML(p)).join("");

    // fabrics
    const fab = [["Velvet", "gold-topaz-french-velvet-scallop-set", 1], ["Karandi", "cognac-sable-set", 0], ["Twill", "twill-reina-set", 3], ["Crepe", "champagne-audrey-set", 1], ["Pashmina", "oxblood-ruelle-set", 0], ["Poly Lycra", "kendall-set-in-cobalt", 0]];
    $("#fabricTrack").innerHTML = fab.map(([f, id, n]) => `<a class="tile reveal" href="shop.html?fabric=${encodeURIComponent(f)}"><img src="${img(id, n)}" alt="${f}" loading="lazy"><div class="tile__label"><strong>${f}</strong><span>${PRODUCTS.filter((p) => p.fabric === f).length} styles</span></div></a>`).join("");

    // occasion split
    $("#split").innerHTML = `
      <a class="tile reveal" href="shop.html?c=everyday"><img src="${img("twill-reina-set", 0)}" alt="Everyday wear" loading="lazy"><div class="tile__label"><strong>Everyday</strong><span>Shop the edit</span></div></a>
      <a class="tile reveal" href="shop.html?c=evening"><img src="${img("pink-tourmaline-french-velvet-scallop-set", 2)}" alt="Evening wear" loading="lazy"><div class="tile__label"><strong>Evening</strong><span>Shop the edit</span></div></a>`;

    // best sellers carousel
    $("#bestTrack").innerHTML = PRODUCTS.filter((p) => p.tags.includes("bestseller")).map((p) => cardHTML(p)).join("");

    // as seen on
    const seen = [["@ayeshak", "kendall-set-in-white", 1], ["@zarabakes", "mallow-set", 3], ["@noor.styles", "espresso-mardana-kurta", 1], ["@hiba.r", "burgundy-kendall-set", 0], ["@sanaxo", "aubergine-marlow-set", 2], ["@mahamq", "cognac-sable-set", 3]];
    $("#seen").innerHTML = seen.map(([h, id, n]) => `<a href="product.html?id=${id}" class="reveal"><span class="seen__ring"><img src="${img(id, n)}" alt="${h} wearing MEA" loading="lazy"></span><span class="handle">${h}</span></a>`).join("");

    // journal
    const j = [
      ["mallow-set", 1, "Atelier Notes", "How we choose a fabric: the karandi story", "From loom to last stitch, the slow process behind our most-loved weave."],
      ["gold-topaz-french-velvet-scallop-set", 3, "Styling", "Five ways to wear velvet beyond the wedding season", "Velvet isn't only for formal nights. Here's how we style it for every day."],
      ["cloud-dancer-harper-set", 0, "Behind the Scenes", "Winter '26: behind the lens", "A look back at the shoot, the women who wore it, and the light we chased."],
    ];
    $("#journalTrack").innerHTML = j.map(([id, n, k, t, d]) => `<a class="reveal" href="#" data-toast="The journal is added at launch."><div class="card__media" style="aspect-ratio:4/5"><img src="${img(id, n)}" alt="" loading="lazy"></div>
      <div style="padding-top:18px"><span class="eyebrow">${k}</span><h3 style="font-family:var(--serif);font-size:24px;line-height:1.2;margin:10px 0 10px">${t}</h3><p style="color:var(--muted);margin:0 0 14px;font-size:14px">${d}</p><span class="link-underline">Read more</span></div></a>`).join("");
  }

  /* =========================================================
     SHOP / COLLECTION
     ========================================================= */
  function initShop() {
    const COLL = {
      all: { t: "Shop All", d: "Every piece, every fabric: the complete MEA wardrobe.", hero: ["burgundy-kendall-set", 0] },
      new: { t: "New Arrivals", d: "Fresh from the atelier. The Winter '26 drop.", hero: ["olive-vesper-set", 0] },
      bestseller: { t: "Best Sellers", d: "The sets you keep coming back for.", hero: ["mock-neck-set", 0] },
      everyday: { t: "Everyday Wear", d: "Easy, considered sets for the everyday.", hero: ["karandi-sable-set", 0] },
      evening: { t: "Evening Wear", d: "Velvet, organza and colour, made for after dark.", hero: ["feroza-french-velvet-scallop-set", 0] },
    };
    const fabrics = [...new Set(PRODUCTS.map((p) => p.fabric))].sort();
    const state = {
      c: COLL[params.get("c")] ? params.get("c") : "all",
      fabrics: params.get("fabric") ? [params.get("fabric")] : [],
      inStock: false, min: "", max: "",
      sort: "featured",
      cols: store.get("mea_cols", 4),
    };

    // filters drawer
    document.body.insertAdjacentHTML("beforeend", `
      <aside class="drawer drawer--left" id="filters" aria-label="Filters">
        <div class="drawer__head"><h3>Filters</h3><button class="icon-btn" data-close aria-label="Close filters">${ICON.close}</button></div>
        <div class="drawer__body" data-lenis-prevent>
          <div class="filter-group"><h4>Fabric</h4>${fabrics.map((f) => `<label class="check"><input type="checkbox" name="fabric" value="${f}">${f}<em>${PRODUCTS.filter((p) => p.fabric === f).length}</em></label>`).join("")}</div>
          <div class="filter-group"><h4>Availability</h4><label class="check"><input type="checkbox" id="fStock">In stock only</label></div>
          <div class="filter-group"><h4>Price (Rs.)</h4><div class="range-row"><input type="number" id="fMin" placeholder="Min" min="0" inputmode="numeric"><input type="number" id="fMax" placeholder="Max" min="0" inputmode="numeric"></div></div>
        </div>
        <div class="drawer__foot" style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <button type="button" class="btn" id="fClear">Clear</button><button type="button" class="btn btn--solid" data-close id="fApply">Show results</button>
        </div>
      </aside>`);

    const setBanner = () => {
      const fabOnly = state.c === "all" && state.fabrics.length === 1;
      const meta = COLL[state.c];
      $("#bannerTitle").textContent = fabOnly ? state.fabrics[0] : meta.t;
      $("#bannerText").textContent = fabOnly ? `Our ${state.fabrics[0].toLowerCase()} pieces, chosen for how they fall and how they feel.` : meta.d;
      $("#bannerCrumb").textContent = fabOnly ? state.fabrics[0] : meta.t;
      const heroP = fabOnly ? PRODUCTS.find((p) => p.fabric === state.fabrics[0]) : byId(meta.hero[0]);
      $("#bannerImg").src = heroP ? heroP.images[fabOnly ? Math.min(1, heroP.images.length - 1) : meta.hero[1]] : "";
      document.title = `${$("#bannerTitle").textContent} | MEA`;
    };

    $("#tabs").innerHTML = Object.entries(COLL).map(([k, v]) => `<a class="chip${k === state.c ? " is-active" : ""}" href="shop.html${k === "all" ? "" : "?c=" + k}">${v.t}</a>`).join("");

    const render = () => {
      let list = PRODUCTS.filter((p) => state.c === "all" || p.tags.includes(state.c));
      if (state.fabrics.length) list = list.filter((p) => state.fabrics.includes(p.fabric));
      if (state.inStock) list = list.filter((p) => p.available);
      if (state.min !== "") list = list.filter((p) => p.price >= +state.min);
      if (state.max !== "") list = list.filter((p) => p.price <= +state.max);
      const s = state.sort;
      if (s === "price-asc") list.sort((a, b) => a.price - b.price);
      else if (s === "price-desc") list.sort((a, b) => b.price - a.price);
      else if (s === "newest") list.sort((a, b) => b.created.localeCompare(a.created));
      else if (s === "az") list.sort((a, b) => a.title.localeCompare(b.title));
      else list.sort((a, b) => (b.available - a.available));

      $("#count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
      const grid = $("#shopGrid");
      grid.className = "grid" + (state.cols === 3 ? " grid--3" : state.cols === 2 ? " grid--2" : "");
      grid.innerHTML = list.length ? list.map((p) => cardHTML(p)).join("")
        : "";
      $("#empty").hidden = !!list.length;
      $$(".view-toggle button").forEach((b) => b.classList.toggle("is-active", +b.dataset.cols === state.cols));
      const active = state.fabrics.length + (state.inStock ? 1 : 0) + (state.min !== "" || state.max !== "" ? 1 : 0);
      $("#filterCount").textContent = active ? `(${active})` : "";
      $("#activeChips").innerHTML = [
        ...state.fabrics.map((f) => `<button type="button" class="chip is-active" data-rm-fabric="${f}">${f} ✕</button>`),
        state.inStock ? '<button type="button" class="chip is-active" data-rm="stock">In stock ✕</button>' : "",
        state.min !== "" || state.max !== "" ? `<button type="button" class="chip is-active" data-rm="price">Rs. ${state.min || 0} – ${state.max || "∞"} ✕</button>` : "",
      ].join("");
      setBanner();
      observeReveals();
    };

    const syncInputs = () => {
      $$('#filters input[name="fabric"]').forEach((i) => (i.checked = state.fabrics.includes(i.value)));
      $("#fStock").checked = state.inStock; $("#fMin").value = state.min; $("#fMax").value = state.max;
    };
    $("#filters").addEventListener("change", () => {
      state.fabrics = $$('#filters input[name="fabric"]:checked').map((i) => i.value);
      state.inStock = $("#fStock").checked; state.min = $("#fMin").value; state.max = $("#fMax").value;
      render();
    });
    $("#fClear").onclick = () => { state.fabrics = []; state.inStock = false; state.min = state.max = ""; syncInputs(); render(); };
    $("#activeChips").addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.rmFabric) state.fabrics = state.fabrics.filter((f) => f !== b.dataset.rmFabric);
      if (b.dataset.rm === "stock") state.inStock = false;
      if (b.dataset.rm === "price") state.min = state.max = "";
      syncInputs(); render();
    });
    $("#sort").onchange = (e) => { state.sort = e.target.value; render(); };
    $$(".view-toggle button").forEach((b) => b.onclick = () => { state.cols = +b.dataset.cols; store.set("mea_cols", state.cols); render(); });
    $("#resetAll").onclick = () => $("#fClear").click();
    syncInputs(); render();
  }

  /* =========================================================
     PRODUCT
     ========================================================= */
  function initProduct() {
    const p = byId(params.get("id")) || PRODUCTS[0];
    document.title = `${p.title} | MEA`;
    let qty = 1, active = 0;
    const sel = {};
    const details = p.details.filter((d) => !/^model/i.test(d));
    const model = p.details.find((d) => /^model/i.test(d));
    const rest = PRODUCTS.filter((x) => x.id !== p.id);
    const related = [...rest.filter((x) => x.fabric === p.fabric), ...rest.filter((x) => x.fabric !== p.fabric)].slice(0, 8);

    $("#pdp").innerHTML = `
      <div class="gallery">
        <div class="gallery__thumbs">${p.images.map((s, i) => `<button type="button" class="${i ? "" : "is-active"}" data-i="${i}" aria-label="Image ${i + 1}"><img src="${s}" alt=""></button>`).join("")}</div>
        <div>
          <div class="gallery__main" id="gMain"><div class="gallery__scroller" id="gScroll">${p.images.map((s, i) => `<img src="${s}" alt="${esc(p.title)} — image ${i + 1}" ${i ? 'loading="lazy"' : ""}>`).join("")}</div></div>
          <div class="gallery__dots">${p.images.map((_, i) => `<span class="${i ? "" : "is-active"}"></span>`).join("")}</div>
        </div>
      </div>
      <div class="pdp__info">
        <nav class="crumbs"><a href="index.html">Home</a><span>/</span><a href="shop.html?fabric=${encodeURIComponent(p.fabric)}">${esc(p.fabric)}</a><span>/</span>${esc(p.title)}</nav>
        <span class="eyebrow">${esc(p.fabric)}${p.tags.includes("new") ? " · New In" : ""}</span>
        <h1 class="pdp__title" style="margin-top:12px">${esc(p.title)}</h1>
        <div class="pdp__price" id="pdpPrice"></div>
        <p class="pdp__tax">Tax included. Shipping calculated at checkout.</p>
        ${p.available ? `
        ${p.options.map((o, gi) => `
        <div class="opt" data-g="${gi}">
          <div class="pdp__label"><span>${esc(o.name)}: <b class="opt__sel">Select</b></span>${o.guide ? `<button type="button" data-open="sizeModal" data-guide="${o.guide}">Size guide</button>` : ""}</div>
          <div class="${o.type === "size" ? "sizes" : o.type === "length" ? "sizes lengths" : "opt-choices"}">${o.values.map(optVal).map((v) => `<button type="button" data-v="${esc(v.label)}">${esc(v.label)}${o.type === "length" && v.note ? `<small>${esc(v.note)}</small>` : ""}${v.add && o.type !== "size" && o.type !== "length" ? `<small>+ ${money(v.add)}</small>` : ""}</button>`).join("")}</div>
        </div>`).join("")}
        <div class="pdp__buy">
          <div class="qty"><button type="button" id="qMinus" aria-label="Decrease">−</button><span id="qVal">1</span><button type="button" id="qPlus" aria-label="Increase">+</button></div>
          <button type="button" class="btn btn--solid" id="addBtn">Add to bag</button>
        </div>` : `
        <button type="button" class="btn btn--block" disabled style="margin-bottom:10px">Sold out</button>
        <button type="button" class="btn btn--solid btn--block" style="margin-bottom:10px" data-toast="We'll email you when it's back.">Notify me when available</button>`}
        <a class="btn btn--wa" id="waBtn" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${ICON.wa} Order on WhatsApp</a>
        <div class="perks">
          <div>${ICON.truck}Free delivery over Rs. 15k</div>
          <div>${ICON.swap}7-day exchange</div>
          <div>${ICON.clock}Ships in 3–5 days</div>
        </div>
        <div class="accordion">
          <details open><summary>Description</summary><div class="acc-body"><ul>${details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>${model ? `<p style="margin:12px 0 0;color:var(--muted)">${esc(model)}</p>` : ""}</div></details>
          <details><summary>Fabric &amp; Care</summary><div class="acc-body"><ul><li>Dry clean recommended</li><li>Steam or iron on low heat, inside out</li><li>Store folded, away from direct sunlight</li><li>Slight colour variation may occur due to lighting and dyeing</li></ul></div></details>
          <details><summary>Delivery &amp; Exchange</summary><div class="acc-body"><ul><li>Ready-to-wear ships in 3–5 working days across Pakistan</li><li>International orders delivered in 7–10 working days via DHL</li><li>Exchanges accepted on unworn items within 7 days of delivery</li></ul></div></details>
        </div>
      </div>`;

    // gallery
    const main = $("#gMain"), scroller = $("#gScroll"), thumbs = $$(".gallery__thumbs button"), dots = $$(".gallery__dots span");
    const isDesk = () => matchMedia("(min-width: 861px)").matches;
    const show = (i) => {
      active = i;
      thumbs.forEach((t, j) => t.classList.toggle("is-active", j === i));
      $$("img", scroller).forEach((im, j) => (im.style.display = !isDesk() || j === i ? "" : "none"));
    };
    thumbs.forEach((t) => t.addEventListener("click", () => show(+t.dataset.i)));
    show(0);
    addEventListener("resize", () => show(active));
    main.addEventListener("click", () => { if (isDesk()) main.classList.toggle("is-zoom"); });
    main.addEventListener("mousemove", (e) => {
      if (!main.classList.contains("is-zoom")) return;
      const r = main.getBoundingClientRect();
      $$("img", scroller)[active].style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
    });
    main.addEventListener("mouseleave", () => main.classList.remove("is-zoom"));
    scroller.addEventListener("scroll", () => {
      const i = Math.round(scroller.scrollLeft / scroller.clientWidth);
      dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
    }, { passive: true });

    // buy box: price, WhatsApp text and button follow the selected options
    const refresh = () => {
      const extra = addOn(p, sel), now = p.price + extra;
      $("#pdpPrice").innerHTML = p.compare ? `<span class="sale">${money(now)}</span><s>${money(p.compare + extra)}</s>` : money(now);
      const ordered = Object.fromEntries(p.options.filter((o) => sel[o.name]).map((o) => [o.name, sel[o.name]]));
      const chosen = Object.keys(ordered).length ? ` (${optText(ordered)})` : "";
      $("#waBtn").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi MEA, I'd like to order the ${p.title}${chosen}, quantity ${qty}.`)}`;
      if ($("#addBtn")) $("#addBtn").textContent = `Add to bag · ${money(now * qty)}`;
    };
    if (p.available) {
      const choose = (g, b) => {
        const o = p.options[+g.dataset.g], v = o.values.map(optVal).find((x) => x.label === b.dataset.v);
        sel[o.name] = v.label;
        $$("button[data-v]", g).forEach((x) => x.classList.toggle("is-active", x === b));
        $(".opt__sel", g).textContent = v.label + (v.note ? ` (${v.note})` : "") + (v.add ? ` (+ ${money(v.add)})` : "");
        g.classList.remove("is-missing");
        refresh();
      };
      $$(".opt").forEach((g) => {
        g.addEventListener("click", (e) => { const b = e.target.closest("button[data-v]"); if (b) choose(g, b); });
        // pre-select defaults such as the standard shirt / pants length
        const def = p.options[+g.dataset.g].values.map(optVal).find((v) => v.def);
        if (def) choose(g, $$("button[data-v]", g).find((b) => b.dataset.v === def.label));
      });
      const setQ = (n) => { qty = Math.max(1, Math.min(10, n)); $("#qVal").textContent = qty; refresh(); };
      $("#qMinus").onclick = () => setQ(qty - 1);
      $("#qPlus").onclick = () => setQ(qty + 1);
      $("#addBtn").onclick = () => {
        const gi = p.options.findIndex((o) => !sel[o.name]);
        if (gi > -1) {
          const g = $(`.opt[data-g="${gi}"]`), box = g.lastElementChild;
          g.classList.add("is-missing");
          box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
          toast(`Please select ${p.options[gi].name.toLowerCase()}`);
          return;
        }
        // keep the selections in the product's own option order
        addToCart(p.id, Object.fromEntries(p.options.map((o) => [o.name, sel[o.name]])), qty);
      };
    }
    refresh();

    $("#relatedTrack").innerHTML = related.map((x) => cardHTML(x)).join("");
  }

  /* ---------- boot ---------- */
  renderChrome();
  initTransitions();
  bindGlobal();
  updateCount();
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  bindCarousels();
  initSmooth();
  initParallax();
  observeReveals();
  window.MEA = { open, close, toast };
})();

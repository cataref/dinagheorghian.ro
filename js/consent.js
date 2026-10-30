// Cookie consent + tracking (Google Analytics 4 and Meta Pixel).
// Nothing loads until the visitor accepts. Google Consent Mode v2 defaults to "denied".
// Conversion events: Lead (forms), Contact (WhatsApp), InitiateCheckout (book), Purchase (/multumim/).

(function () {
  "use strict";
  var cfg = window.DG_TRACKING || {};
  var KEY = "dg-consent-v1";

  /* ---------- Consent Mode v2 defaults ---------- */
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function save(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
  }

  /* ---------- Loaders ---------- */
  var gaLoaded = false, pixelLoaded = false;

  function loadGA() {
    if (gaLoaded || !cfg.ga4) return;
    gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + cfg.ga4;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", cfg.ga4);
  }

  function loadPixel() {
    if (pixelLoaded || !cfg.metaPixel) return;
    pixelLoaded = true;
    /* Official Meta Pixel base code */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", cfg.metaPixel);
    fbq("track", "PageView");
  }

  function apply(c) {
    gtag("consent", "update", {
      analytics_storage: c.analytics ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied",
    });
    if (c.analytics || c.marketing) loadGA();
    if (c.marketing) loadPixel();
    firePending();
  }

  /* ---------- Conversion events ---------- */
  var gaNames = { Lead: "generate_lead", Contact: "contact", InitiateCheckout: "begin_checkout", Purchase: "purchase" };
  var pending = [];

  function track(name, params) {
    params = params || {};
    var c = read();
    if (!c) { pending.push([name, params]); return; }
    if (pixelLoaded && window.fbq) fbq("track", name, params);
    if (gaLoaded) gtag("event", gaNames[name] || name, params);
  }
  function firePending() {
    var q = pending; pending = [];
    q.forEach(function (e) { track(e[0], e[1]); });
  }
  window.dgTrack = track;

  // WhatsApp clicks → Contact, Stripe clicks → InitiateCheckout
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href");
    if (href.indexOf("wa.me/") > -1) {
      // "Lead" with content_name "WhatsApp" is what the old site sent, so existing ad optimisation keeps working.
      track("Lead", { content_name: "WhatsApp", source: location.pathname });
      track("Contact", { content_name: "WhatsApp", source: location.pathname });
    }
    else if (href.indexOf("buy.stripe.com") > -1) track("InitiateCheckout", { content_name: "De ce eu?", value: 75, currency: "RON" });
  });

  /* ---------- Banner UI ---------- */
  var banner = document.querySelector("[data-cookie-banner]");
  var prefs = document.querySelector("[data-cookie-prefs]");

  function close(c) {
    save(c);
    apply(c);
    if (banner) banner.hidden = true;
  }
  function open() {
    if (!banner) return;
    var c = read() || { analytics: false, marketing: false };
    var a = banner.querySelector("#ck-analytics"), m = banner.querySelector("#ck-marketing");
    if (a) a.checked = !!c.analytics;
    if (m) m.checked = !!c.marketing;
    banner.hidden = false;
  }

  if (banner) {
    banner.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-ck]");
      if (!btn) return;
      var act = btn.getAttribute("data-ck");
      var t = Date.now();
      if (act === "all") close({ analytics: true, marketing: true, t: t });
      else if (act === "none") close({ analytics: false, marketing: false, t: t });
      else if (act === "prefs") { if (prefs) prefs.hidden = !prefs.hidden; }
      else if (act === "save") close({
        analytics: banner.querySelector("#ck-analytics").checked,
        marketing: banner.querySelector("#ck-marketing").checked,
        t: t,
      });
    });
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-cookie-open]")) { e.preventDefault(); open(); }
  });

  var existing = read();
  if (existing) apply(existing);
  else if (banner) banner.hidden = false;

  // Thank-you page after Stripe payment
  if (document.body && document.body.hasAttribute("data-track-purchase")) {
    track("Purchase", { content_name: "De ce eu?", value: 75, currency: "RON" });
  }
})();

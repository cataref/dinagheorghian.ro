// Dina Gheorghian. Site behaviour: sticky header, mobile menu, fade-in on scroll, forms.
// No dependencies.

(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Header shadow + floating WhatsApp after scroll ---------- */
  var header = document.querySelector("[data-header]");
  var waFloat = document.querySelector(".wa-float");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (waFloat) waFloat.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-menu]");
  var label = document.querySelector("[data-menu-label]");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
    if (label) label.textContent = open ? "Închide meniul" : "Deschide meniul";
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 1081px)").addEventListener("change", function (m) {
      if (m.matches) setMenu(false);
    });
  }

  /* ---------- Fade-in on scroll ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var targets = document.querySelectorAll(
      ".section .section-head, .cards > li, .quotes > li, .lead-grid > *, .split > *, .book-grid > *, .cta-inner"
    );
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach(function (el, i) {
      // Anything already on screen at load stays visible, no animation.
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return;
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      io.observe(el);
    });
  }

  /* ---------- Forms ---------- */
  var messages = {
    leadMagnet: "Mulțumesc! În câteva minute primești pe email linkul către „Ghidul femeii libere”. Dacă nu îl vezi, verifică și folderele Spam sau Promoții.",
    packages: "Mulțumesc! Te contactez în cel mai scurt timp, așa cum ai ales.",
    waitlist: "Mulțumesc! Ești pe lista de așteptare și afli prima când anunț datele.",
    contact: "Mulțumesc pentru mesaj! Îți răspund în cel mai scurt timp.",
  };

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    var button = form.querySelector('button[type="submit"]');

    function show(msg, isError) {
      if (!status) return;
      status.textContent = msg;
      status.classList.toggle("is-error", !!isError);
      status.hidden = false;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate
      var firstBad = null;
      form.querySelectorAll("input[required], select[required], textarea[required]").forEach(function (f) {
        var ok = f.type === "checkbox" ? f.checked : f.checkValidity() && f.value.trim() !== "";
        if (f.type === "checkbox") {
          var wrap = f.closest(".consent");
          if (wrap) wrap.classList.toggle("is-invalid", !ok);
        } else {
          f.setAttribute("aria-invalid", ok ? "false" : "true");
        }
        if (!ok && !firstBad) firstBad = f;
      });
      if (firstBad) {
        show("Te rog completează toate câmpurile și bifează acordul.", true);
        firstBad.focus();
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());
      // Honeypot: bots fill the hidden field, people don't.
      if (data.website) return;
      delete data.website;
      data.sursa = location.pathname;
      data.form = form.getAttribute("data-form");

      var endpoint = form.getAttribute("data-endpoint");
      var kind = form.getAttribute("data-form");
      button.disabled = true;

      function done() {
        if (window.dgTrack) window.dgTrack("Lead", { content_name: kind, source: location.pathname });
        form.reset();
        show(messages[kind] || messages.contact);
        button.disabled = false;
      }

      // Not connected yet: don't pretend it was sent, point to WhatsApp instead.
      if (!endpoint) {
        button.disabled = false;
        status.innerHTML = 'Formularul va fi activ în curând. Până atunci, scrie-mi pe <a href="https://wa.me/40731196603" target="_blank" rel="noopener">WhatsApp</a> și îți răspund personal.';
        status.classList.remove("is-error");
        status.hidden = false;
        return;
      }

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          done();
        })
        .catch(function () {
          button.disabled = false;
          show("Nu am putut trimite formularul. Încearcă din nou sau scrie-mi pe WhatsApp.", true);
        });
    });

    form.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity()) {
        e.target.setAttribute("aria-invalid", "false");
      }
    });
  });
})();

/* ---------- Package buttons preselect the form ---------- */
document.addEventListener("click", function (e) {
  var b = e.target.closest && e.target.closest("[data-pick-package]");
  if (!b) return;
  var sel = document.getElementById("pk-pachet");
  if (sel) sel.value = b.getAttribute("data-pick-package");
});

/* ---------- Photo carousel ---------- */
document.querySelectorAll("[data-carousel]").forEach(function (c) {
  var track = c.querySelector("[data-track]");
  c.querySelectorAll("[data-dir]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dir = +btn.getAttribute("data-dir");
      var item = track.firstElementChild;
      var step = item ? item.getBoundingClientRect().width + 16 : 300;
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    });
  });
});

/* ---------- Gallery lightbox ---------- */
(function () {
  var dlg = document.querySelector("[data-lightbox-dialog]");
  if (!dlg || !dlg.showModal) return;
  var img = dlg.querySelector("img");
  document.querySelectorAll("[data-lightbox] a[data-full]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      img.src = a.getAttribute("href");
      img.alt = (a.querySelector("img") || {}).alt || "";
      dlg.showModal();
    });
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.closest("[data-lightbox-close]")) dlg.close(); });
})();

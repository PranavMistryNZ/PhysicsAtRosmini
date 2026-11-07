/* Physics at Rosmini · shared equation renderer (used by every lab page).
   Load after assets/katex/katex.min.js and assets/katex/auto-render.min.js.
   - Typesets TeX written as \( \) (inline) or \[ \] (display) with KaTeX.
   - TeX that a script writes with innerHTML, textContent or insertAdjacentHTML is typeset
     straight away, so live readouts never show raw TeX; anything else is caught by a MutationObserver.
   - Redraws = and − as pixel-snapped bars (see .bar-eq / .bar-minus in equations.css) so both
     strokes look equally crisp on standard screens. */
(function () {
  var OPTS = { delimiters: [{ left: "\\[", right: "\\]", display: true }, { left: "\\(", right: "\\)", display: false }], throwOnError: false, strict: false };
  function hasTeX(t) { return typeof t === "string" && (t.indexOf("\\(") > -1 || t.indexOf("\\[") > -1); }
  function fixBars(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll(".katex-html .mrel,.katex-html .mbin,.katex-html .mord").forEach(function (e) {
      if (e.children.length) return; var t = e.textContent;
      if (t === "=") e.classList.add("bar-eq"); else if (t === "−") e.classList.add("bar-minus");
    });
  }
  window.fixEquationBars = fixBars;
  window.renderTeX = function (el) {
    el = el || document.body;
    if (!window.renderMathInElement || el.nodeType !== 1) return;
    try { renderMathInElement(el, OPTS); } catch (e) {}
    fixBars(el);
  };
  var q = new Set(), raf = 0, obs = null;
  function watch() { obs.observe(document.body, { childList: true, subtree: true, characterData: true }); }
  function flush() { raf = 0; var els = Array.from(q); q.clear(); obs.disconnect(); els.forEach(function (n) { if (n.isConnected && hasTeX(n.textContent)) window.renderTeX(n); }); obs.takeRecords(); watch(); }
  obs = new MutationObserver(function (ms) {
    ms.forEach(function (m) { var n = m.target.nodeType === 3 ? m.target.parentNode : m.target; if (n && n.nodeType === 1 && !n.closest(".katex") && hasTeX(n.textContent)) q.add(n); });
    if (q.size && !raf) raf = requestAnimationFrame(flush);
  });
  function wrap(proto, prop) {
    var d = Object.getOwnPropertyDescriptor(proto, prop); if (!d || !d.set) return;
    Object.defineProperty(proto, prop, { get: d.get, configurable: true, set: function (v) {
      if (!hasTeX(v)) { if (this.__tex) this.__tex = null; d.set.call(this, v); if (this.nodeType === 1 && typeof v === "string" && v.indexOf("katex") > -1) fixBars(this); return; }
      if (this.nodeType === 1 && this.__tex === v && this.querySelector(".katex")) return; /* unchanged: keep the typeset copy */
      d.set.call(this, v); if (this.nodeType === 1) { this.__tex = v; window.renderTeX(this); }
    } });
  }
  wrap(Element.prototype, "innerHTML"); wrap(Node.prototype, "textContent");
  var ia = Element.prototype.insertAdjacentHTML;
  Element.prototype.insertAdjacentHTML = function (p, h) { ia.call(this, p, h); var t = this.parentNode && (p === "beforebegin" || p === "afterend") ? this.parentNode : this; if (hasTeX(h)) window.renderTeX(t); else if (typeof h === "string" && h.indexOf("katex") > -1) fixBars(t); };
  document.addEventListener("DOMContentLoaded", function () {
    var t = setInterval(function () { if (window.renderMathInElement) { clearInterval(t); window.renderTeX(document.body); watch(); } }, 40);
    setTimeout(function () { clearInterval(t); }, 10000);
  });
})();

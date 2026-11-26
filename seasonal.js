/* =========================================================
   HARVESTERKEN — HAPPY CHRISTMAS & NEW YEAR INTERACTIVITY
   Mobile timed display + auto-hide + reappear on scroll
   ========================================================= */

(function () {
  function initSeasonalGreeting() {
    const widget = document.getElementById("xmasWidget");
    if (!widget) return;

    const minimizeBtn = document.getElementById("xmasMinimizeBtn");
    const expandBtn = document.getElementById("xmasExpandBtn");
    const sparkleLayer = document.querySelector(".xmas-sparkles");

    const INITIAL_MOBILE_VISIBLE_MS = 5000; // Shown for 5s on mobile load
    const SCROLL_MOBILE_VISIBLE_MS = 3500;  // Shown for 3.5s on scroll
    const MOBILE_BREAKPOINT = 768;

    let hideTimer = null;
    let scrollDebounce = null;

    const isMobileView = () => window.innerWidth <= MOBILE_BREAKPOINT;

    const showMobileTemporarily = (durationMs) => {
      if (!isMobileView()) {
        widget.classList.remove("mobile-hidden");
        return;
      }
      widget.classList.remove("mobile-hidden");
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        if (isMobileView()) {
          widget.classList.add("mobile-hidden");
        }
      }, durationMs);
    };

    const syncViewportMode = () => {
      if (hideTimer) clearTimeout(hideTimer);
      if (isMobileView()) {
        showMobileTemporarily(INITIAL_MOBILE_VISIBLE_MS);
      } else {
        widget.classList.remove("mobile-hidden");
      }
    };

    try {
      if (sessionStorage.getItem("hk_xmas_greeting_minimized") === "true") {
        widget.classList.add("is-minimized");
      }
    } catch (err) {}

    if (minimizeBtn) {
      minimizeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        widget.classList.add("is-minimized");
        try {
          sessionStorage.setItem("hk_xmas_greeting_minimized", "true");
        } catch (err) {}
      });
    }

    if (expandBtn) {
      expandBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        widget.classList.remove("is-minimized");
        try {
          sessionStorage.setItem("hk_xmas_greeting_minimized", "false");
        } catch (err) {}
        if (isMobileView()) {
          showMobileTemporarily(SCROLL_MOBILE_VISIBLE_MS);
        }
      });
    }

    syncViewportMode();

    const handleScroll = () => {
      if (!isMobileView()) return;
      if (scrollDebounce) clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        showMobileTemporarily(SCROLL_MOBILE_VISIBLE_MS);
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncViewportMode);

    if (sparkleLayer && !sparkleLayer.dataset.populated) {
      sparkleLayer.dataset.populated = "true";
      const count = isMobileView() ? 10 : 22;
      const palette = [
        "radial-gradient(circle, #FEF08A 0%, rgba(250, 204, 21, 0) 75%)",
        "radial-gradient(circle, #FCA5A5 0%, rgba(239, 68, 68, 0) 75%)",
        "radial-gradient(circle, #6EE7B7 0%, rgba(16, 185, 129, 0) 75%)",
        "radial-gradient(circle, #E0F2FE 0%, rgba(255, 255, 255, 0) 75%)"
      ];

      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement("span");
        sparkle.classList.add("xmas-sparkle");

        const size = Math.random() * 5 + 3;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 94 + 3}vw`;
        sparkle.style.background = palette[i % palette.length];
        sparkle.style.animationDuration = `${Math.random() * 8 + 7}s`;
        sparkle.style.animationDelay = `${Math.random() * 6}s`;

        sparkleLayer.appendChild(sparkle);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSeasonalGreeting);
  } else {
    initSeasonalGreeting();
  }
})();
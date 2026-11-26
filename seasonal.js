/* =========================================================
   HARVESTERKEN — HAPPY CHRISTMAS & NEW YEAR INTERACTIVITY
   Auto-hides after a set duration, then reappears on scroll
   ========================================================= */

(function () {
  function initSeasonalGreeting() {
    const widget = document.getElementById("xmasWidget");
    if (!widget) return;

    const minimizeBtn = document.getElementById("xmasMinimizeBtn");
    const expandBtn = document.getElementById("xmasExpandBtn");
    const sparkleLayer = document.querySelector(".xmas-sparkles");

    const INITIAL_SHOW_MS = 10000; // Disappears after 4 seconds on load
    const SCROLL_SHOW_MS = 10000;  // Reappears for 3 seconds when scrolling, then disappears again
    const MOBILE_BREAKPOINT = 768;

    let hideTimer = null;
    let lastScrollY = window.scrollY || window.pageYOffset || 0;

    const isMobileView = () => window.innerWidth <= MOBILE_BREAKPOINT;

    const scheduleAutoHide = (durationMs) => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        widget.classList.add("is-faded-out");
      }, durationMs);
    };

    const showThenAutoHide = (durationMs) => {
      widget.classList.remove("is-faded-out");
      scheduleAutoHide(durationMs);
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
        showThenAutoHide(SCROLL_SHOW_MS);
      });
    }

    // Start visible, then fade out automatically after INITIAL_SHOW_MS
    showThenAutoHide(INITIAL_SHOW_MS);

    // Reappear when user scrolls, then fade out again after SCROLL_SHOW_MS
    const onUserScroll = () => {
      const currentY = window.scrollY || window.pageYOffset || 0;
      if (Math.abs(currentY - lastScrollY) > 4 || currentY > 0) {
        lastScrollY = currentY;
        showThenAutoHide(SCROLL_SHOW_MS);
      }
    };

    window.addEventListener("scroll", onUserScroll, { passive: true });
    document.addEventListener("scroll", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });

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
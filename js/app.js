document.querySelector(".mode-toggle").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

document.querySelector(".mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Seasonal Greeting Interactions & Ambient Stardust
document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("seasonWidget");
  const minimizeBtn = document.getElementById("seasonMinimizeBtn");
  const expandBtn = document.getElementById("seasonExpandBtn");
  const particleContainer = document.querySelector(".season-ambient-particles");

  if (widget && minimizeBtn && expandBtn) {
    // Remember minimized state during session
    if (sessionStorage.getItem("hk_season_minimized") === "true") {
      widget.classList.add("minimized");
    }

    minimizeBtn.addEventListener("click", () => {
      widget.classList.add("minimized");
      sessionStorage.setItem("hk_season_minimized", "true");
    });

    expandBtn.addEventListener("click", () => {
      widget.classList.remove("minimized");
      sessionStorage.setItem("hk_season_minimized", "false");
    });
  }

  // Generate subtle golden & frost stardust particles
  if (particleContainer) {
    const particleCount = 22;
    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("span");
      dot.classList.add("stardust");

      const size = Math.random() * 4 + 2; // 2px to 6px
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.animationDuration = `${Math.random() * 8 + 7}s`;
      dot.style.animationDelay = `${Math.random() * 6}s`;

      // Alternate between Solar Gold and Cleaning Cyan-White
      if (i % 3 === 0) {
        dot.style.background = "radial-gradient(circle, #E0F2FE 0%, rgba(56, 189, 248, 0) 70%)";
      }

      particleContainer.appendChild(dot);
    }
  }
});
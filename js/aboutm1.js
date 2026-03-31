// Tilt effect for About Us image
document.querySelectorAll(".about-image.tilt").forEach(el=>{
  el.addEventListener("mousemove",(e)=>{
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(y - rect.height/2)/15;
    const rotateY = (x - rect.width/2)/15;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  el.addEventListener("mouseleave",()=>{
    el.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Learn More Button click
const learnBtn = document.getElementById("learnMoreBtn");

if(learnBtn){
  learnBtn.addEventListener("click", ()=>{
    window.location.href = "solarabout.html";
  });
}

// Count up numbers when visible
const stats = document.querySelectorAll(".stat .number");

const options = {
  threshold: 0.5
};

const animateCount = (el) => {
  const target = parseFloat(el.dataset.target);
  const increment = target / 50; // speed
  let current = 0;

  const update = () => {
    current += increment;
    if(current < target){
      el.textContent = current.toFixed(target % 1 ? 1 : 0);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };
  update();
};

const observers = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCount(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, options);

stats.forEach(stat => observers.observe(stat));
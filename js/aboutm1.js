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


// Reveal animation (SAFE VERSION)
const revealElements = document.querySelectorAll(
  ".about-text, .about-card, .goal-box"
);

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

revealElements.forEach((el,i)=>{
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = `all 0.8s ease ${i * 0.1}s`;

  revealObserver.observe(el);
});

// Apply class effect
document.addEventListener("scroll",()=>{
  document.querySelectorAll(".show").forEach(el=>{
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

// Floating subtle animation for cards
document.querySelectorAll(".about-card").forEach((card,i)=>{
  setInterval(()=>{
    card.style.transform = `translateY(${Math.sin(Date.now()/1000 + i)*5}px)`;
  },100);
});

const wrapper = document.getElementById("testimonialWrapper");
const nextBtn = document.getElementById("nextTestimonial");
const prevBtn = document.getElementById("prevTestimonial");

// BUTTON NAVIGATION
if(nextBtn && prevBtn && wrapper){

nextBtn.addEventListener("click", ()=>{
  wrapper.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", ()=>{
  wrapper.scrollBy({ left: -320, behavior: "smooth" });
});

// TOUCH SWIPE (MOBILE)
let startX = 0;
let scrollLeft = 0;

wrapper.addEventListener("touchstart", (e)=>{
  startX = e.touches[0].pageX;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("touchmove", (e)=>{
  const x = e.touches[0].pageX;
  const walk = (startX - x) * 1.5;
  wrapper.scrollLeft = scrollLeft + walk;
});

}

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){

      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;

      const update = () => {
        current += target / 100;
        if(current < target){
          el.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };

      update();
      counterObserver.unobserve(el);
    }
  });
},{threshold:0.5});

counters.forEach(c => counterObserver.observe(c));


const states = document.querySelectorAll(".state");
const tooltip = document.getElementById("mapTooltip");

/* DATA FOR EACH STATE */
const stateData = {
  oyo: "Ibadan, Ogbomosho, Oyo Town",
  lagos: "Ikeja, Lekki, Victoria Island",
  ogun: "Abeokuta, Sagamu, Ijebu Ode",
  osun: "Osogbo, Ile-Ife, Ilesa",
  ondo: "Akure, Owo, Ondo Town",
  abuja: "Wuse, Maitama, Gwarinpa"
};

states.forEach(state => {

  // HOVER
  state.addEventListener("mousemove", e => {
    const id = state.id;
    tooltip.textContent = stateData[id];

    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";

    tooltip.classList.add("show");
  });

  // LEAVE
  state.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });

  // CLICK
  state.addEventListener("click", () => {

    // remove active from all
    states.forEach(s => s.classList.remove("active"));

    // add active to clicked
    state.classList.add("active");

    // OPTIONAL: scroll to contact or show message
    console.log("Selected:", state.id);

  });

});
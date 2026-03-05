const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Scroll shrink */
const header = document.getElementById("header");
window.addEventListener("scroll",()=>{
  header.classList.toggle("shrink", window.scrollY > 50);
});

/* Mobile toggle */
const hamburger = document.getElementById("hamburger");
const sidePanel = document.getElementById("sidePanel");
const page = document.getElementById("page");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function openMenu(){
  sidePanel.classList.add("active");
  page.classList.add("shift");
  overlay.classList.add("active");
}

function closeMenu(){
  sidePanel.classList.remove("active");
  page.classList.remove("shift");
  overlay.classList.remove("active");
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    closeMenu();
  }
});

/* Mobile accordion */
document.querySelectorAll(".mobile-accordion").forEach(item=>{
  item.addEventListener("click",()=>{
    item.classList.toggle("active");
  });
});

/* 3D tilt */
document.querySelectorAll(".tilt").forEach(el=>{
  el.addEventListener("mousemove",(e)=>{
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(y - rect.height/2)/12;
    const rotateY = (x - rect.width/2)/12;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  el.addEventListener("mouseleave",()=>{
    el.style.transform = "rotateX(0) rotateY(0)";
  });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀";
  }
});

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
  link.addEventListener("click", function(){
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".mobile-menu li").forEach((item, index) => {
  item.style.transitionDelay = (index * 0.08) + "s";
});
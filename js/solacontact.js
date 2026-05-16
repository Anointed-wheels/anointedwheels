/* CURSOR GLOW */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

/* 3D TILT */

document.querySelectorAll(".tilt").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/14;
const rotateY = (x - rect.width/2)/14;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateX(0) rotateY(0)";

});

});

/* SCROLL REVEAL */

const revealItems = document.querySelectorAll(
".contact-form-box,.info-box,.floating-card,.map-section,.cta-section"
);

const reveal = () => {

revealItems.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.style.opacity = "1";
item.style.transform = "translateY(0)";

}

});

};

revealItems.forEach(item=>{

item.style.opacity = "0";
item.style.transform = "translateY(60px)";
item.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();
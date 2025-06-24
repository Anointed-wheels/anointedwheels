let images = [
    "helmet.jpg", "a.webp", "clap.jpg", "climb1.jpg", "glass.webp", "b.jpg", 
    "c.jpg", "d.jpg", "e.jpg", "a.jpg", "f.jpg", "g.jpg", "h.jpg"
]
let i = 0

let caller = document.getElementById("hero")

setInterval(() => {
    if (i< images.length-1){
        i++
    }
    else{
        i=0
    }
    caller.src = `${images[i]}`
}, 5000);

let btn = document.querySelector(".btn")
let about = document.querySelector(".about-us")
let here = document.querySelector(".about")
let bar_1 = document.querySelector(".fa-xmark")
let bar_2 = document.querySelector(".fa-bars")
let tint = document.querySelector("#tint")
let claim = document.querySelector("#claim")
let drop = document.querySelector(".mobile-nav")
let navup = document.querySelector(".nav-mobile-up")
let navclean = document.querySelector(".nav-mobile-clean")
let klin= document.querySelector(".cleaning-topics")

navup.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
})

navclean.addEventListener('click', () => {
    klin.scrollIntoView({ behavior: 'smooth' });
    klin.style.display="grid"
    // waiting.classList.add("quality-service")
  });

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
})
about.addEventListener('click', () => {
    here.scrollIntoView({ behavior: 'smooth' });
    here.style.display="grid"
    // waiting.classList.add("quality-service")
  });

tint.addEventListener("click", () => {
    if(tint.classList.contains("fa-bars")){
        tint.classList.remove("fa-bars")
        tint.classList.add("fa-xmark")
        drop.style.display="grid"
    }
    else{
        tint.classList.remove("fa-xmark")
        tint.classList.add("fa-bars")
        drop.style.display="none"
    }
})
const service = document.querySelector(".our-service")
const waiting = document.querySelector("#x-call")

service.addEventListener('click', () => {
     waiting.scrollIntoView({ behavior: 'smooth' });   
})

const links = document.querySelector('.links')


const reveal = () => {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 50
    if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('showAnim')
    }
    else{
        reveals[i].classList.remove('showAnim')
    }
    }
}
window.addEventListener('scroll', reveal)


const tumbs = () => {
    var tumbItems = document.querySelectorAll('.tumbs');

    for (var i = 0; i < tumbItems.length; i++) {
        var windowheight = window.innerHeight;
        var tumbtop = tumbItems[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (tumbtop < windowheight - revealpoint) {
            tumbItems[i].classList.add('showAnim');
        } else {
            tumbItems[i].classList.remove('showAnim');
        }
    }
};

window.addEventListener('scroll', () => {
    reveal();
    tumbs(); // call both on scroll
});

document.addEventListener('DOMContentLoaded', () => {
  const wheel = document.getElementById('wheel');
  let goingForward = true;

  function roll() {
    if (goingForward) {
      wheel.classList.remove('move-back');
      wheel.classList.add('move');
    } else {
      wheel.classList.remove('move');
      wheel.classList.add('move-back');
    }

    goingForward = !goingForward;
  }

  setInterval(roll, 8000);
});
document.addEventListener("DOMContentLoaded", ()=>{

  const track = document.getElementById("gx9-track");
  let items = Array.from(track.children);

  // CLONE ITEMS FOR INFINITE LOOP
  items.forEach(item=>{
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  items = Array.from(track.children);

  let index = 0;

  function updateCarousel(){

    const center = Math.floor(items.length / 4); // focus zone

    items.forEach((item,i)=>{
      item.classList.remove("active","left","right");

      if(i === index){
        item.classList.add("active");
      } else if(i === index - 1){
        item.classList.add("left");
      } else if(i === index + 1){
        item.classList.add("right");
      }
    });

    const offset = index * 240; // item width + gap
    track.style.transform = `translateX(-${offset}px)`;

  }

  function autoSlide(){
    index++;

    // RESET SMOOTHLY (INVISIBLE LOOP)
    if(index >= items.length / 2){
      index = 0;
      track.style.transition = "none";
      track.style.transform = `translateX(0px)`;

      setTimeout(()=>{
        track.style.transition = "transform 0.8s cubic-bezier(0.22,1,0.36,1)";
      },50);
    }

    updateCarousel();
  }

  updateCarousel();
  setInterval(autoSlide, 2500);


  /* TOUCH SWIPE (MOBILE PREMIUM FEEL) */
  let startX = 0;

  track.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", e=>{
    let endX = e.changedTouches[0].clientX;

    if(startX > endX){
      index++;
    } else {
      index--;
      if(index < 0) index = 0;
    }

    updateCarousel();
  });

});
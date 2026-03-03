const fixedNav = document.querySelector(".nav-fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.9) {
    fixedNav.classList.add("show");
  } else {
    fixedNav.classList.remove("show");
  }
});

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(e){
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(menu=>{
    if(!menu.parentElement.contains(e.target)){
      menu.style.display = "none";
    }
  });
});

/* REOPEN ON HOVER (restore default behavior) */

document.querySelectorAll(".has-dropdown").forEach(item=>{
  item.addEventListener("mouseenter",()=>{
    item.querySelector(".dropdown").style.display="flex";
  });

  item.addEventListener("mouseleave",()=>{
    item.querySelector(".dropdown").style.display="none";
  });
});
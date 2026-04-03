/* FAQ INIT */
(function(){

const faqItems = document.querySelectorAll(".faqx-item");
const searchInput = document.getElementById("faqxSearch");
const tabs = document.querySelectorAll(".faqx-tab");

/* ACCORDION */
faqItems.forEach(item=>{
  const question = item.querySelector(".faqx-question");

  question.addEventListener("click",()=>{
    item.classList.toggle("active");
  });
});

/* SEARCH */
if(searchInput){
searchInput.addEventListener("input",()=>{
  const value = searchInput.value.toLowerCase();

  faqItems.forEach(item=>{
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});
}

/* FILTER */
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{

    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");

    const cat = tab.dataset.cat;

    faqItems.forEach(item=>{
      if(cat === "all" || item.dataset.cat === cat){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});

})();
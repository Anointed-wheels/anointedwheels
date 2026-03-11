// Tilt effect (reuse from previous)
document.querySelectorAll(".tilt").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(y - rect.height/2)/12;
    const rotateY = (x - rect.width/2)/12;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Modal popup logic
const planBtns = document.querySelectorAll(".plan-btn");
const planModal = document.getElementById("planModal");
const closeModal = document.getElementById("closeModal");
const selectedPlanTitle = document.getElementById("selectedPlanTitle");
const planForm = document.getElementById("planForm");

// Open modal
planBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const planName = btn.dataset.plan;
    selectedPlanTitle.textContent = `Plan: ${planName}`;
    planModal.classList.add("active");
    planForm.dataset.plan = planName;
  });
});

// Close modal
if(closeModal){
  closeModal.addEventListener("click", () => {
    planModal.classList.remove("active");
  });
}
planModal.addEventListener("click", e => {
  if(e.target === planModal) planModal.classList.remove("active");
});

// Form submission
if(planForm){
planForm.addEventListener("submit", e => {

  e.preventDefault();

  const plan = planForm.dataset.plan;
  const firstName = planForm.firstName.value;
  const surname = planForm.surname.value;
  const email = planForm.email.value;
  const phone = planForm.phone.value;
  const sendTo = planForm.sendTo.value;

  const message = `Hello, I would like to order the ${plan} plan.
Name: ${firstName} ${surname}
Email: ${email}
Phone: ${phone}`;

  if(sendTo === "whatsapp"){

    const whatsappNumber = "2348012345678";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

  } else {

    const companyEmail = "info@harvesterken.com";

    const url = `mailto:${companyEmail}?subject=Order ${plan} Plan&body=${encodeURIComponent(message)}`;

    window.location.href = url;

  }

  planModal.classList.remove("active");

  planForm.reset();

});
}
// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    // Collapse other open items
    faqItems.forEach(i => {
      if(i !== item) i.classList.remove("active");
    });
    // Toggle current item
    item.classList.toggle("active");
  });
});

const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

serviceCards.forEach(card=>{
observer.observe(card);
});

const cards = document.querySelectorAll(".service-3d-card");

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = -(y - centerY) / 15;
const rotateY = (x - centerX) / 15;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0)";
});

});
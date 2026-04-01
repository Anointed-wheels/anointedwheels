document.addEventListener("DOMContentLoaded", () => {

  const states = document.querySelectorAll(".state");
  const tooltip = document.getElementById("mapTooltip");

  if(!states.length || !tooltip) return;

  const stateData = {
    oyo: "Oyo State - Ibadan, Ogbomosho, Oyo Town",
    lagos: "Lagos State - Ikeja, Lekki, Victoria Island",
    ogun: "Ogun State - Abeokuta, Sagamu, Ijebu Ode",
    osun: "Osun State - Osogbo, Ile-Ife, Ilesa",
    ondo: "Ondo State - Akure, Owo, Ondo Town",
    abuja: "FCT Abuja - Wuse, Maitama, Gwarinpa"
  };

  states.forEach(state => {

    state.addEventListener("mouseenter", (e) => {
      const id = state.id;
      tooltip.innerText = stateData[id] || "Service Available";

      tooltip.style.opacity = "1";
      tooltip.style.transform = "translateY(0)";
    });

    state.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY - 40 + "px";
    });

    state.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
      tooltip.style.transform = "translateY(10px)";
    });

    // CLICK EFFECT (premium feel)
    state.addEventListener("click", () => {
      state.classList.add("active");

      setTimeout(()=>{
        state.classList.remove("active");
      }, 500);
    });

  });

});
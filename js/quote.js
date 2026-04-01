document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("qx9-form");

  if(!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const first = document.getElementById("qx9-first").value;
    const last = document.getElementById("qx9-last").value;
    const email = document.getElementById("qx9-email").value;
    const phone = document.getElementById("qx9-phone").value;
    const service = document.getElementById("qx9-service").value;
    const location = document.getElementById("qx9-location").value;
    const details = document.getElementById("qx9-details").value;
    const budget = document.getElementById("qx9-budget").value;

    const method = document.querySelector('input[name="qx9-send"]:checked').value;

    const message = `
NEW QUOTE REQUEST

Name: ${first} ${last}
Phone: ${phone}
Email: ${email}

Service: ${service}
Location: ${location}

Budget: ${budget || "Not specified"}

Details:
${details}
`;

    if(method === "whatsapp"){
      const number = "234XXXXXXXXXX"; // EDIT
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`);
    }

    if(method === "email"){
      const mail = "info@harvesterken.com"; // EDIT
      window.location.href =
      `mailto:${mail}?subject=Quote Request&body=${encodeURIComponent(message)}`;
    }

    if(method === "sms"){
      window.location.href =
      `sms:${phone}?body=${encodeURIComponent(message)}`;
    }

  });

});
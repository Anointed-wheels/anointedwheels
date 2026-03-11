const form = document.getElementById("quoteForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const location = document.getElementById("location").value;
const service = document.getElementById("service").value;
const details = document.getElementById("details").value;

const method =
document.querySelector('input[name="method"]:checked').value;

const message = `
Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Service: ${service}

Details:
${details}
`;

if(method === "whatsapp"){

const number = "2340000000000";

const url =
`https://wa.me/${number}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}

if(method === "email"){

const companyEmail = "info@harvesterken.com";

const mail =
`mailto:${companyEmail}?subject=Quote Request&body=${encodeURIComponent(message)}`;

window.location.href = mail;

}

});
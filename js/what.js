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

const cards = document.querySelectorAll(".project-card img");
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("galleryImg");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const closeBtn = document.querySelector(".close");

let currentIndex = 0;

let images = [];


/* STORE IMAGES */

cards.forEach((img,index)=>{

images.push(img.src);

img.addEventListener("click",()=>{

modal.style.display="flex";

modalImg.src = img.src;

currentIndex = index;

});

});


/* NEXT IMAGE */

nextBtn.onclick = () =>{

currentIndex++;

if(currentIndex >= images.length){

currentIndex = 0;

}

modalImg.src = images[currentIndex];

};


/* PREVIOUS IMAGE */

prevBtn.onclick = () =>{

currentIndex--;

if(currentIndex < 0){

currentIndex = images.length - 1;

}

modalImg.src = images[currentIndex];

};


/* CLOSE */

closeBtn.onclick = () =>{

modal.style.display="none";

};



/* LOAD MORE PROJECTS */

document.getElementById("loadMoreBtn")
.addEventListener("click",()=>{

const grid = document.getElementById("projectsGrid");

for(let i=0;i<3;i++){

let div = document.createElement("div");

div.className="project-card";

div.innerHTML=`

<img src="https://picsum.photos/500/${400+Math.random()*300}?random=${Math.random()}">

<div class="overlay">
<i class="fas fa-search-plus"></i>
</div>

`;

grid.appendChild(div);

}

});



// Reveal Animation

const reveals = document.querySelectorAll(
".action-card, .service-card, .gallery-item, .info-card, .about-grid"
);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// Smooth Button Hover

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});


// Active Navigation

const links = document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.classList.add("active");

}

});


// Simple Fade In Hero

window.onload=()=>{

const hero=document.querySelector(".hero-content");

if(hero){

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

}

};
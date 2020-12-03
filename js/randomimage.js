const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/pic.1.jpg", "img/pic.2.jpg", "img/pic.3.jpg", "img/pic.4.jpg"];

button.addEventListener("click", ()=>{
console.log("Hello!")
let rnd = Math.floor(Math.random() * images.length);
mainImage.src = images[rnd];
console.log("Random number:", rnd)
});
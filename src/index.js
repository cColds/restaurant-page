import { home } from "./webpage/home.js";

home();

const homeTab = document.querySelector(".home");
const menuTab = document.querySelector(".menu");
const contactTab = document.querySelector(".contact");
let cardContent = document.querySelector(".card");

homeTab.addEventListener("click", home);

menuTab.addEventListener("click", () => {
	cardContent = document.querySelector(".card");
	cardContent.innerHTML = "";
});

contactTab.addEventListener("click", () => {
	cardContent = document.querySelector(".card");
	cardContent.innerHTML = "";
});

// pageLoad.js
import "./styles.css";
import chef from "./images/chef.png";

const content = document.querySelector("#content");

function header() {
	const headerContainer = document.createElement("div");
	const headerTitle = document.createElement("h1");
	const navigationTabs = document.createElement("div");
	const homeTab = document.createElement("div");
	const menuTab = document.createElement("div");
	const contactTab = document.createElement("div");

	headerContainer.classList.add("header");
	headerTitle.textContent = "Cravely";

	navigationTabs.classList.add("navigation");

	homeTab.textContent = "Home";
	menuTab.textContent = "Menu";
	contactTab.textContent = "Contact";

	navigationTabs.append(homeTab, menuTab, contactTab);

	for (const el of navigationTabs.children) {
		el.classList.add("navItems");
	}

	headerContainer.appendChild(headerTitle);
	headerContainer.appendChild(navigationTabs);

	content.appendChild(headerContainer);
}

function homeCard() {
	const cardContainer = document.createElement("div");
	const card = document.createElement("div");
	const cardHeading = document.createElement("div");
	const motto = document.createElement("div");
	const description = document.createElement("div");
	const chefImage = document.createElement("img");
	const buttonContainer = document.createElement("div");
	const menuButton = document.createElement("button");
	const contactButton = document.createElement("button");
	const callToAction = document.createElement("div");

	chefImage.src = chef;

	cardHeading.textContent = "Welcome to Cravely's Restaurant";
	motto.textContent = "“Eat for cheap, crave for more.”";
	description.textContent =
		"We are restaurant that serves premium, fresh ingredients, focusing on asian cuisine.";
	callToAction.textContent = "Order here today!";
	menuButton.textContent = "View Menu";
	contactButton.textContent = "Contact Us";

	cardContainer.classList.add("cardContainer");
	cardHeading.classList.add("cardHeading");
	chefImage.classList.add("chefImage");
	card.classList.add("card");
	description.classList.add("homeDescription");
	buttonContainer.classList.add("buttonContainer");
	menuButton.classList.add("homeButton");
	contactButton.classList.add("homeButton");

	buttonContainer.append(menuButton, contactButton);
	card.append(
		cardHeading,
		motto,
		description,
		chefImage,
		callToAction,
		buttonContainer
	);
	cardContainer.appendChild(card);
	content.appendChild(cardContainer);
}
function home() {
	header();
	homeCard();
}
export { home };

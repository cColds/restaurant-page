import sushi from "../images/sushi.jpg";
import curry from "../images/curry.jpg";
import dumplings from "../images/dumplings.jpeg";
import nasiLemak from "../images/nasiLemak.jpg";
import ramen from "../images/ramen.jpg";
import springRolls from "../images/springRolls.jpg";

let card = document.querySelector(".card");
function menu() {
	createDishes();
	card.classList.add("menu");
	card.style.width = "1200px";
	card.style.height = "1000px";
}

function createDishes() {
	card = document.querySelector(".card");
	const dishes = [
		{
			photo: sushi,
			name: "Sushi",
			description: "Rice, Seaweed, Avocado, Salmon, Caviar",
		},
		{
			photo: curry,
			name: "Curry",
			description:
				"Rice, Spices, Naan, Water, Milk, Cilantro, Cauliflower",
		},
		{
			photo: dumplings,
			name: "Dumplings",
			description: "Dough, Starch, Pork, Soy Sauce, Green Onions",
		},
		{
			photo: nasiLemak,
			name: "Nasi Lemak",
			description:
				"Coconut Rice, Peanuts, Eggs, Sambal Sauce, Cilantro, Banana Leaf",
		},
		{
			photo: ramen,
			name: "Ramen",
			description:
				"Egg, Water, Broth, Green Onions, Noodles, Oil, Seasoning",
		},
		{
			photo: springRolls,
			name: "Spring Rolls",
			description:
				"Peanut Sauce, Carrots, Chillies, Lettuce, Rice Noodles, Rice Paper",
		},
	];
	dishes.forEach((dish) => {
		const dishCard = document.createElement("div");
		const dishPhoto = document.createElement("img");
		const dishName = document.createElement("div");
		const dishDescription = document.createElement("div");

		dishPhoto.src = dish.photo;
		dishPhoto.style.width = "250px";
		dishPhoto.style.height = "200px";

		dishName.textContent = dish.name;
		dishDescription.textContent = dish.description;

		dishCard.classList.add("dishCards");
		dishDescription.classList.add("dishDescription");

		dishCard.append(dishPhoto, dishName, dishDescription);

		card.append(dishCard);
	});
}

export { menu };

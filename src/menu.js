import { createElement } from "./home.js"

function createElements() {
	createMenu();
}

function createMenu() {
	const content = document.querySelector("#content");
	content.style.display = "flex";
	content.style.alignItems = "center";

	const background = createElement("div", ["menu-background"]);
	background.style.width = "60vw";
	background.style.height = "85vh";
	background.style.background = "white";
	background.style.marginTop = "64px";
	background.style.padding = "5%";

	background.appendChild(createMenuItem(
		"Bruschetta",
		["toasted bread with garlic rub", "diced tomato", "onion", "garlic"],
		11));

	background.appendChild(createMenuItem(
		"Pizza",
		["beautiful mozzarella", "spicy salame", "black olives"],
		18));

	background.appendChild(createMenuItem(
		"Spaghetti",
		["marinara", "beef meatballs"],
		20));

	background.appendChild(createMenuItem(
		"calamari tacos",
		["corn tortillas", "calamari rings", "tar tar sauce", "lettuce"],
		23));

	const moreToCome = createElement("div");
	moreToCome.textContent = "More to come soon!";
	moreToCome.style.fontSize = "2rem";
	moreToCome.style.marginTop = "20%";
	moreToCome.style.textAlign = "center";
	moreToCome.style.textDecoration = "underline";

	background.appendChild(moreToCome);
	content.appendChild(background);
}

function createMenuItem(name, ingredients, price) {
	const itemContainer = createElement("div");

	const menuItemContainer = createElement("div");
	menuItemContainer.width = "100%";
	menuItemContainer.height = "100%";
	menuItemContainer.style.display = "grid";
	menuItemContainer.style.gridTemplate = "100% / 50% 50%";

	const nameContainer = createElement("div");
	nameContainer.textContent = capitalize(name);
	nameContainer.style.textAlign = "left";
	nameContainer.style.fontSize = "1.5rem";

	const priceContainer = createElement("div");
	priceContainer.textContent = `\$${price}`
	priceContainer.style.textAlign = "right";

	const ingredientsContainer = createElement("div");
	ingredientsContainer.textContent = ingredients
		.map((x) => capitalize(x))
		.join(", ");
	ingredientsContainer.style.textAlign = "left";
	ingredientsContainer.style.marginTop = "6px";

	const line = createElement("div");
	line.style.borderBottom = "2px dotted black"
	line.style.marginTop = "12px";

	menuItemContainer.appendChild(nameContainer);
	menuItemContainer.appendChild(priceContainer);
	menuItemContainer.appendChild(ingredientsContainer);

	itemContainer.appendChild(menuItemContainer);
	itemContainer.appendChild(line);
	itemContainer.style.marginTop = "32px";

	return itemContainer;
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export default createElements;

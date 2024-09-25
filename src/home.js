import burgerImg from "./assets/burger.png"
import arrow from "./assets/arrow.svg"
import { menuClicked, aboutClicked, buttonListener } from "./index.js"

function createElement(type, classList = null, text = null) {
	const e = document.createElement(type);

	if (Array.isArray(classList)) {
		e.classList.add(...classList);
	}

	if (typeof(text) == 'string') {
		e.textContent = text;
	}

	return e
}

function createElements() {
	createPageButtons();
	createReviewAndImg();
}

function addEventListeners(menu, about) {
	menu.addEventListener("click", () => {
		buttonListener.dispatchEvent(menuClicked)
	})

	about.addEventListener("click", () => {
		buttonListener.dispatchEvent(aboutClicked)
	})
}

const createPageButtons = () => {
	const content = document.querySelector("#content");
	const buttons = createElement("div", ["buttons"]);

	const menuButton = createElement("div", ["menu"]);
	const menuArrow = createElement("img");

	const aboutButton = createElement("div", ["about"]);
	const aboutArrow = createElement("img");

	addEventListeners(menuButton, aboutButton);

	menuArrow.src = arrow;
	menuButton.appendChild(createElement("div", null, "Menu"));
	menuButton.appendChild(menuArrow);

	aboutArrow.src = arrow;
	aboutButton.appendChild(createElement("div", null, "About"));
	aboutButton.appendChild(aboutArrow);

	buttons.appendChild(menuButton);
	buttons.appendChild(aboutButton);

	content.appendChild(buttons);
};


const createReviewAndImg = () => {
	const content = document.querySelector("#content");
	const textImgContainer = createElement("div", ["container"]);

	const backgroundImg = createElement("img");
	backgroundImg.src = burgerImg;

	const reviewText = "This is the best food I've had in my whole life!!! - Satisfied Customer"
	const review = createElement("div", null, reviewText);

	textImgContainer.appendChild(review);
	textImgContainer.appendChild(backgroundImg);

	content.appendChild(textImgContainer);
};



export { createElements as default, createElement }

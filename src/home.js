import burgerImg from "./assets/burger.png"
import arrow from "./assets/arrow.svg"

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

const nav = document.querySelector("nav");
const content = document.querySelector("#content");

const createElements = () => {
	createNavButtons();
	createPageButtons();
	createReviewAndImg();
}

const createNavButtons = () => {
	const buttons = createElement("div", ["buttons"]);
	buttons.appendChild(createElement("div", ["home"], "Home"));
	buttons.appendChild(createElement("div", ["menu"], "Menu"));
	buttons.appendChild(createElement("div", ["about"], "About"));

	nav.appendChild(createElement("div", ["name"], "Maisie's"));
	nav.appendChild(buttons); 
};

const createPageButtons = () => {
	const buttons = createElement("div", ["buttons"]);

	const menuButton = createElement("div", ["menu"]);
	const menuArrow = createElement("img");
	const aboutButton = createElement("div", ["about"]);
	const aboutArrow = createElement("img");

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
	const textImgContainer = createElement("div", ["container"]);

	const backgroundImg = createElement("img");
	backgroundImg.src = burgerImg;

	const reviewText = "This is the best food I've had in my whole life!!! - Satisfied Customer"
	const review = createElement("div", null, reviewText);

	textImgContainer.appendChild(review);
	textImgContainer.appendChild(backgroundImg);

	content.appendChild(textImgContainer);
};



export default createElements;

import "./style.css"
import homePage, { createElement } from "./home.js"
import menuPage from "./menu.js"
import aboutPage from "./about.js"

const menuClicked = new Event("menuButtonClicked");
const aboutClicked = new Event("aboutButtonClicked");

const buttonListener = createElement("div");

buttonListener.addEventListener("menuButtonClicked", () => {
	wipeContent();
	menuPage();
})

buttonListener.addEventListener("aboutButtonClicked", () => {
	wipeContent();
	aboutPage();
})

function wipeContent() {
	const content = document.querySelector("#content");
	
	while (content.firstElementChild) {
		content.firstElementChild.remove();
	}
}

const createNavBar = () => {
	const nav = document.querySelector("nav");
	const buttons = createElement("div", ["buttons"]);
	buttons.appendChild(createElement("div", ["home"], "Home"));
	buttons.appendChild(createElement("div", ["menu"], "Menu"));
	buttons.appendChild(createElement("div", ["about"], "About"));

	nav.appendChild(createElement("div", ["name"], "Maisie's"));
	nav.appendChild(buttons); 
};



createNavBar();
homePage();

const title = document.querySelector("nav > .name");
const home = document.querySelector("nav > .buttons > .home");
const menu = document.querySelector("nav > .buttons > .menu");
const about = document.querySelector("nav > .buttons > .about");

title.addEventListener("click", () => {
	wipeContent();
	homePage();
})

home.addEventListener("click", () => {
	wipeContent();
	homePage();
})

menu.addEventListener("click", () => {
	wipeContent();
	menuPage();
})

about.addEventListener("click", () => {
	wipeContent();
	aboutPage();
})

export { menuClicked, aboutClicked, buttonListener }

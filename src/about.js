import { createElement } from "./home.js"
import mapsImg from "./assets/maps.png"

const content = document.querySelector("#content");

function aboutPage() {
	contentStyling();

	aboveText();
	mapsImage();
	belowText();
}

function aboveText() {
	const container = createElement("div");
	const message = "Come find us here!";

	container.textContent = message;
	
	const style = container.style;
	style.fontSize = "3rem";
	style.marginBottom = "2rem";
	style.color = "#ecfdf5";

	content.appendChild(container);
}

function belowText() {
	const container = createElement("div");
	const message = "... And enjoy the meal of a lifetime!";

	container.textContent = message;

	const style = container.style;
	style.fontSize = "3rem";
	style.marginTop = "2rem";
	style.color = "#ecfdf5";

	content.appendChild(container);
}

function contentStyling() {
	const style = content.style;

	style.display = "flex";
	style.justifyContent = "center";
	style.alignItems = "center";
	style.width = "100%";
	style.height = "100%";
}

function mapsImage() {
	const mapsImage = createElement("img");
	mapsImage.src = mapsImg

	content.appendChild(mapsImage);
}

export default aboutPage;

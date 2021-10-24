require("file-loader?name=[name].[ext]!./index.css");

const container = document.getElementById("taters");
const taterInfo = document.getElementById("taterinfo");

const createClassElement = require("./utils/create-class-element.js");
const getTaterHeader = require("./utils/get-tater-header.js");
const getTaterImage = require("./utils/get-tater-image.js");
const taterLibraryUrl = require("./utils/url.js");

async function fetchAndAdd() {
	const response = await fetch(taterLibraryUrl("listing/all.json"));
	const json = await response.json();

	const verb = json.length === 1 ? "is" : "are";
	const suffix = json.length === 1 ? "" : "s";
	taterInfo.textContent = `There ${verb} currently ${json.length} tater${suffix} in the Tater Library`;

	for (const tater of json.taters) {
		const element = createClassElement("div", "tater");

		const imageWrapper = createClassElement("div", "imagewrapper");
		element.append(imageWrapper);

		const image = document.createElement("img");
		image.src = taterLibraryUrl(getTaterImage(tater));
		image.alt = tater.libraryNumber ? "Tater #" + tater.libraryNumber : "Tater";
		imageWrapper.append(image);

		const content = createClassElement("div", "content");
		element.append(content);

		if (tater.name || tater.libraryNumber) {
			const header = document.createElement("h2");
			header.textContent = getTaterHeader(tater);
			content.append(header);
		}

		if (tater.description) {
			const description = document.createElement("p");
			description.textContent = tater.description;
			content.append(description);
		}

		container.append(element);
	}
}
fetchAndAdd();

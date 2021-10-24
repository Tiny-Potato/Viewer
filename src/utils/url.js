const base = "https://tiny-potato.github.io/TaterTotter/";

function taterLibraryUrl(path) {
	if (typeof path !== "string") {
		throw new TypeError("Path should be a string");
	} if (path.startsWith("/")) {
		throw new TypeError("Path shouldn't start with forward slash");
	}

	return base + path;
}
module.exports = taterLibraryUrl;

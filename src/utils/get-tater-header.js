function getTaterHeader(tater) {
	if (tater.name && tater.libraryNumber) {
		return tater.name + " — #" + tater.libraryNumber;
	} else if (tater.name) {
		return tater.name;
	} else if (tater.number) {
		return "#" + tater.libraryNumber;
	}
}
module.exports = getTaterHeader;

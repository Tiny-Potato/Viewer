function getTaterImage(tater) {
	if (typeof tater.images === "object" && tater.images !== null) {
		return tater.images.full || tater.images["128x"];
	} else if (typeof tater.image === "string") {
		return tater.image;
	}
}
module.exports = getTaterImage;

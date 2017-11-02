'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	for (var i = 0; i < collectionA.length; i++) {
		if (objectB["value"].indexOf(collectionA[i]["key"]) > -1) {
			let value = collectionA[i]["count"];
			for (let j = parseInt(value / 3); j > 0; j--) {
				collectionA[i]["count"]--;
			}
		}
	}
	return collectionA;
}

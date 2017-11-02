'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var result = [];
	var temp = collectionA[0];
	var count = 0;
	for (let i = 0; i < collectionA.length; i++) {
		if (temp === collectionA[i]) {
			count++;
		}
		if (temp != collectionA[i] || (i === collectionA.length - 1)) {
			result.push({
				key:temp,
				count:count
			});
			
			temp = collectionA[i];
			var count = 1;
		}
	}
	for (let i = 0; i < result.length; i++) {
		if (objectB["value"].indexOf(result[i]["key"]) > -1) {
			let value = parseInt(result[i]["count"] / 3);
			result[i]["count"] -= value;
		}
	}
	return result;

}

'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	//var result = collectionA;
	for (var i = 0; i < collectionA.length; i++) {
		if (objectB["value"].indexOf(collectionA[i]["key"]) > -1) {
			collectionA[i]["count"]--;
		}
	}
	return collectionA;
}

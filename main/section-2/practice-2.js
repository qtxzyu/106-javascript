'use strict';

module.exports = function countSameElements(collection) {
	var result = [];
	var temp;
	var count = 0;
	temp = collection[0];
	for (var i = 0; i < collection.length; i++) {
		if (temp === collection[i]) {
			count++;
		}
		if (temp != collection[i] || (i === collection.length - 1)) {
			result.push({
				key:temp,
				count:count
			});
			temp = collection[i];
			var count = 1;
		}
		
		if (collection[i].length > 1) {
			var values = collection[i].split("-");
			temp = values[0];
			count = parseInt(values[1]);
			
			result.push({
				key:temp,
				count:count
			});
		}
	}
  
	return result;
}

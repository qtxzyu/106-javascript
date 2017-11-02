'use strict';

module.exports = function countSameElements(collection) {
	var result = [];
	var temp;
	var count = 0;
	temp = collection[0];
	for (var i = 0; i < collection.length; i++) {
		
		if (collection[i].length > 1) {
			let value0 = collection[i].slice(0,1);
			let value1 = collection[i].slice(2)
			if (temp === value0) {
				count += parseInt(value1);
			} else {
				if (temp != collection[0]) {
					result.push({
						name:temp,
						summary:count
					});
				}
				temp = value0;
				count = parseInt(value1);
			}	
		} else {
			if (temp === collection[i]) {
				count++;
			}
			if (temp != collection[i]) {
				result.push({
					name:temp,
					summary:count
				});
				temp = collection[i];
				count = 1;
			}
		}
		if (i === collection.length - 1) {
			result.push({
				name:temp,
				summary:count
			})
		}
	}
  
	return result;
}

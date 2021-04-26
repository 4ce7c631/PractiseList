obj = {
	x: 10, 
	y: 20, 
	inner: { x: 20, z: 30 }, 
	foo2: { k: 23, p: 13 } 
}

function convert(obj){
	let newObj = {};
	for(let key in obj){
		if (typeof obj[key] === `object`) {
			for(let secondKey in obj[key]){
				newObj[secondKey] = obj[key][secondKey];
			}
		}else newObj[key] = obj[key];
	}
	return newObj;
}

obj = convert(obj);
console.log(obj);
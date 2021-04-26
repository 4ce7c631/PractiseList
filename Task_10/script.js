assignObjects({ x: 10, y: 20 }, { z: 30 }, { x: 50, y: 10 }, { x: 22, y: 34 }, { z: 35 }); 
assignObjects({ x: 10 }, { x: 20, y: 30 }, { x: 20, y: 30 }, { x: 27, y: 32 }, { x: 21, y: 7 }, { z: 23 });

function assignObjects(...args){
	let finalObj = {};
	args.forEach((arg) => {
		Object.assign(finalObj, arg);
  		});
	console.log(finalObj);
}
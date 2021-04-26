let args = [];
do{
	quantityOfArray = +prompt(`Введите колличество массивов`, 4);
}while(isNaN(quantityOfArray))
arrayRandom(quantityOfArray);
args.forEach(getMaxs);

function arrayRandom(x){
	for (let i = 0; i < x; i++) {
		let randomNumber = Math.floor(Math.random() * 10);
		let randomArray = [];
		for (let y = 0; y < randomNumber; y++) {
			randomArray.push(Math.floor(Math.random() * 100));
		}
		args.push(randomArray);
	}
}

function getMaxs(array){
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		if (max < array[i]){
			max = array[i];
		}
	}
	document.write(`${max}; `);
}

console.log(args);



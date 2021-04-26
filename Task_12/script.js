function inPut(){
	let length = +prompt(`Введите длину массива`, 2);
	let arr = [];
	for(let i = 0; i < length; i++){
		arr[i] = +prompt(`Введите число`, 1);
	}
	return arr
}

function compare(a, b){
	a = sum(a);
	b = sum(b);
	if (a > b) {
		console.log(`Первый массив больше второго (${a} > ${b})`);
	}else if(a < b){
		console.log(`Первый массив меньше второго (${a} < ${b})`);
	}else if(a = b){
		console.log(`Оба массива равны (${a} = ${b})`);
	}
}

function sum(x){
	let value = 0;
	for(let i = 0; i < x.length; i++){
		if (!isNaN(x[i])){
			value += x[i];
		}
	}
	return value
}

firstArray = inPut();
secondArray = inPut();
compare(firstArray, secondArray);
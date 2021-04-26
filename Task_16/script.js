function copy(array, func, value){
	let memArray = [];
	if (func == `-`) {
		for(let i = 0; i < array.length; i++){
			memArray[i] = minus(array[i], value);
		}
		return memArray
	}
	if (func == `+`) {
		for(let i = 0; i < array.length; i++){
			memArray[i] = plus(array[i], value);
		}
		return memArray
	}
	if (func == `*`) {
		for(let i = 0; i < array.length; i++){
			memArray[i] = multiply(array[i], value);
		}
		return memArray
	}
	if (func == `/`) {
		for(let i = 0; i < array.length; i++){
			memArray[i] = division(array[i], value);
		}
		return memArray
	}
}

function multiply(x, value){
	return x * value
}

function division(x, value){
	return x / value
}

function minus(x, value){
	return x - value
}

function plus(x, value){
	return x + value
}

length = +prompt(`Введите длину массива`, 2);
arr = [];
for(let i = 0; i < length; i++){
arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);
do{
	func = prompt(`Введите тип функции ( / , * , + , - )`);
	console.log(func);
}while(func != `/` && func != `*` && func != `+` && func != `-`)
value = +prompt(`Введите значение для ( ${func} ) функции`);
console.log(`Массив ${arr}`);
newList = copy(arr, func, value);
console.log(`Новый скопированный массив ${newList}`);
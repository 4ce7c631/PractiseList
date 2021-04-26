a = +prompt(`Введите a`, 10);
b = +prompt(`Введите b`, 10);
console.log(`a = ${a}, b = ${b}`);
plus(a, b);
minus(a, b);
mult(a, b);
divis(a, b);

function plus(a, b){
	console.log(`a + b = ${a+b}`);
}

function minus(a, b){
	console.log(`a - b = ${a-b}`);
}

function mult(a, b){
	console.log(`a * b = ${a*b}`);
}

function divis(a, b){
	console.log(`a / b = ${a/b}`);
}

console.log(`End`);
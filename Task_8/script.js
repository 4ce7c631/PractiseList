function main (a = 2, b = 3, c) {
	let memory = sum(a,b);
	if(typeof c === 'function'){
		return c(memory)
	}else{
		return memory
	}
}

function sum (a, b) { 
    return a + b; 
}

function cFunction(sum){
	return sum += 10
}

let data = main(2,3,cFunction);

console.log(data);
function isNumber(){
	let number;
	do{
		number = +prompt(`Введите число`, 10)
	}while(!Number.isInteger(number));
	return number
}

function isSign(){
	let sign;
	do{
		sign = prompt(`Введите знак`, `/`)
	}while(sign !== `+` && sign !== `-` && sign !== `*` && sign !== `/` && sign !== `%`);
	return sign
}

class Functions{
	check(){
		let decision = confirm(`Хотите ли вы провести данное уравнение? - ${this.x}${this.znak}${this.y}`);
		if(decision){
			this.calculation();
		}else{
			this.inPut();
		}
	}
	calculation(){
		switch(this.znak){
			case `+`: console.log(`${this.x}${this.znak}${this.y} = ${this.x + this.y}`);
		}
		switch(this.znak){
			case `-`: console.log(`${this.x}${this.znak}${this.y} = ${this.x - this.y}`);
		}
		switch(this.znak){
			case `*`: console.log(`${this.x}${this.znak}${this.y} = ${this.x * this.y}`);
		}
		switch(this.znak){
			case `/`: console.log(`${this.x}${this.znak}${this.y} = ${this.x / this.y}`);
		}
		switch(this.znak){
			case `%`: console.log(`${this.x}${this.znak}${this.y} = ${this.x % this.y}`);
		}

	}
	inPut(){
		this.x = isNumber();
		this.znak = isSign();
		this.y = isNumber();
		this.check();
	}
}

class SuperMath extends Functions{
	constructor(){
		super();
		this.x = isNumber();
		this.znak = isSign();
		this.y = isNumber();
	}
}

let p = new SuperMath();
p.check();
console.log(p);
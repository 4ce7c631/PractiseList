window.HAMBURGER = {
	size: [
		{
		size: `маленький`,
		price: 5,
		calories: 20
		},
		{
		size: `большой`,
		price: 10,
		calories: 40
		}
	],
	firstAdditive: [
		{
		additive: `сыр`,
		price: 1,
		calories: 20
		},
		{
		additive: `салат`,
		price: 2,
		calories: 5
		},
		{
		additive: `картофешка-фри`,
		price: 1.5,
		calories: 10
		}
	],
	secondAdditive: [
		{
		additive: `посыпать приправой`,
		price: 1.5,
		calories: 0
		},
		{
		additive: `полить майонезом`,
		price: 2,
		calories: 5
		}
	]
}

class functions{
	check(){
		let check = confirm(`Хотите ли вы выбрать добавку?`);
		return check;
	}

	chooseSize(){
		let choose;
		let list = [];
		for(let key in window.HAMBURGER.size){
			list.push(` ${window.HAMBURGER.size[key].size} - ${+key + 1}`);
		}
		do{
			choose = +prompt(`Выбирите первую добавку для бургера: ${list.join()}`, 1)
		}while(choose !== 1 && choose !== 2);
		return window.HAMBURGER.size[choose - 1];
	}

	chooseFirst(){
		let choose;
		let list = [];
		for(let key in window.HAMBURGER.firstAdditive){
			list.push(` ${window.HAMBURGER.firstAdditive[key].additive} - ${+key + 1}`);
		}
		do{
			choose = +prompt(`Выбирите вторую добавку для бургера: ${list.join()}`, 1)
		}while(choose !== 1 && choose !== 2 && choose !== 3);
		return window.HAMBURGER.firstAdditive[choose - 1];
	}

	chooseSecond(){
		let choose;
		let list = [];
		for(let key in window.HAMBURGER.secondAdditive){
			list.push(` ${window.HAMBURGER.secondAdditive[key].additive} - ${+key + 1}`);
		}
		do{
			choose = +prompt(`Выбирите вторую добавку для бургера: ${list.join()}`, 1)
		}while(choose !== 1 && choose !== 2);
		return window.HAMBURGER.secondAdditive[choose - 1];
	}

	checkFirstAdditive(){
		let decision = false;
		return this.check() ? this.chooseFirst() : decision;
	}

	checkSecondAdditive(){
		let decision = false;
		return this.check() ? this.chooseSecond() : decision;
	}

	math(){
		let price = 0;
		let calories = 0;
		for(let key in this){
			price += this[key].price;
			calories += this[key].calories;
		}
		console.log(`Ваш заказ на сумму- ${price}$, колличество каллориев - ${calories}`);
	}	
}



class order extends functions{
	constructor(){
		super();
		this.size = super.chooseSize();
		this.firstAdditive = super.checkFirstAdditive();
		this.secondAdditive = super.checkSecondAdditive();
	}
}



let hamburger = new order();
hamburger.math();




function secondChild(){
		let lastLi = document.querySelectorAll('li ul li:last-of-type');
		lastLi.forEach(function(li){
		li.classList.add(`last`);
	})
}

let functions = {
	1: function first(){
		let firstLevelLi = document.querySelectorAll(`.root>li:first-of-type`);
		firstLevelLi.forEach(function(li){
			li.classList.add(`first-item`);
		})
	},
	2: function second(){
		let firstLevelLi = document.querySelectorAll(`.root>li>ul>li:first-of-type`);
		firstLevelLi.forEach(function(li){
			li.classList.add(`first-item`);
			console.dir(firstLevelLi);
		})
	}
}

function inPut(){
	let levelNumber;
	do{
		levelNumber = +prompt(`Введите уровень вложенности li, которым хотите провести операцию setFirstItemClassName, доступные уровни - (1 ,2)`, 1);
	}while(levelNumber !== 1 && levelNumber !== 2);
	setFirstItemClassName(levelNumber);
	secondChild();
}


function setFirstItemClassName(level){
	functions[level] && functions[level]();
}

inPut();

function style(){
	let redElements = document.querySelectorAll('.first-item');
	let greenElements = document.querySelectorAll('.last');
	redElements.forEach(function(li){
		li.style.backgroundColor = `red`;
	})
	greenElements.forEach(function(li){
		li.style.backgroundColor = `green`;
	})
	
}

setTimeout(style, 2000);
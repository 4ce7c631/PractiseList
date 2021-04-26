let forma = document.querySelector(`form`);
let block = document.querySelector(`.block`);
let input = document.querySelector(`input`);
forma.addEventListener("change", changeOption);
input.addEventListener("keypress", changeColor);

function changeOption(){
	let options = document.querySelectorAll(`option`);
	options.forEach(function (cell){
		cell.selected && functions[`${cell.value}`]();

	})
}

let functions = {
	square: function(){
		block.id = 'square';
	},
	rectangle: function(){
		block.id = 'rectangle';
	},
	circle: function(){
		block.id = 'circle';
	}
}

function changeColor(){
	setTimeout(timerColor, 2000);
}

function timerColor(){
	block.style.backgroundColor = `${input.value}`;
}
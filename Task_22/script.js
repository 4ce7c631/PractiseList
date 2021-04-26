function Bems(){
	cat.src = `https://thumbs.gfycat.com/AccurateAgreeableDairycow-max-1mb.gif`;;
}

const interaction = {
	ArrowLeft : function(){
			cat.style.left = !cat.style.left && `+${leftValue}px`;
			if (parseInt(cat.style.left) > 99) {
				cat.style.left = (parseInt(cat.style.left) - 100)+'px';
			}else{
				cat.style.left = (parseInt(cat.style.left) + 200)+'px';
				cat.src = `https://media1.giphy.com/media/h8sVibFE0NChi/giphy.gif`;
				setTimeout(Bems, 2000);
			}
		},
	ArrowRight : function(){
			cat.style.left = !cat.style.left && `+${leftValue}px`;
			if (parseInt(cat.style.left) < (screen.clientWidth - 100)) {
				cat.style.left = (parseInt(cat.style.left) + 100)+'px';
			}else{
				cat.style.left = (parseInt(cat.style.left) - 200)+'px';
				cat.src = `https://media1.giphy.com/media/h8sVibFE0NChi/giphy.gif`;
				setTimeout(Bems, 2000);
			}
		},
	ArrowUp : function(){
			cat.style.bottom = !cat.style.bottom && `+0px`;
			if (parseInt(cat.style.bottom) < (screen.clientHeight/2) - 50) {
				cat.style.bottom = (parseInt(cat.style.bottom) + 50)+'px';
			}else{
				cat.style.bottom = (parseInt(cat.style.bottom) - 100)+'px';
				cat.src = `https://media1.giphy.com/media/h8sVibFE0NChi/giphy.gif`;
				setTimeout(Bems, 2000);
			}
		},
	ArrowDown : function(){
			cat.style.bottom = !cat.style.bottom && `+0px`;
			if (parseInt(cat.style.bottom) > (0 - (screen.clientHeight/2) + 50)) {
				cat.style.bottom = (parseInt(cat.style.bottom) - 50)+'px';
			}else{
				cat.style.bottom = (parseInt(cat.style.bottom) + 100)+'px';
				cat.src = `https://media1.giphy.com/media/h8sVibFE0NChi/giphy.gif`;
				setTimeout(Bems, 2000);
			}
		}

}

let cat = document.querySelector('.cat');
let screen = document.querySelector('.zone');

let leftValue;
let bottomValue;

document.onkeydown = function(event){
	leftValue = +cat.dataset.left;
	bottomValue = +cat.dataset.bottom;
	interaction[event.code] && interaction[event.code]();
}
let textArea = document.querySelector(`textarea`);
let inPuts = document.querySelectorAll(`input`);

function textToArea(){
	let memory = [];
	inPuts.forEach(function(element){
		memory.push(element.value);
	})
	textArea.value = memory.join(`,`);
}

setInterval(textToArea, 2000);
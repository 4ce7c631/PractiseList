var users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];

let totalScore = 0;
let exclamationArray = [];
users.forEach(addingExclamation);
let questionArray = users.map(addingQuestion);
users = users.filter(redTeam);
users.forEach(finalResult);
let table_array = users.map(td)
				.map(tr);
result(table_array);


function addingExclamation(array){
	exclamationArray.push(array[0] + `!`);
}

function addingQuestion(array){
	return array[0] + `?`;
}

function redTeam(array){
	return array[1] === `red`;
}

function finalResult(array){
	totalScore += array[2];
}

function td(array){
	let td = [];
	for(let i = 0; i < array.length - 1; i++){
		td[i] = `<td>${array[i]}</td>`
	}
	td[3] = `<td>${array[3].join()}</td>`
	return td
}

function tr(array){
	return `<tr>${array.join()}</tr>`
}

function result(array){
	let tHead = `<thead><tr><td>Name</td><td>Team</td><td>Score</td><td>Inventory</td></tr></thead>`;
	let tBody = `<tbody>${array.join()}</body>`;
	let tFoot = `<tfoot><tr><td>Final Score</td><td>${totalScore}</td></tr></foot>`
	result = `<table>${tHead + tBody + tFoot}</table>`;
	document.write(result);
}
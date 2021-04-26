const sports = [
	['1F93A','fencing'],
	['26F8','figure skating'],
	['26F7','skier'],
	['1F3C2','snowboarder'],
	['1F3CC','golfing'],
	['1F6A3','rowing boat'],
	['1F3CA','swimming'],
	['1F938','gymnastics'],
	['1F93E','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],


	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],


	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],


	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],


	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],


	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],


	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],


	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],


	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['1F535','26AB','1F534','1F7E1','1F7E2'];

const medals = [
	['1F947','gold'],
	['1F948','silver'],
	['1F949','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

let continent = ['Europe','Africa','The Americas','Asia','Oceania'];

(function () {
	let mem = topTable();
	let mainDesk = mainTable();
	let table = mem.concat(mainDesk);
	document.write(`<table>${table}</table>`);
}());

function topTable(){
	let columns = [`<td class="typeOfSport">Вид Спорта</td>`];
	olympic.forEach((column)=>columns.push(`<td>${String.fromCodePoint(parseInt(column, 16))}</td>`));
	return `<tr>${(columns.join(``))}</tr>`;
}

function mainTable(){
	let columns = [];
	sports.forEach((sport)=>columns.push(`<tr class="sport"><td>${String.fromCodePoint(parseInt(sport[0], 16))}</td>${getScore(sport[1])}</tr>`));
	return columns.join(``)
}

function getScore(sport){
	let score = winners.filter((winner)=>winner[0] == sport);
	let tdList = [];
	continent.forEach((world)=>tdList.push(`<td>${filter(world)}</td>`));
	return tdList.join(``)

	function filter(world){
		let td = [];
		let currentContinent = continents.filter((country)=> country[1] === world);
		currentContinent = currentContinent.map((country)=>country[0]);
		console.log(currentContinent);
		score.forEach((winner)=>currentContinent.forEach(function(country){
			if(winner[2] == country){
				let medal = medals.filter((medal)=>medal[1] == winner[1])
				td.push(`<div class="winner">${String.fromCodePoint(parseInt(medal, 16))} ${winner[2].toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397))}</div>`)
			};
			}));
		return td.join(``)
	}

	function check(){

	}
}

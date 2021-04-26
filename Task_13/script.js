let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
let tasks = [monday,tuesday];

result = tasks
		.map(minutes_To_Hours)
		.map(sallary)
		.forEach(table);

function minutes_To_Hours (task){
	for (let i = 0; i < task.length; i++) {
		task[i][1] /= 60;
	}

	return task.filter(filtr);
}

function filtr(array){
	return array[1] >= 2;
}

function sallary(task){
	for(let i = 0; i < task.length; i++){
		task[i][2] = amount * task[i][1];
	}
	return task;
}

function table (array){
	for(let i = 0; i < array.length; i++){
		document.write(`<table><tr><td>Task name: ${array[i][0]}</td><td>Taks duration: ${array[i][1]} hours</td><td>Task amount: $${array[i][2]}</td></tr></table>`);
	}
}

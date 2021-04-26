sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
summer_sports = sports.slice(5,11);
winter_sports = sports.slice(0,5);
fruits = [];
for(start = 2, i = 2; i < 4; i++) {
	fruits.push(summer_sports[start]);
	for(x = start; x < summer_sports.length; x++){
	summer_sports[x] = summer_sports[x + 1];
	}
	summer_sports.pop();
}
for(start = 2, i = 2; i < 3; i++) {
	fruits.push(winter_sports[start]);
	for(x = start; x < winter_sports.length; x++){
	winter_sports[x] = winter_sports[x + 1];
	}
	winter_sports.pop();
}
console.log(`***Summer Sports***`);
for(i = 0; i < summer_sports.length; i++){
	console.log(summer_sports[i].join(`: `))
}
console.log(``);
console.log(`***Winter Sports***`);
for(i = 0; i < winter_sports.length; i++){
	console.log(winter_sports[i].join(`: `))
}
console.log(``);
console.log(`***Fruits***`);
for(i = 0; i < fruits.length; i++){
	console.log(fruits[i].join(`: `))
}
console.log(``);

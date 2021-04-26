function getUsersChildrens(file1, file2){
	let firstXhr,
		secondXhr;
	let request = new Promise(function(resolve,reject){
		firstXhr = new XMLHttpRequest();
		secondXhr = new XMLHttpRequest();
		firstXhr.open('GET',file1,true);
		secondXhr.open('GET',file2,true);
		firstXhr.send();
		secondXhr.send();
		let counter = 0;

		firstXhr.addEventListener(`readystatechange`,function(){
			if(firstXhr.readyState === 4){
				counter += 1;
				if(counter === 2){
					resolve()
				}
				if(firstXhr.status >= 400){
					reject()
				}
			}
		})

		secondXhr.addEventListener(`readystatechange`,function(){
			if(secondXhr.readyState === 4){
				counter += 1;
				if(counter === 2){
					resolve(JSON.parse(firstXhr.responseText), JSON.parse(secondXhr.responseText))
				}
				if(secondXhr.status >= 400){
					reject()
				}
			}
		})
	});

	request
		.then(
			function(){
				let childrens = JSON.parse(firstXhr.responseText).children.concat(JSON.parse(secondXhr.responseText).children);
				console.log(childrens);
			},
			function(){
				console.log(`Data not found`);
			}
		)
}

getUsersChildrens('data.json','data2.json');







// function getUserData(file){
// 	let request = new Promise(function(resolve,reject){
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('GET',file,true);
// 		xhr.send();

// 		xhr.addEventListener('readystatechange',function(){
// 			if(xhr.readyState === 4){
// 				if(xhr.status === 200){
// 					resolve(JSON.parse(xhr.responseText));
// 				} else{
// 					reject(xhr.statusText);
// 				}
// 			}
// 		})
// 	}); 

// 	request
// 		.then(
// 			function(data){
// 				let childrens = data.children.map(function(children){return children});
// 				allChildrens = allChildrens.concat(childrens);
// 			},
// 			function(){
// 				console.log(`Error 404`);
// 			}
// 		)
// }

// let allChildrens = [];
// getUserData('data.json');
// getUserData('data2.json');
function getPromise(){
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(Math.floor(Math.random() * 101)), 1000);
	})
}

function afterFirstPromise(){console.log(`1`)};

function afterSecondPromise(){console.log(`2`)};

function afterThirdPromise(){console.log(`3`)};

let afterFunctions = [afterFirstPromise,afterSecondPromise,afterThirdPromise]

Promise
	.all([
		getPromise(),
		getPromise(),
		getPromise()
		])
	.then(console.log)
	.then(
		() => {afterFunctions.forEach(selectedFunction => selectedFunction())}
	)
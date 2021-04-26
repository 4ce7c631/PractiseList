let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let kitchen = {category: 'Kitchen'};
let devices = {category: 'Devices'};
let cosmetics = {category: 'Cosmetics'};
let productsCategory = [kitchenProducts, devicesProducts, cosmeticsProducts];
productsCategory.forEach(addingProto);

function addingProto(category){
	if(category === kitchenProducts){
		protoUpdating(category, kitchen);
	}else if(category === devicesProducts){
		protoUpdating(category, devices);
	}else if(category === cosmeticsProducts){
		protoUpdating(category, cosmetics);
	}
}

function protoUpdating(category, categoryProto){
	category.forEach(function (product){
		product.__proto__ = categoryProto;
	})
}

toTheHTML(productsCategory);
function toTheHTML(categoryList){
	let write = [];
	categoryList.forEach(function (list){
		let arr = [];
		arr.push(`<h2>Category: ${list[0].category}</h2>`);
		list.forEach(function (item){
			let price = item.price;
			if(Array.isArray(item.price)){
				price = `${item.price[0]}-${item.price[1]}`;
			}
			arr.push(`<div class="cell"><img src=images/${item.type}.svg alt=${item.type}><ul><li>Name - <strong>${item.type}</strong></li><li>Price - <strong>$${price}</strong></li></ul></div>`);
		})
		write.push(`<div class="category">${arr.join(``)}</div>`);
	})
	write.forEach(function(div){
		document.write(div);
	})
}

const cities = {
	msk: {
		let: 200,
		tem: 25
	},
	spb: {
		let: 100,
		tem: 20
	}
};

let sumTemp = 0;
let citiesCount = 0;

for (const key in cities) {
	console.log(key);
	citiesCount++;
	sumTemp += cities[key].tem;
}
console.log(sumTemp / citiesCount);

sumTemp = 0;
citiesCount = Object.keys(cities).length;
for (const key of Object.keys(cities)) {
	sumTemp += cities[key].tem
}
console.log(sumTemp / citiesCount);

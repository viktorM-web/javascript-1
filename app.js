const cities = {
	msk: {
		temp: {
			celsius: 25
		}
	},
	spb: {

	}
};

const city = 'spb';

if (cities[city] != undefined && cities[city].temp != undefined) {
	console.log(cities[city].temp.celsius)
}

console.log(cities[city]?.temp?.celsius)
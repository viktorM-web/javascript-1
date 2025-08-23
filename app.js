const warehouse = {
	goods: [],
	findGoodById: function (id) {
		return this.goods.find(g => g.id == id);
	},
	addGood: function (good) {
		if (this.findGoodById(good.id)) {
			console.log('This good is alrady on the warehouse');
			return;
		}
		this.goods.push(good);
	},
	getWeight: function () {
		return this.goods.reduce(
			(weight, good) => weight += good?.weight?.kg ? good.weight.kg : 0
			, 0);

	}
}

const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
};
const chair = {
	id: 3,
	weight: {
		kg: 2
	}
};
const paper = {
	id: 5,
	color: 'red'
};

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);

console.log(warehouse.findGoodById(3));
console.log(warehouse.getWeight());
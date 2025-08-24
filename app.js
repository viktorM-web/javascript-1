'use strict'

const audi = {
	brand: 'Audi',
	model: 'A3',
	damages: []
};


const carManipulation = {
	addDamage(part, rate) {
		this.damages.push({ part, rate });
		console.log(`add damage for ${this.brand} ${this.model}`);
	}
};

const addDamageAudi = carManipulation.addDamage.bind(audi);

addDamageAudi('front', 9);//add damage for Audi A3
console.log(audi);

const addBodyDamageAudi = carManipulation.addDamage.bind(audi, 'body');
addBodyDamageAudi(3);//add damage for Audi A3
console.log(audi);
/*
brand
: 
"Audi"
damages
: 
Array(2)
0
: 
{part: 'front', rate: 9}
1
: 
{part: 'body', rate: 3}
length
: 
2
[[Prototype]]
: 
Array(0
*/

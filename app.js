'use strict'

const audi = {
	brand: 'Audi',
	model: 'A3',
	years: 2021,
	damages: [],
	addDamage(part, rate) {
		console.log(
			`Vehicle ${this.brand} ${this.model} ${this.years} is got damage:  ${part}  ${rate}`
		);
		this.damages.push(
			{
				part,
				rate
			}
		)
	}
};

audi.addDamage('hood', 1);

const bmw = {
	brand: 'BMW',
	model: 'X5',
	years: 2022,
	damages: []
};
bmw.addDamage = audi.addDamage;
bmw.addDamage('bumper', 2);

const addDamageFunc = audi.addDamage;
// addDamageFunc('bumper', 2);//Uncaught TypeError

addDamageFunc.call(audi, 'bumper', 2);// same like audi.addDamage('bumper', 2)
addDamageFunc.call(audi, ...['bumper', 2]);// same like audi.addDamage('bumper', 2)
addDamageFunc.apply(audi, ['bumper', 2]);// same like audi.addDamage('bumper', 2)

addDamageFunc.apply(bmw, ['bumper', 2]);// same like bmw.addDamage('bumper', 2)
const user = {
	name: 'Vasia',
	age: 40,
	city: 'Moscow'
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Development', 'Design'],
	creditcard: '2342-2345-2734-2356'
};

const userWithAdditionalData = {
	...user,
	...additionalData
};

console.log(userWithAdditionalData);
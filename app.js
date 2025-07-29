const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Anna', 25];
console.log(userInfo);
console.log(roles[0]);
console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles.at(0));
console.log(roles.at(-1));

const userName = new Array('Vasia', 'Petia', 'Katia');
console.log(userName);

const userAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(userAge);

function square(el1) {
	return el1 * el1;
}

console.log(square([1, 2, 3]));//NaN
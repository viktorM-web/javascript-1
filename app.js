const operations = [100, -20, 7, -30, 50];

let balance = 0;

for (const operation of operations) {
	balance += operation;
}
console.log(balance);

const balance2 = operations.reduce((acc, value) => acc += value);
console.log(balance2);

console.log(operations.reduce((acc, value) => acc < value ? acc : value));
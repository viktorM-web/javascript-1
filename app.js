const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];

for (const transaction of transactionInUSD) {
	transactionInRUB.push(transaction * 60);
}

console.log(transactionInRUB);
console.log(transactionInUSD);

const transactionInRUB2 =
	transactionInUSD.map(transaction => transaction * 60);
console.log(transactionInRUB2);
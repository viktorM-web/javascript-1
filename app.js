const operations = [1000, -700, 300, -500, 10000];
let initailBalance = 100;

printAverege();

console.log(`Final balance ${getFinalBalance(initailBalance, operations)}`);

function getFinalBalance(balance, listOperations) {
	for (let operation of listOperations) {
		balance += operation;
		if (balance < 0) {
			return false;
		}
	}
	return balance;
}

function printAverege() {
	let countPositiveOper = 0;
	let countNegativeOper = 0;
	let sumNegotiveOper = 0;
	let sumPositiveOper = 0;

	for (let operation of operations) {
		if (operation > 0) {
			countPositiveOper++;
			sumPositiveOper += operation;
		} else {
			countNegativeOper++;
			sumNegotiveOper -= operation;
		}
	}
	console.log(`Average expense ${sumNegotiveOper / countNegativeOper}`);
	console.log(`Average income ${sumPositiveOper / countPositiveOper}`);
}

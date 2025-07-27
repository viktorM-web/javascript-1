const age = 25;
const isWork = false;
const money = 1910;
const price = 2000;

function getCredit(age, isWork = false) {
	if (age > 24 && isWork) {
		console.log('can get 500$ in credit');
		return 500;
	} else if (age > 24) {
		console.log('can get 100$ in credit');
		return 100;
	}
	console.log('credit denied');
	return 0;
}

function canBuyMacBook(age, isWork, money, price) {
	if (money > price) {
		console.log('without credit');
		return true;
	}
	money += getCredit(age, isWork);
	if (money > price) {
		console.log('with credit');
		return true;
	}
	return false;
}

console.log(`Can I buy MacBook ${canBuyMacBook(age, isWork, money, price)}`);
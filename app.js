const wallet = {
	balance: 0,
	operations: [],

	income: function (sum, reason) {
		this.balance = this.balance + sum;
		this.operations.push(
			{
				reason: reason,
				ammount: sum
			}
		);
	},
	pay: function (sum, reason) {
		if (sum <= this.balance) {
			this.balance = this.balance - sum;
			this.operations.push(
				{
					reason: reason,
					ammount: -sum
				}
			);
			return true;
		} else {
			return false;
		}

	},
	getAmountOfOperation: function () {
		return this.operations.length;
	}
}

wallet.income(1000, 'Salary');
wallet.pay(9000, 'Apartment');
wallet.pay(5, 'Taxi');
wallet.pay(57, 'Restarun');
console.log(wallet.getAmountOfOperation());
console.log(wallet.balance)
console.log(wallet.operations)
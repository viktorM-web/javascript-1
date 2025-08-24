'user strict'

const userInfo = {
	balance: 0,
	operations: 0,
	increse(sum) {
		this.balance += sum;
		this.operations++;
	},
	blueprint() {
		return () => {
			let balance = this.balance;
			let operations = this.operations;
			let increse = this.increse;

			return {
				balance,
				operations,
				increse
			}
		}
	}
}

const user1 = userInfo.blueprint()();
console.log(user1);
user1.increse(100);
console.log(user1);
console.log(userInfo);

function createUser() {
	const userObj = {
		balance: 0,
		operations: 0,
		increse(sum) {
			this.balance += sum;
			this.operations++;
		}
	};
	return () => {
		return userObj;
	}
}

const user2 = createUser();
user2().increse(200);
user2().increse(300);
console.log(user2());

const user4 = createUser();
user4().increse(350);
console.log(user4());
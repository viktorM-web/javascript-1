const balance = 1000;
const actualBalance = prompt('Input your balance');
const bonusBalance = 100;
const actualBonusBalance = prompt('Input your bonus balance');
const isBanned = false;
const isExist = false;
const isSelling = true;

console.log(`Can I buy this game? ${(actualBalance > balance
	|| actualBonusBalance > bonusBalance)
	&& !isBanned
	&& !isExist
	&& isSelling
	? 'YES' : 'NO'}`);
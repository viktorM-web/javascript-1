function logName() {
	console.log(`My name is Victor`);
}

const a = logName();
console.log(a);//undefined

function logName(name, surname) {
	console.log(`My name is ${name} ${surname}`);
}

logName('Victor', 'Malahov');

function countDepositSum(depositInUSD, month, rate) {
	return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

console.log(countDepositSum(1000, 48, 0.10));

//anonymous function

function powerOfTwo(numb) {
	return numb * numb;
}

console.log(powerOfTwo(5));

const poft = function (numb) {
	return numb * numb;
}

console.log(poft(6));

//arrow function

const poft2 = (num) => num * num;
// const poft2 = num => num * num; //same

const poft3 = num => {
	console.log(num);
	return num * num;
};

console.log(poft3(8));
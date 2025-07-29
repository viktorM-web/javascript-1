const userData = ['Anton', 18, 'Moscow'];

function getData() {
	return ['Anton', 18, 'Moscow'];
}

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

// const [userName, age] = getData();
// console.log(userName, age); //Anton 18

const [userName, _, city] = getData();

console.log(userName, city);

const data = [1, 2, 3, 4, 5, 6];
// const [one, two, others] = data;
// console.log(one, two, others); //1 2 3

const [one, two, ...others] = data;
console.log(one, two, others); //1 2 [3, 4, 5, 6]
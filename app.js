const arr = [2, 4, 4, 10, 20];

function some(array, element) {
	const res = array.find(el => el === element);
	return res === undefined ? false : true;
}

console.log(some(arr, 0));
console.log(arr.some(el => el === 0));

console.log(some(arr, 10));
console.log(arr.some(el => el === 10));
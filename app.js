const array1 = ["!!!", "JS", "love", "I"];
const resultArray = [];

for (let index = array1.length - 1; index >= 0; index--) {
	resultArray.push(array1[index]);
}

console.log(resultArray.join(' '));
console.log(array1.reverse().join(' '));

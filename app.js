const secretNumber = '7';

if (secretNumber == 7) {
	console.log('equal exclude type')
}

if (Number(secretNumber) === 7) {
	console.log('equal include type and value')
}

const q = prompt('Input number');
if (Number(q) === 7) {
	console.log('equal exclude type')
}
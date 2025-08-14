const operation = [100, -20, 7, -20, 50];

operation
	.filter(num => num > 0)
	.map(num => num * 60)
	.forEach(num => console.log(num));
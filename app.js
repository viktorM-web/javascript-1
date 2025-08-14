const operations = [1, 4, 4, 10];

console.log(
	operations.reduce(
		(aver, val, i) =>
			i != operations.length - 1
				? aver += val
				: (aver += val) / operations.length
	)
);
const operations = [2, 4, 4, 10, 20];

console.log(
	operations.reduce(
		(aver, val, i) =>
			i != operations.length - 1
				? aver += val
				: (aver += val) / operations.length
	)
);

console.log(
	operations.find(
		el => el > 5
	)
);// 10

console.log(
	operations.findIndex(
		el => el > 5
	)
);// 3

console.log(
	operations.find(
		el => el > 90
	)
);//undefined

console.log(
	operations.findIndex(
		el => el > 90
	)
);//-1
const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
	console.log(`Raund ${i + 1}: ${el}`);
}

score.forEach(el => console.log(`Raund : ${el}`));

score.forEach((el, i) => console.log(`Raund ${i + 1}: ${el}`))
const card = '234283450345853';

function hideCardNumbet(cardNamber) {
	const lastDigits = cardNamber.slice(-4);
	console.log(lastDigits.padStart(cardNamber.length, '*'))
}

hideCardNumbet(card);//***********5853
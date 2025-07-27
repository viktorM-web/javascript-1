const res = prompt('How much 7 + or - 15');

switch (true) {
	case res === 'I am not a robot':
	case Number(res) === 22:
	case Number(res) === -8:
		console.log('Success');
		break;
	default:
		console.log('You are robot!!!');
}
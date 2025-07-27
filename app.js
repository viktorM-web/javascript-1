const role = 'ceo';

if (role === 'manager') {
	console.log('Manager');
} else if (role === 'admin') {
	console.log('Admin');
} else if (role === 'ceo') {
	console.log('CEO');
} else {
	console.log('We don`t know you!');
}

switch (role) {
	case 'manager':
		console.log('Manager');
		break;
	case 'admin':
		console.log('Admin');
		break;
	case 'ceo':
		console.log('CEO');
		break;
	default:
		console.log('We don`t know you!');
}

switch (role) {
	case 'manager':
	case 'admin':
		console.log('Not superviser');
		break;
	case 'ceo':
		console.log('Superviser');
		break;
	default:
		console.log('We don`t know you!');
}

const numb = 1;

switch (true) {
	case numb > 0:
		console.log('positive');
		break;
	case numb < 0:
		console.log('negative');
		break;
	default:
		console.log('Zero!');
}
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '	+7(910) 323-53-56 ';

const num6 = '8910323535';
const num7 = '+7d910d323-53-5';
const num8 = '9+7d910d323-53-5';
const num9 = '89103g23535';

function isphoneNumber(maybePhoneNumber) {
	const cleanMaybePhoneNumber = maybePhoneNumber.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll(' ', '')
		.replaceAll('-', '')
		.trim();

	console.log(cleanMaybePhoneNumber);
	if (cleanMaybePhoneNumber.startsWith('8') && cleanMaybePhoneNumber.length == 11) {
		return !isNaN(cleanMaybePhoneNumber);
	} else if (cleanMaybePhoneNumber.startsWith('+7') && cleanMaybePhoneNumber.length == 12) {
		return !isNaN(cleanMaybePhoneNumber.replace('+', ''));
	} else {
		return false;
	}
}

console.log(isphoneNumber(num1));
console.log(isphoneNumber(num2));
console.log(isphoneNumber(num3));
console.log(isphoneNumber(num4));
console.log(isphoneNumber(num5));
console.log(isphoneNumber(num6));
console.log(isphoneNumber(num7));
console.log(isphoneNumber(num8));
console.log(isphoneNumber(num9));
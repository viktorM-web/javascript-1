'use strict';

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}

	const value = JSON.parse(`{"text":"${input}"}`);
	localStorage.setItem('text', JSON.stringify(value));

	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.remove('notification');
};

function submitByEnter(e) {
	if (e.code == 'Enter') {
		submitForm();
	}
};

const obj = JSON.parse('{"a":1}');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str);
'use strict';

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.remove('notification');
};

function submitByEnter(e) {
	if (e.code == 'Enter') {
		submitForm();
	}
};

localStorage.setItem('token1', 1);
localStorage.setItem('token2', 'dfsdfsdf');
localStorage.setItem('token2', true);

const token1 = localStorage.getItem('token2')

console.log(typeof token1);//string
localStorage.removeItem('token1');

localStorage.clear();
